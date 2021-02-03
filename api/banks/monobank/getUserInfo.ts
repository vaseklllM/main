import fetchData, { IfetchDataParams } from "../../fetchData"
// import { IServUser } from "./interface"

const ISOCurrncyCodes = {
  "980": "UAH",
  "840": "USD",
  "978": "EUR",
}

export interface IBankCard {
  id: string
  balance: number
  cardNumber?: string
  iban: string
  isFop: boolean /** ФОП счет */
  currency: string
}

export interface IMonobankUserData {
  user: {
    id: string
    name: string
  }
  bankCards: IBankCard[]
}

interface IServMonoGetUserInfo extends IfetchDataParams {
  data?: IMonobankUserData
}

// поучение списка пользователей
export default async function getUserInfo(token: string): Promise<IServMonoGetUserInfo> {
  try {
    const res = await fetch("https://api.monobank.ua/personal/client-info", {
      method: "GET",
      headers: {
        "X-Token": token,
      },
    })

    if (res.ok) {
      const userData = await res.json()

      const data: IServMonoGetUserInfo = {
        data: {
          user: {
            id: userData.clientId,
            name: userData.name,
          },
          bankCards: convertBackCard(userData.accounts),
        },
        ok: true,
      }

      return data
    } else {
      return { ok: false }
    }
  } catch (error) {
    return { ok: false }
  }
}

function convertBackCard(cards): IBankCard[] {
  const res: IBankCard[] = []

  cards.forEach((el) => {
    if (el) {
      let newCard: IBankCard = {
        id: el.id,
        balance: el.balance,
        iban: el.iban,
        isFop: el.type === "fop",
        currency: ISOCurrncyCodes[el.currencyCode],
      }

      const cardNumber: string = el.maskedPan?.[0]

      if (cardNumber) {
        newCard = {
          ...newCard,
          cardNumber,
        }
      }

      res.push(newCard)
    }
  })

  return res
}

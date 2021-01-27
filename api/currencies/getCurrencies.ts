import { IfetchDataParams } from "../fetchData"

interface IData {
  key: string /** тикет, ключ валюты */
  exchangeDate: string /** дата обновления */
  id: number
  value: number /** цена */
  name: string /** название валюты */
  symbol?: string
}

export interface IServCurrencies extends IfetchDataParams {
  data: IData[]
}

const symbols = {
  USD: "$",
  EUR: "€",
  RUB: "₽",
}

// cc: "AUD"
// exchangedate: "28.01.2021"
// r030: 36
// rate: 21.6703
// txt: "Австралійський долар"

// вход в акканут
export default async function getCurrencies(): Promise<IServCurrencies> {
  const response = await fetch(
    "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json"
  )

  if (response.ok) {
    const currencies = await response.json()

    return {
      ok: true,
      data: convertData(currencies),
    }
  } else return { ok: false, data: [] }
}

function convertData(currencies) {
  let data: IData[] = []

  currencies.forEach((el) => {
    data.push({
      id: el.r030,
      key: el.cc,
      exchangeDate: el.exchangedate,
      value: el.rate,
      name: el.txt,
      symbol: symbols[el.cc],
    })
  })

  return data
}

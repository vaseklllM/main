const fetch = require("node-fetch")

/** загрузка інформації про користувача */
async function getUserInfoByToken(token) {
  try {
    const res = await fetch("https://api.monobank.ua/personal/client-info", {
      method: "GET",
      headers: {
        "X-Token": token,
      },
    })

    if (res.status === 200) {
      const userData = await res.json()

      const data = {
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
  } catch {
    return { ok: false }
  }
}

function convertBackCard(cards) {
  const res = []

  const ISOCurrncyCodes = {
    980: "UAH",
    840: "USD",
    978: "EUR",
  }

  cards.forEach((el) => {
    if (el) {
      let newCard = {
        id: el.id,
        balance: el.balance,
        iban: el.iban,
        isFop: el.type === "fop",
        currency: ISOCurrncyCodes[el.currencyCode],
      }

      const cardNumber = el.maskedPan?.[0]

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

module.exports = getUserInfoByToken

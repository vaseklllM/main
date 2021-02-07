const Finance = require("../../../../models/finance")

/** добавлення токена в список рахунків монобанка */
async function addMonobankToken({ financeId, token, userName }) {
  // console.log(bankUserInfo)
  const finance = await Finance.findById(financeId)
  if (finance.currencies.bankCards.monobank.findIndex((i) => i.token === token) === -1) {
    finance.currencies.bankCards.monobank.push({ token, user: { name: userName } })
    finance.save()
    return true
  } else return false
}

module.exports = addMonobankToken

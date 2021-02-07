const Finance = require("../../../../models/finance")

/** добавлення токена в список рахунків монобанка */
async function addMonobankToken(financeId, token) {
  const finance = await Finance.findById(financeId)
  if (finance.currencies.bankCards.monobank.findIndex((i) => i.token === token) === -1) {
    finance.currencies.bankCards.monobank.push({ token })
    finance.save()
    return true
  } else return false
}

module.exports = addMonobankToken

const Finance = require("../../../../models/finance")

/** добавлення токена в список рахунків монобанка */
async function addMonobankToken(financeId, token) {
  const finance = await Finance.findById(financeId)
  finance.currencies.bankCards.monobank.push({ token })
  finance.save()
}

module.exports = addMonobankToken

const Finance = require("../../models/finance")

function getFinanceEmptyDataId() {
  const finance = new Finance({
    currencies: {
      bankCards: {
        monobank: [],
        privatbank: [],
      },
    },
  })

  finance.save()

  return finance._id
}

module.exports = getFinanceEmptyDataId

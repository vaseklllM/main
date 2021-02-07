const User = require("../models/User")
const servConfig = require("../config")
const Finance = require("../models/finance")

const monobankToken = "ujYqnPZHQNeQv83VSMwGCzwYCIhpNgr2w2W2BDxIr7J4"

/**
 * Создание блока finance
 */
async function createFinance() {
  const admin = await User.findOne({ email: servConfig.adminAccount.email })
  const finance = new Finance({
    currencies: {
      bankCards: {
        monobank: [
          {
            token: monobankToken,
          },
        ],
      },
    },
  })

  if (admin && !admin._financeId) {
    finance.save()
    admin._financeId = finance._id
    admin.save()
  }
}

module.exports = createFinance

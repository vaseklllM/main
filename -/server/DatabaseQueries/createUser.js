const getFinanceEmptyDataId = require("../createDefaultData/pages/finance")
const User = require("../models/User")
const bcrypt = require("bcryptjs")

/** створення користувача */
async function createUser({ email, password, nickname }) {
  const candidate = await User.findOne({ email })

  if (candidate) return false

  const hashedPassword = await bcrypt.hash(password, 12)

  const user = new User({
    email,
    password: hashedPassword,
    nickname,
    _financeId: getFinanceEmptyDataId(),
  })
  user.save()
  return user
}

module.exports = createUser

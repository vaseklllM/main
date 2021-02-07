const bcrypt = require("bcryptjs")
const User = require("../models/User")
const servConfig = require("../config")

/**
 * Создание акканута администратора
 */
async function createAdminAccount() {
  const candidate = await User.findOne({ email: servConfig.adminAccount.email })
  if (candidate) return undefined
  const hashedPassword = await bcrypt.hash(servConfig.adminAccount.password, 12)
  const user = new User({
    email: servConfig.adminAccount.email,
    password: hashedPassword,
    nickname: servConfig.adminAccount.nickname,
  })
  user.save()
}

module.exports = createAdminAccount

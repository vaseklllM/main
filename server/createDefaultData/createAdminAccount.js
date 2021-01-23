const bcrypt = require("bcryptjs")
const User = require("../models/User")

const email = "admin"
const nickname = "vasek"
const password = "admin"

/**
 * Создание акканута администратора
 */
async function createAdminAccount() {
  const candidate = await User.findOne({ email })
  if (candidate) return undefined
  const hashedPassword = await bcrypt.hash(password, 12)
  const user = new User({ email, password: hashedPassword, nickname })
  user.save()
}

module.exports = createAdminAccount

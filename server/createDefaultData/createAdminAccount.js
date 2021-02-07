const servConfig = require("../config")
const createUser = require("../DatabaseQueries/createUser")

/** Создание акканута администратора
 */
async function createAdminAccount() {
  createUser({
    email: servConfig.adminAccount.email,
    password: servConfig.adminAccount.password,
    nickname: servConfig.adminAccount.nickname,
  })
}

module.exports = createAdminAccount

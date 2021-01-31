import login from "./user/login"
import getUsers from "./user/getUsers"
import getUserDataByToken from "./user/getActiveUserData"
import getCurrencies from "./currencies/getCurrencies"
import registration from "./user/registration"
import getUserInfo from "./banks/monobank/getUserInfo"

const api = {
  user: {
    // вход в аккаунт
    login,
    /** получить список пользователей */
    getUsers,
    /** получить информацию о пользователе */
    getUserDataByToken,
    /** Реєстрація нового користувача */
    registration,
  },
  currencies: {
    /** курси валют */
    getCurrencies,
  },
  banks: {
    monobank: {
      getUserInfo,
    },
  },
}

export default api

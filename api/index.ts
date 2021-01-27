import login from "./user/login"
import getUsers from "./user/getUsers"
import getUserDataByToken from "./user/getActiveUserData"
import getCurrencies from "./currencies/getCurrencies"

const api = {
  user: {
    // вход в аккаунт
    login,
    /** получить список пользователей */
    getUsers,
    /** получить информацию о пользователе */
    getUserDataByToken,
  },
  currencies: {
    /** курси валют */
    getCurrencies,
  },
}

export default api

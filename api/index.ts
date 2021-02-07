import login from "./user/login"
import getUsers from "./user/getUsers"
import getUserDataByToken from "./user/getActiveUserData"
import getCurrencies from "./currencies/getCurrencies"
import registration from "./user/registration"
import getUserInfo from "./banks/monobank/getUserInfo"
import addMonobankToken from "./banks/monobank/addMonobankToken"
import getAllCards from "./banks/getAllCards"

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
  /** блок фінансів */
  finance: {
    banks: {
      /** Повертає список банківських карт */
      getAllCards,
      monobank: {
        getUserInfo,
        /** добавлення токена від монобанку */
        addMonobankToken,
      },
    },
  },
}

export default api

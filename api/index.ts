import login from "./user/login"
import getUsers from "./user/getUsers"
import getUserDataByToken from "./user/getActiveUserData"

const api = {
  user: {
    // вход в аккаунт
    login,
    /** получить список пользователей */
    getUsers,
    /** получить информацию о пользователе */
    getUserDataByToken,
  },
}

export default api

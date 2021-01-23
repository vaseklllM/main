import login from "./user/login"
import getUsers from "./user/getUsers"

const api = {
  user: {
    // вход в аккаунт
    login,
    /** получить список пользователей */
    getUsers,
  },
}

export default api

import { status } from "../../utils/status"
import types from "./types"

interface IAuth {
  isAuth: boolean
  isAuthStatus: status
}

const auth: IAuth = {
  isAuth: false,
  isAuthStatus: status.no_data,
}

export default (state = auth, action): IAuth => {
  const { payload } = action

  switch (action.type) {
    // загрузка информации о пользователе
    case types.CHENGE_IS_AUTH:
      return {
        ...state,
        ...payload,
      }

    case types.LOGOUT:
      return {
        ...state,
        isAuth: false,
        isAuthStatus: status.no_data,
      }

    default:
      return state
  }
}

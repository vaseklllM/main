import { status } from "../../utils/status"
import { ISAuth } from "../interface/auth"
import types from "./types"

const auth: ISAuth = {
  data: {
    isAuth: false,
    email: undefined,
    nickname: undefined,
    _id: undefined,
  },
  isAuthStatus: status.no_data,
}

export default (state = auth, action): ISAuth => {
  const { payload } = action

  switch (action.type) {
    /** Вхід в аккаунт */
    case types.LOGIN:
      return {
        ...state,
        data: {
          isAuth: payload.isAuth,
          email: payload.email,
          nickname: payload.nickname,
          _id: payload._id,
        },
      }

    case types.CHANGE_DATA_STATUS:
      return {
        ...state,
        isAuthStatus: payload,
      }

    case types.LOGOUT:
      return {
        ...state,
        data: auth.data,
      }

    default:
      return state
  }
}

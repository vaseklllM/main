import { status } from "../../utils/status"
import types from "./types"

export interface IStoreAuthData {
  isAuth: boolean
  email?: string
  nickname?: string
  _id?: string
}

interface IStoreAuth {
  data: IStoreAuthData
  isAuthStatus: status
}

const auth: IStoreAuth = {
  data: {
    isAuth: false,
    email: undefined,
    nickname: undefined,
    _id: undefined,
  },
  isAuthStatus: status.no_data,
}

export default (state = auth, action): IStoreAuth => {
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

    default:
      return state
  }
}

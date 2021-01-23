import types from "../types"

export interface IActionLogin {
  isAuth: boolean
  email?: string
  nickname?: string
  _id?: string
}

export default function login(payload: IActionLogin) {
  return {
    type: types.LOGIN,
    payload,
  }
}

import { status } from "../../enums/status"

export interface ISAuthData {
  isAuth: boolean
  email?: string
  nickname?: string
  _id?: string
}

export interface ISAuth {
  data: ISAuthData
  isAuthStatus: status
}

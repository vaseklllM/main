import { status } from "../../enums/status"

export interface ISUsersData {
  email?: string
  nickname?: string
  _id?: string
}

export default interface ISUsers {
  data: ISUsersData[]
  dataStatus: status
}

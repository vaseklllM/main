import fetchData, { IfetchDataParams } from "../fetchData"
import { IServUser } from "./interface"

export interface IServActiveUserData extends IfetchDataParams {
  data: {
    user?: IServUser
    message?: string
  }
}

/** получить информацию о пользователе */
export default async function getActiveUserData(): Promise<IServActiveUserData> {
  return await fetchData("api/auth/getActiveUserData")
}

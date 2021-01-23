import fetchData, { IfetchDataParams } from "../fetchData"
import { IServUser } from "./interface"

export interface IServUsers extends IfetchDataParams {
  data: IServUser[]
}

// поучение списка пользователей
export default async function getUsers(): Promise<IServUsers> {
  const res = await fetchData("api/auth/getUsers")

  return res.data
}

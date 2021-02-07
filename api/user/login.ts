import fetchData, { IfetchDataParams } from "../fetchData"
import { IServUser } from "./interface"

interface IData {
  message: string
  token?: string
  user: IServUser
}

export interface IServLogin extends IfetchDataParams {
  data: IData
}

// вход в акканут
export default async function login(
  email: string,
  password: string
): Promise<IServLogin> {
  const res: IServLogin = await fetchData("api/auth/login", {
    body: { email, password },
    method: "POST",
  })

  return res
}

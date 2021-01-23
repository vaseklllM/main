import fetchData, { IfetchDataParams } from "../fetchData"

interface IData {
  message: string
  token?: string
  user: {
    email: string
    nickname: string
    _id: string
  }
}

export interface IServLogin extends IfetchDataParams {
  data: IData
}

// вход в акканут
export default async function login(email: string, password: string): Promise<IServLogin> {
  const res: IServLogin = await fetchData("api/auth/login", {
    body: { email, password },
    method: "POST",
  })

  // установка токена в localStorage
  // if (res.ok) localStorage.token = res.data.token

  return res
}

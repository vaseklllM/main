import fetchData, { IfetchDataParams } from "../fetchData"

interface IData {
  message: string
  token?: string
}

interface IServData extends IfetchDataParams {
  data: IData
}

// вход в акканут
export default async function login(email: string, password: string): Promise<IServData> {
  const res: IServData = await fetchData("api/auth/login", {
    body: { email, password },
    method: "POST",
  })

  // установка токена в localStorage
  if (res.ok) localStorage.token = res.data.token

  return res
}

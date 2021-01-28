import fetchData, { IfetchDataParams } from "../fetchData"

interface IServRegistrationData {
  message?: string
  token?: string
  userId?: string
}

export interface IServRegistration extends IfetchDataParams {
  data: IServRegistrationData
}

interface IBody {
  email: string
  nickname: string
  password: string
}

// поучение списка пользователей
export default async function registration(body: IBody): Promise<IServRegistration> {
  return await fetchData("api/auth/registration", { body, method: "POST" })
}

import fetchData, { IfetchDataParams } from "../fetchData"

interface IData {
  _id: string
  email: string
  nickname: string
}

export interface IServUsers extends IfetchDataParams {
  data: IData[]
}

// поучение списка пользователей
export default async function getUsers(): Promise<IServUsers> {
  const res = await fetchData("api/auth/getUsers")

  return res.data
}

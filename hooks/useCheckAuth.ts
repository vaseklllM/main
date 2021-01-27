import { useRouter } from "next/router"
import { useSelector } from "react-redux"
import IStore from "../store/interface"

/** Перевірка на авторизацію */
export default function useCheckAuth() {
  const router = useRouter()
  const isAuth = useSelector((store: IStore) => store.auth.data.isAuth)

  if (!isAuth) router.push("/login")

  return isAuth
}

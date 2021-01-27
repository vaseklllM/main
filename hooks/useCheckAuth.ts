import { useRouter } from "next/router"
import { useSelector } from "react-redux"
import IStore from "../store/interface"
import { ISAuth } from "../store/interface/auth"
import { status } from "../utils/status"

/** Перевірка на авторизацію */
export default function useCheckAuth() {
  const router = useRouter()
  const auth: ISAuth = useSelector((store: IStore) => store.auth)

  if (!auth.data.isAuth && auth.isAuthStatus === status.successful) router.push("/login")

  return auth.data.isAuth
}

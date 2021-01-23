import { status } from "../utils/status"

interface Istore {
  auth: {
    isAuth: boolean
    isAuthStatus: status
  }
}

export default Istore

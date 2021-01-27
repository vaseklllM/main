import types from "../types"
import login from "./login"
import changeDataStatus from "./changeDataStatus"
import commonActions from "../../CommonFunctions/actions"

const authActions = {
  login,
  changeDataStatus,
  /** выход из акаунта */
  logout: commonActions.simple(types.LOGOUT),
}

export default authActions

import types from "../types"
import commonActions from "../../CommonFunctions/actions"
import getData from "./getData"

const usersActions = {
  getData,
  changeDataStatus: commonActions.simple(types.CHANGE_DATA_STATUS),
}

export default usersActions

import types from "../types"
import commonActions from "../../CommonFunctions/actions"

const globalActions = {
  changeWidth: commonActions.simple(types.CHANGE_WINDOW_WIDTH),
  changeHeight: commonActions.simple(types.CHANGE_WINDOW_HEIGHT),
}

export default globalActions

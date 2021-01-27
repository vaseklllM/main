import { combineReducers } from "redux"
import auth from "./auth/reducer"
import financeReducers from "./finance"

export default combineReducers({ auth, ...financeReducers })

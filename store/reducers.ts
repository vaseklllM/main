import { combineReducers } from "redux"
import auth from "./auth/reducer"
import financeReducers from "./finance"
import users from "./users/reducer"
import global from "./global/reducer"

export default combineReducers({ auth, ...financeReducers, users, global })

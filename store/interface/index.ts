import { ISAuth } from "./auth"
import { ISGlobal } from "./global"
import ISUsers from "./users"
import { ISFinanceCurrencies } from "./сurrencies"

export default interface IStore {
  auth: ISAuth
  financeCurrencies: ISFinanceCurrencies
  users: ISUsers
  global: ISGlobal
}

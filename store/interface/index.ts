import { ISAuth } from "./auth"
import { ISFinanceCurrencies } from "./сurrencies"

export default interface IStore {
  auth: ISAuth
  financeCurrencies: ISFinanceCurrencies
}

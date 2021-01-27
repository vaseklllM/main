import { status } from "../../utils/status"

interface ISFinanceCurrenciesData {
  id: number
  key: string
  name: string
  symbol: string
  value: number
}

export interface ISFinanceCurrencies {
  data: ISFinanceCurrenciesData[]
  dataStatus: status
}

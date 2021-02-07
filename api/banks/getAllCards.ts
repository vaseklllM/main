import fetchData, { IfetchDataParams } from "../fetchData"

interface IServAllBankCardsDataBank {
  isActive: Boolean
  token: string
  user: {
    name: string
  }
  _id: string
}
export interface IServAllBankCardsData {
  monobank: IServAllBankCardsDataBank[]
  privatbank: IServAllBankCardsDataBank[]
}

interface IServGetAllCards extends IfetchDataParams {
  data?: IServAllBankCardsData
}

export default async function getAllCards(): Promise<IServGetAllCards> {
  return await fetchData("api/finance/getBankCards")
}

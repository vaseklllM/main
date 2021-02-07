import { IfetchDataParams } from "../fetchData"

interface IServAllBankCardsData {}

interface IServGetAllCards extends IfetchDataParams {
  data?: IServAllBankCardsData
}

export default async function getAllCards(): Promise<IServGetAllCards> {



  return {
    ok: true,
  }
}

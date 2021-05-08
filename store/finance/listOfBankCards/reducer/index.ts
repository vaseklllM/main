import { status } from "../../../../enums/status"
import ISFinanceListOfBankCards from "../../../interface/listOfBankCards"
import types from "../types"

const financeListOfBankCards: ISFinanceListOfBankCards = {
  data: [],
  dataStatus: {
    firstLoad: status.no_data,
    renewal: status.no_data,
  },
}

export default (state = financeListOfBankCards, action): ISFinanceListOfBankCards => {
  const { payload } = action

  switch (action.type) {
    case types.GET_DATA:
      return {
        ...state,
        ...payload,
      }

    case types.CHANGE_DATA_STATUS:
      if (payload as status) {
        return {
          ...state,
          dataStatus: payload,
        }
      } else return state

    default:
      return state
  }
}

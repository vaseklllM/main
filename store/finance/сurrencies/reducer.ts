import { status } from "../../../utils/status"
import { ISFinanceCurrencies } from "../../interface/сurrencies"
import types from "./types"

const financeCurrencies: ISFinanceCurrencies = {
  data: [],
  dataStatus: status.no_data,
}

export default (state = financeCurrencies, action): ISFinanceCurrencies => {
  const { payload } = action

  switch (action.type) {
    case types.GET_COURSES:
      return {
        ...state,
        ...payload,
      }

    case types.CHANGE_GET_COURSES_STATUS:
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

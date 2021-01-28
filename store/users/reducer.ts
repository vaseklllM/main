import { status } from "../../utils/status"
import ISUsers from "../interface/users"
import types from "./types"

const users: ISUsers = {
  data: [],
  dataStatus: status.no_data,
}

export default (state = users, action): ISUsers => {
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

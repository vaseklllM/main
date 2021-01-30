import { ISGlobal } from "../interface/global"
import types from "./types"

const global: ISGlobal = {
  width: 0,
  height: 0,
}

export default (state = global, action): ISGlobal => {
  const { payload } = action

  switch (action.type) {
    case types.CHANGE_WINDOW_WIDTH:
      if (typeof payload === "number") {
        return {
          ...state,
          width: payload,
        }
      } else return state

    case types.CHANGE_WINDOW_HEIGHT:
      if (typeof payload === "number") {
        return {
          ...state,
          height: payload,
        }
      } else return state

    default:
      return state
  }
}

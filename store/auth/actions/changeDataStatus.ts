import { status } from "../../../utils/status"
import types from "../types"

export default function changeDataStatus(payload: status) {
  return {
    type: types.CHANGE_DATA_STATUS,
    payload,
  }
}

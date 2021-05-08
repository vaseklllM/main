import api from "../../../api"
import { status } from "../../../enums/status"
import types from "../types"

const getData = () => async (dispatch) => {
  function disp(payload) {
    dispatch({ type: types.GET_DATA, payload })
  }

  const res = await api.user.getUsers()

  if (res.ok) {
    disp({ data: res.data, dataStatus: status.successful })
  } else {
    disp({ data: [], dataStatus: status.error })
  }
}

export default getData

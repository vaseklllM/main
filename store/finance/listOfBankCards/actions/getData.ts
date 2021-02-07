import api from "../../../../api"
import { status } from "../../../../utils/status"
import types from "../types"

const getData = () => async (dispatch) => {
  function disp(payload) {
    dispatch({
      type: types.GET_DATA,
      payload,
    })
  }

  const res = await api.finance.banks.getAllCards()

  if (res.ok) {
    disp({
      data: res.data,
      dataStatus: {
        firstLoad: status.successful,
        renewal: status.successful,
      },
    })
  } else {
    disp({
      dataStatus: {
        firstLoad: status.error,
        renewal: status.error,
      },
    })
  }
}

export default getData

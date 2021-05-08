import api from "../../../../api"
import { status } from "../../../../enums/status"
import types from "../types"

const uah = {
  id: 0,
  name: "Гривня",
  symbol: "₴",
  value: 1,
  key: "UAH",
}

/** загрузка курсов валют */
const getCourses = () => async (dispatch) => {
  function disp(payload) {
    dispatch({
      type: types.GET_COURSES,
      payload,
    })
  }

  const res = await api.currencies.getCurrencies()

  const keys = ["USD", "RUB", "EUR"]

  if (res.ok) {
    disp({ data: convertData(res.data, keys), dataStatus: status.successful })
  } else {
    disp({ dataStatus: status.error })
  }
}

function convertData(res, keys) {
  let data = [uah]

  res.forEach((el) => {
    if (keys.indexOf(el.key) !== -1) {
      data.push({
        id: el.id,
        name: el.name,
        symbol: el.symbol,
        value: el.value,
        key: el.key,
      })
    }
  })

  return data
}

export default getCourses

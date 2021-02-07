import types from "../types"

const getData = () => async (dispatch) => {
  function disp(payload) {
    return {
      type: types.GET_DATA,
      payload,
    }
  }


}


export default getData
import ISDataStatus from "../../interface/dataStatus"

/** универсальный экшин, создан чтобы не создать простые экшины */
const changeDataStatusAction = (type: string) => (payload?: ISDataStatus) => ({
  type,
  payload,
})

export default changeDataStatusAction

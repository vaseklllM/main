import { useEffect } from "react"
import { status } from "../../utils/status"

interface IUseGetData {
  getData: () => any
  changeDataStatus: (value: status) => any
  dataStatus: status
}

export default function useGetData(params: IUseGetData) {
  const { changeDataStatus, dataStatus, getData } = params

  useEffect(() => {
    fetchData()
  }, [])

  function fetchData() {
    if (dataStatus === status.no_data) {
      changeDataStatus(status.loading)
      getData()
    } else if (dataStatus === status.successful) {
      getData()
    }
  }
}

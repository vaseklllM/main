import { useEffect } from "react"
import ISDataStatus from "../../store/interface/dataStatus"
import { status } from "../../enums/status"

interface IUseGetData {
  getData: () => any
  changeDataStatus: (value: ISDataStatus) => any
  dataStatus: ISDataStatus
}

export default function useGetData(params: IUseGetData) {
  const { changeDataStatus, dataStatus, getData } = params

  useEffect(() => {
    fetchData()
  }, [])

  function fetchData() {
    if (dataStatus.firstLoad === status.no_data) {
      changeDataStatus({ firstLoad: status.loading, renewal: status.loading })
      getData()
    } else if (
      dataStatus.renewal === status.successful &&
      dataStatus.firstLoad === status.successful
    ) {
      changeDataStatus({ firstLoad: status.successful, renewal: status.loading })
      getData()
    }
  }
}

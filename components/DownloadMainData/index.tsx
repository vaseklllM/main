import { ReactElement } from "react"

interface Props {
  children: ReactElement
}

function DownloadMainData(props: Props): ReactElement {
  const { children } = props

  // console.log("start")

  return children
}

export default DownloadMainData

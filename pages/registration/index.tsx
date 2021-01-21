import { ReactElement } from "react"
import { DatePicker } from "antd"

interface Props {}

export default function Registration({}: Props): ReactElement {
  return (
    <div>
      <DatePicker />
    </div>
  )
}

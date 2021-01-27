import { ReactElement } from "react"
import { PageHeader } from "antd"
import classes from "./style.module.scss"
import { LoginButton } from "../../Buttons"

interface Props {}

function SectionsHeader(props: Props): ReactElement {
  return (
    <PageHeader
      className={classes.header}
      title={"Курс доллар/євро"}
      extra={<LoginButton />}
    ></PageHeader>
  )
}

export default SectionsHeader

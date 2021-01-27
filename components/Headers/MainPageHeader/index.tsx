import { ReactElement } from "react"
import { PageHeader } from "antd"
import classes from "./style.module.scss"
import LoginButton from "./LoginButton"

interface Props {
  title?: string
}

function MainPageHeader(props: Props): ReactElement {
  const { title } = props

  return (
    <PageHeader
      className={classes.header}
      title={title}
      extra={<LoginButton />}
    ></PageHeader>
  )
}

export default MainPageHeader

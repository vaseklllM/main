import { ReactElement } from "react"
import { PageHeader } from "antd"
import classes from "./style.module.scss"

interface Props {}

function LoginPageHeader({}: Props): ReactElement {
  return (
    <PageHeader
      onBack={() => window.history.back()}
      className={classes.header}
      title='Вхід'
    />
  )
}

export default LoginPageHeader

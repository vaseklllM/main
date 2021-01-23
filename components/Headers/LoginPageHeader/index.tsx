import { ReactElement } from "react"
import { PageHeader, Button } from "antd"
import classes from "./style.module.scss"
import Link from "next/link"

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

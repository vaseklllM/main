import { ReactElement } from "react"
import { PageHeader } from "antd"
import classes from "./style.module.scss"
import { useRouter } from "next/router"

interface Props {}

function LoginPageHeader({}: Props): ReactElement {
  const router = useRouter()

  return (
    <PageHeader onBack={() => router.push("/")} className={classes.header} title='Вхід' />
  )
}

export default LoginPageHeader

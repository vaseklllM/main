import { ReactElement } from "react"
import { PageHeader } from "antd"
import classes from "./style.module.scss"
import { LoginButton } from "../../Buttons"
import { HomeOutlined } from "@ant-design/icons"
import { useRouter } from "next/router"

interface Props {}

function FinanceHeader(props: Props): ReactElement {
  const router = useRouter()

  return (
    <PageHeader
      backIcon={<HomeOutlined />}
      onBack={() => router.push("/")}
      className={classes.header}
      title={"Курс доллар/євро"}
      extra={<LoginButton />}
    ></PageHeader>
  )
}

export default FinanceHeader

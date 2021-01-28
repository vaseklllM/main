import { ReactElement } from "react"
import { PageHeader } from "antd"
import classes from "./style.module.scss"
import { useRouter } from "next/router"

interface Props {
  title?: string
}

function EmptyHeader(props: Props): ReactElement {
  const { title = "Вхід" } = props
  const router = useRouter()

  return (
    <PageHeader
      onBack={() => router.push("/")}
      className={classes.header}
      title={title}
    />
  )
}

export default EmptyHeader

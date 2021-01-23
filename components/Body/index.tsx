import { Layout } from "antd"
import { ReactElement } from "react"
import classes from "./style.module.scss"

interface Props {
  children: ReactElement | ReactElement[]
}

export default function Body(props: Props): ReactElement {
  const { children } = props

  return <Layout className={classes.body}>{children}</Layout>
}

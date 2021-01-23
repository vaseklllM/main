import { ReactElement } from "react"
import { PageHeader, Button } from "antd"
import classes from "./style.module.scss"
import Link from "next/link"

interface Props {
  title?: string
}

function MainPageHeader(props: Props): ReactElement {
  const { title } = props

  return (
    <PageHeader
      className={classes.header}
      title={title}
      extra={[
        <Link key='1' href='/login'>
          <Button type='primary'>Вхід</Button>
        </Link>,
      ]}
    ></PageHeader>
  )
}

export default MainPageHeader

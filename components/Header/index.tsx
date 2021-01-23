import { ReactElement } from "react"
import { PageHeader, Tag, Button, Statistic, Descriptions, Row, Layout, Tabs } from "antd"
import classes from "./style.module.scss"
import Link from "next/link"

interface Props {
  title?: string
}

function Header(props: Props): ReactElement {
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
    >
      {/* <Row>
        <Statistic title='Status' value='Pending' />
        <Statistic
          title='Price'
          prefix='$'
          value={568.08}
          style={{
            margin: "0 32px",
          }}
        />
        <Statistic title='Balance' prefix='$' value={3345.08} />
      </Row> */}
    </PageHeader>
  )
}

export default Header

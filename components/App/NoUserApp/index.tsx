import React, { ReactElement } from "react"
import Body from "../../Body"
import { MainPageHeader } from "../../Headers"
import { Layout } from "antd"
import classes from "./style.module.scss"
import Users from "../../Users"

interface Props {}

export default function NoUserApp({}: Props): ReactElement {
  const { Content } = Layout

  return (
    <>
      <MainPageHeader title='Користувачі' />
      <Body>
        <Content className={classes.content}>
          <Users className={classes.users} />
        </Content>
      </Body>
    </>
  )
}

import React, { ReactElement } from "react"
import { Card, Col } from "antd"
import classes from "./style.module.scss"
import { txt } from "../../../utils"

interface Props {
  title?: string
  className?: string
  children?: ReactElement | ReactElement[]
}

export default function BancCard(props: Props): ReactElement {
  const { title = "card title", className, children } = props

  return (
    <Col className={txt.join([classes.card, className])}>
      <Card title={title} bordered={false}>
        {children}
      </Card>
    </Col>
  )
}

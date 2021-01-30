import React, { ReactElement, useState } from "react"
import { Col, Button, Tooltip, Typography } from "antd"
import classes from "./style.module.scss"
import { txt } from "../../../utils"
import { PlusOutlined, MinusOutlined } from "@ant-design/icons"

interface Props {
  title?: string
  className?: string
  children?: ReactElement | ReactElement[]
}

export default function BancCard(props: Props): ReactElement {
  const { title = "card title", className, children } = props
  const { Title } = Typography
  const [isAdd, setIsAdd] = useState(false)

  return (
    <Col className={txt.join([classes.card, className])}>
      <div>
        <div className={classes.title}>
          <Title level={5} className={classes.title_text}>
            {title}
          </Title>
          <Tooltip title={isAdd ? "Скрити" : "Підключити"}>
            <Button
              onClick={() => setIsAdd(!isAdd)}
              type='primary'
              shape='circle'
              icon={isAdd ? <MinusOutlined /> : <PlusOutlined />}
            />
          </Tooltip>
        </div>
        {isAdd && <div className={classes.hr} />}
        {isAdd && <div className={classes.body}>{children}</div>}
      </div>
    </Col>
  )
}

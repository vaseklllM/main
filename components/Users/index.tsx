import { Card, Col, Row } from "antd"
import Meta from "antd/lib/card/Meta"
import React, { ReactElement } from "react"
import { txt } from "../../utils"
import classes from "./style.module.scss"

interface Props {
  className?: string
}

export default function Users(props: Props): ReactElement {
  const { className } = props

  const users = [
    {
      name: "vasek",
      description: "Администратор",
      img: "/user_icon.png",
    },
    {
      name: "vasek 2",
      description: "Администратор",
      img: "/user_icon.png",
    },
  ]

  return (
    <div className={txt.join([classes.users, className])}>
      <Row gutter={[0, 24]}>
        {users.map((el, i) => (
          <Col span={6} xs={24} sm={12} md={8} lg={6} xl={4} xxl={3} key={i}>
            <Card
              className={classes.cart}
              hoverable
              style={{ maxWidth: 180 }}
              cover={<img alt='example' src={el.img} />}
            >
              <Meta title={el.name} description={el.description} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}

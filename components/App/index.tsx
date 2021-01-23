import { Card, Layout, Row, Typography, Col } from "antd"
import classes from "./style.module.scss"

const { Meta } = Card

export default function App() {
  const { Content } = Layout
  const { Title } = Typography

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
    <Layout>
      <Content>
        <Row justify={"center"}>
          <Title level={4}>Пользователи</Title>
        </Row>
        <div className={classes.users}>
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
      </Content>
    </Layout>
  )
}
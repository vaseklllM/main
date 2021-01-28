import { Card, Col, Row } from "antd"
import Meta from "antd/lib/card/Meta"
import React, { ReactElement, useEffect } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import IStore from "../../store/interface"
import ISUsers from "../../store/interface/users"
import usersActions from "../../store/users/actions"
import { txt } from "../../utils"
import { status } from "../../utils/status"
import classes from "./style.module.scss"

interface Props {
  className?: string
  users: ISUsers
  getData: () => any
  changeDataStatus: (payload: status) => any
}

function Users(props: Props): ReactElement {
  const { className, getData, changeDataStatus, users } = props

  useEffect(() => {
    changeDataStatus(status.loading)
    getData()
  }, [])

  if (users.dataStatus !== status.successful) return null

  return (
    <div className={txt.join([classes.users, className])}>
      <Row gutter={[0, 24]}>
        {users.data.map((el, i) => (
          <Col span={6} xs={24} sm={12} md={8} lg={6} xl={4} xxl={3} key={i}>
            <Card
              className={classes.cart}
              hoverable
              style={{ maxWidth: 180 }}
              cover={<img alt='example' src='/user_icon.png' />}
            >
              <Meta title={el.email} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}

const mapState = (store: IStore) => ({
  users: store.users,
})

const mapDispatch = (d) => {
  const { changeDataStatus, getData } = usersActions
  const actions = {
    changeDataStatus,
    getData,
  }

  return bindActionCreators(actions, d)
}

export default connect(mapState, mapDispatch)(Users)

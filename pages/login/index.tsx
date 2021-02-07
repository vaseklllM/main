import React, { useEffect } from "react"
import { Col, Form, Input, Button, Checkbox, message } from "antd"
import classes from "./style.module.scss"
import Body from "../../components/Body"
import { EmptyHeader } from "../../components/Headers"
import api from "../../api"
import { IServLogin } from "../../api/user/login"
import { bindActionCreators } from "redux"
import authActions from "../../store/auth/actions"
import { connect } from "react-redux"
import { IActionLogin } from "../../store/auth/actions/login"
import { useRouter } from "next/router"
import { status } from "../../utils/status"
import { ISAuthData } from "../../store/interface/auth"

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
}
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
}

interface IProps {
  login: (payload: IActionLogin) => {}
  userData: ISAuthData
  userDataStatus: status
  changeDataStatus: (v: status) => {}
}
interface loginValues {
  email: string
  password: string
  remember: boolean
}

const Login = (props: IProps) => {
  const { login, userData, userDataStatus, changeDataStatus } = props
  const router = useRouter()

  useEffect(() => {
    if (userData.isAuth && userDataStatus === status.successful) {
      router.push("/")
    }
  }, [userData, userDataStatus])

  const onFinish = async (values: loginValues) => {
    changeDataStatus(status.loading)
    const { email, password, remember } = values

    const key = `login${email}`
    message.loading({ content: "Вхід...", key })

    const res: IServLogin = await api.user.login(email, password)

    if (res.ok) {
      message.success({ content: res.data.message, key, duration: 2 })

      localStorage.setItem("token", res.data.token)

      /** удаление токена при выходе или перезагрузке страницы */
      if (!remember) {
        window.onbeforeunload = function () {
          localStorage.removeItem("token")
        }
      }

      login({ ...res.data.user, isAuth: true })
      changeDataStatus(status.successful)
    } else {
      changeDataStatus(status.error)
      message.error({ content: res.data.message, key, duration: 2 })
    }
  }

  return (
    <>
      <EmptyHeader />
      <Body>
        <div className={classes.body}>
          <Col sm={20} md={18} lg={15} xl={12} xxl={8}>
            <Form
              {...layout}
              name='basic'
              initialValues={{ remember: true }}
              onFinish={onFinish}
            >
              <Form.Item
                name='email'
                label='E-mail'
                rules={[{ required: true, message: "Пожалуйста, введите свой E-mail!" }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name='password'
                label='Пароль'
                rules={[{ required: true, message: "Пожалуйста, введите свой пароль!" }]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item {...tailLayout} name='remember' valuePropName='checked'>
                <Checkbox>Запам'ятати користувача</Checkbox>
              </Form.Item>

              <Form.Item {...tailLayout}>
                <Button type='primary' htmlType='submit'>
                  Ввійти
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </div>
      </Body>
    </>
  )
}

const mapState = (state) => ({
  userData: state.auth.data,
  userDataStatus: state.auth.isAuthStatus,
})

const mapDispatch = (d) => {
  const { login, changeDataStatus } = authActions
  const actions = {
    login,
    changeDataStatus,
  }
  return bindActionCreators(actions, d)
}

export default connect(mapState, mapDispatch)(Login)

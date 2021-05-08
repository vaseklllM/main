import React from "react"
import { Form, Input, Tooltip, Checkbox, Button, Layout, Col } from "antd"
import { QuestionCircleOutlined } from "@ant-design/icons"
import classes from "./style.module.scss"
import { EmptyHeader } from "../../components/Headers"
import api from "../../api"
import { message } from "antd"
import { connect } from "react-redux"
import authActions from "../../store/auth/actions"
import { IActionLogin } from "../../store/auth/actions/login"
import { bindActionCreators } from "redux"
import IStore from "../../store/interface"
import { ISAuth } from "../../store/interface/auth"
import { status } from "../../enums/status"
import { useRouter } from "next/router"

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
}
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
}

interface IProps {
  login: (payload: IActionLogin) => any
  auth: ISAuth
  changeDataStatus: (payload: status) => any
}

const RegistrationForm = (props: IProps) => {
  const { login, auth, changeDataStatus } = props
  const [form] = Form.useForm()
  const router = useRouter()

  if (auth.isAuthStatus === status.successful && auth.data.isAuth) {
    router.push("/")
  }

  const key = "registration"

  const onFinish = async (values) => {
    message.loading({ content: "Реєстрація...", key })

    const { email, nickname, password } = values

    const res = await api.user.registration({ email, nickname, password })

    if (res.ok) {
      message.success({ content: res.data.message, key })
      localStorage.setItem("token", res.data.token)
      login({ isAuth: true, _id: res.data.userId, email, nickname })
      changeDataStatus(status.successful)
    } else {
      message.error({ content: res.data.message, key })
    }
  }

  return (
    <>
      <EmptyHeader title='Реєстрація' />
      <Layout>
        <div className={classes.body}>
          <Col sm={20} md={18} lg={15} xl={12} xxl={8}>
            <Form
              {...formItemLayout}
              form={form}
              name='register'
              onFinish={onFinish}
              scrollToFirstError
            >
              <Form.Item
                name='email'
                label='E-mail'
                rules={[
                  {
                    type: "email",
                    message: "Введено невірний E-mail!",
                  },
                  {
                    required: true,
                    message: "Будь ласка, введіть свій E-mail!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name='nickname'
                label={
                  <span>
                    Нікнейм&nbsp;
                    <Tooltip title='Як ви хочете, щоб вас називали?'>
                      <QuestionCircleOutlined />
                    </Tooltip>
                  </span>
                }
                rules={[
                  {
                    required: true,
                    message: "Будь ласка, введіть свій нікнейм!",
                    whitespace: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name='password'
                label='Пароль'
                rules={[
                  {
                    required: true,
                    message: "Будь ласка, введіть свій пароль!",
                  },
                ]}
                hasFeedback
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                name='confirm'
                label='Підтвердіть пароль'
                dependencies={["password"]}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Будь ласка, підтвердіть свій пароль!",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve()
                      }

                      return Promise.reject("Введені вами паролі не збігаються!")
                    },
                  }),
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                name='agreement'
                valuePropName='checked'
                rules={[
                  {
                    validator: (_, value) =>
                      value
                        ? Promise.resolve()
                        : Promise.reject("Следует принять соглашение"),
                  },
                ]}
                {...tailFormItemLayout}
              >
                <Checkbox>
                  Я прочитал <a href=''>соглашение</a>
                </Checkbox>
              </Form.Item>
              <Form.Item {...tailFormItemLayout}>
                <Button type='primary' htmlType='submit'>
                  Зареєструватися
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </div>
      </Layout>
    </>
  )
}

const mapState = (store: IStore) => ({
  auth: store.auth,
})

const mapDispatch = (d) => {
  const { login, changeDataStatus } = authActions
  const actions = { login, changeDataStatus }
  return bindActionCreators(actions, d)
}

export default connect(mapState, mapDispatch)(RegistrationForm)

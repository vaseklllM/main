import React from "react"
import { Col, Form, Input, Button, Checkbox, message } from "antd"
import classes from "./style.module.scss"
import Body from "../../components/Body"
import { LoginPageHeader } from "../../components/Headers"
import api from "../../api"
import { IServLogin } from "../../api/user/login"

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
}
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
}

interface loginValues {
  email: string
  password: string
  remember: boolean
}

export default function Login() {
  // console.log(localStorage.token)

  async function onFinish(values: loginValues) {
    const { email, password, remember } = values

    const key = `login${email}`
    message.loading({ content: "Вхід...", key })

    const res: IServLogin = await api.user.login(email, password)

    if (res.ok) {
      message.success({ content: res.data.message, key, duration: 2 })

      // if ()

      // console.log(res.data.token)
    } else {
      message.error({ content: res.data.message, key, duration: 2 })
    }
  }

  return (
    <>
      <LoginPageHeader />
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

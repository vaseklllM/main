import React from "react"
import { Col, Form, Input, Button, Checkbox } from "antd"
import classes from "./style.module.scss"
import Body from "../../components/Body"
import { LoginPageHeader } from "../../components/Headers"

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
}
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
}

export default function Login() {
  const onFinish = (values: any) => {
    console.log("Success:", values)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo)
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
              onFinishFailed={onFinishFailed}
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
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item {...tailLayout}>
                <Button type='primary' htmlType='submit'>
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </div>
      </Body>
    </>
  )
}

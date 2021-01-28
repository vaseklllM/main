import React from "react"
import { Form, Input, Tooltip, Checkbox, Button, Row, Layout, Col } from "antd"
import { QuestionCircleOutlined } from "@ant-design/icons"
import classes from "./style.module.scss"
import { EmptyHeader } from "../../components/Headers"

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

export default function RegistrationForm() {
  const [form] = Form.useForm()

  const onFinish = (values) => {
    console.log("Received values of form: ", values)
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

import React, { ReactElement } from "react"
import FinanceContentBlock from "../FinanceContentBlock"
import classes from "./style.module.scss"
import BancCard from "../BancCard"
import { Row, Typography, Space, Button } from "antd"
import AddMonoBank from "./AddMonoBank"

interface Props {}

export default function ConnectedBankCardBlock({}: Props): ReactElement {
  const { Title, Text } = Typography

  return (
    <FinanceContentBlock>
      <Title level={5}>Банківські карти</Title>
      <Text type='secondary'>
        Підключіть банківські карти для регулярного автоматичного перегляду змін на
        рахунках.
      </Text>
      <Row className={classes.bank_cards}>
        <AddMonoBank className={classes.bank_card} />
        {/* <Button type="primary" >Добавити карту</Button> */}
        {/* <Space size={15} wrap>
          <AddMonoBank className={classes.bank_card} />
          <BancCard className={classes.bank_card} title='Приватбанк'></BancCard>
        </Space> */}
      </Row>
    </FinanceContentBlock>
  )
}

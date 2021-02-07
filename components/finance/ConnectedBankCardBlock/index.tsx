import React, { ReactElement } from "react"
import FinanceContentBlock from "../FinanceContentBlock"
import classes from "./style.module.scss"
import { Row, Typography } from "antd"
import AddMonoBank from "./AddMonoBank"

interface Props {}

export default function ConnectedBankCardBlock({}: Props): ReactElement {
  const { Title, Text } = Typography

  return (
    <FinanceContentBlock>
      <Title level={5}>Підключення банківських карт</Title>
      <Text type='secondary'>
        Підключіть банківські карти для регулярного автоматичного перегляду змін на
        рахунках.
      </Text>
      <Row className={classes.bank_cards}>
        <AddMonoBank className={classes.bank_card} />
      </Row>
    </FinanceContentBlock>
  )
}

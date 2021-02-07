import { Typography } from "antd"
import React, { ReactElement } from "react"
import FinanceContentBlock from "../FinanceContentBlock"

interface Props {}

export default function BankCardsListBlock({}: Props): ReactElement {
  const { Title, Text } = Typography

  return (
    <FinanceContentBlock>
      <Title level={5}>Список банківських карт</Title>
    </FinanceContentBlock>
  )
}

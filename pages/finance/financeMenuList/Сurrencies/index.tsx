import React, { ReactElement } from "react"
import { Layout } from "antd"
import ConnectedBankCardBlock from "../../../../components/finance/ConnectedBankCardBlock"
import BankCardsListBlock from "../../../../components/finance/BankCardsListBlock"

interface Props {}

export default function Сurrencies({}: Props): ReactElement {
  const { Content } = Layout

  return (
    <Content style={{ margin: "0 16px" }}>
      <ConnectedBankCardBlock />
      <BankCardsListBlock />
    </Content>
  )
}

import React, { ReactElement } from "react"
import { Layout } from "antd"
import ConnectedBankCardBlock from "../../../../components/finance/ConnectedBankCardBlock"
import ListOfBankCardsBlock from "../../../../components/finance/ListOfBankCardsBlock"

interface Props {}

export default function Сurrencies({}: Props): ReactElement {
  const { Content } = Layout

  return (
    <Content style={{ margin: "0 16px" }}>
      <ConnectedBankCardBlock />
      <ListOfBankCardsBlock />
    </Content>
  )
}

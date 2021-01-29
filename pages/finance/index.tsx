import React, { ReactElement } from "react"
import FinanceWrapper from "./FinanceWrapper"
import financeMenuList from "./financeMenuList"

interface Props {}

export default function Finance({}: Props): ReactElement {
  return <FinanceWrapper>{financeMenuList[0].page}</FinanceWrapper>
}

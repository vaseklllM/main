import React, { ReactElement } from "react"
import { useSelector } from "react-redux"
import IStore from "../../../../store/interface"
import { status } from "../../../../utils/status"

interface Props {
  balance?: number
  currency?: string
  className?: string
}

export default function CardCurrency(props: Props): ReactElement {
  const { balance, className, currency } = props

  const currencies = useSelector((store: IStore) => store.financeCurrencies)

  if (currencies.dataStatus !== status.successful || typeof balance !== "number") {
    return null
  }

  const activeCurrency = currencies.data.find((i) => i.key === currency)

  return (
    <div className={className}>
      {parseFloat((balance / 100).toFixed(2))}
      &nbsp;{activeCurrency.symbol}
    </div>
  )
}

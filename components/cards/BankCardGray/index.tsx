import React, { ReactElement } from "react"
import { IBankCard } from "../../../api/banks/monobank/getUserInfo"
import { txt } from "../../../utils"
import CardCurrency from "./CardCurrencies"
import CardNumber from "./CardNumber"
import classes from "./style.module.scss"

interface Props {
  className?: string
  data: IBankCard
}

export default function BankCardGray(props: Props): ReactElement {
  const { className, data } = props

  return (
    <div className={txt.join([classes.cc, classes.mastercard, className])}>
      <svg className={classes.line}>
        <path d='M 0 0 C 50 50 250 0 300 87'></path>
      </svg>
      <div className={classes.container}>
        <CardCurrency balance={data.balance} currency={data.currency} />
      </div>
      <div className={classes.holder}>
        <CardNumber number={data.cardNumber} iban={data.iban} isFop={data.isFop} />
      </div>
    </div>
  )
}

import React, { ReactElement } from "react"
import { useSelector } from "react-redux"
import IStore from "../../../../store/interface"
import { ISFinanceCurrencies } from "../../../../store/interface/сurrencies"
import { LoadingOutlined } from "@ant-design/icons"
import { status } from "../../../../utils/status"
import { Spin } from "antd"
import { Typography } from "antd"
import classes from "./style.module.scss"

interface Props {}

export default function FinanceHeaderTitle({}: Props): ReactElement {
  const { Title } = Typography

  const currencies: ISFinanceCurrencies = useSelector(
    (store: IStore) => store.financeCurrencies
  )

  if (currencies.dataStatus === status.loading) {
    return <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
  } else if (currencies.dataStatus === status.successful) {
    return (
      <div className={classes.currencies}>
        {currencies.data.map((el) => (
          <Title key={el.id} level={4} className={classes.currency_item}>{`${
            el.symbol
          }${parseFloat(el.value.toFixed(2))}`}</Title>
        ))}
      </div>
    )
  } else return <div>error</div>
}

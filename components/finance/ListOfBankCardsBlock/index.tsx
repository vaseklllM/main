import { Typography } from "antd"
import React, { ReactElement } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import financeListOfBankCardsActions from "../../../store/finance/listOfBankCards/actions"
import IStore from "../../../store/interface"
import { status } from "../../../utils/status"
import useGetData from "../../hooks/useGetData"
import FinanceContentBlock from "../FinanceContentBlock"
import { LoadingOutlined } from "@ant-design/icons"
import classes from "./style.module.scss"
import ISDataStatus from "../../../store/interface/dataStatus"
import ListOfBankCardsBlockContent from "./ListOfBankCardsBlockContent"

interface Props {
  dataStatus: ISDataStatus
  getData: () => any
  changeDataStatus: (value: ISDataStatus) => any
}

function ListOfBankCardsBlock(props: Props): ReactElement {
  const { dataStatus, changeDataStatus, getData } = props
  const { Title } = Typography

  useGetData({ changeDataStatus, dataStatus, getData })

  const isShowLoader =
    dataStatus.firstLoad === status.loading || dataStatus.renewal === status.loading

  return (
    <FinanceContentBlock>
      <Title level={5}>
        Список банківських карт
        {isShowLoader && <LoadingOutlined className={classes.loader} />}
      </Title>
      {dataStatus.firstLoad === status.successful && <ListOfBankCardsBlockContent />}
    </FinanceContentBlock>
  )
}

const mapState = ({ financeListOfBankCards }: IStore) => ({
  dataStatus: financeListOfBankCards.dataStatus,
})

const mapDispatch = (d) => {
  const { getData, changeDataStatus } = financeListOfBankCardsActions
  const actions = {
    getData,
    changeDataStatus,
  }

  return bindActionCreators(actions, d)
}

export default connect(mapState, mapDispatch)(ListOfBankCardsBlock)

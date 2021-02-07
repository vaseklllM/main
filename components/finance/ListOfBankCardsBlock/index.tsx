import { Typography } from "antd"
import React, { ReactElement } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import financeListOfBankCardsActions from "../../../store/finance/listOfBankCards/actions"
import IStore from "../../../store/interface"
import { status } from "../../../utils/status"
import FinanceContentBlock from "../FinanceContentBlock"

interface Props {
  dataStatus: status
  getData: () => any
  changeDataStatus: (value: status) => any
}

function ListOfBankCardsBlock(props: Props): ReactElement {
  const { dataStatus, changeDataStatus, getData } = props
  const { Title, Text } = Typography

  // console.log(dataStatus)

  return (
    <FinanceContentBlock>
      <Title level={5}>Список банківських карт</Title>
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

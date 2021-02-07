import React, { ReactElement } from "react"
import { connect } from "react-redux"
import { IServAllBankCardsData } from "../../../../api/banks/getAllCards"
import IStore from "../../../../store/interface"

interface Props {
  data: IServAllBankCardsData
}

function ListOfBankCardsBlockContent(props: Props): ReactElement {
  const { data } = props

  console.log(data)

  return <div>Content</div>
}

const mapState = ({ financeListOfBankCards }: IStore) => ({
  data: financeListOfBankCards.data,
})

export default connect(mapState)(ListOfBankCardsBlockContent)

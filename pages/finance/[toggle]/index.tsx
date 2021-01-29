import { useRouter } from "next/router"
import React, { ReactElement } from "react"
import FinanceWrapper from "../FinanceWrapper"
import financeMenuList from "../financeMenuList"

interface Props {}

export default function toggle({}: Props): ReactElement {
  const router = useRouter()

  const { toggle } = router.query

  if (financeMenuList.findIndex((i) => i.id === toggle) === -1) {
    router.push(`/finance/${financeMenuList[0].id}`)
    return null
  }

  return (
    <FinanceWrapper>{financeMenuList.find((i) => i.id === toggle).page}</FinanceWrapper>
  )
}

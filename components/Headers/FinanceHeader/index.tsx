import { ReactElement, useEffect } from "react"
import { PageHeader } from "antd"
import classes from "./style.module.scss"
import { LoginButton } from "../../Buttons"
import { HomeOutlined } from "@ant-design/icons"
import { useRouter } from "next/router"
import { useDispatch, useSelector } from "react-redux"
import financeCoursesActions from "../../../store/finance/сurrencies/actions"
import { status } from "../../../utils/status"
import FinanceHeaderTitle from "./FinanceHeaderTitle"
import IStore from "../../../store/interface"

function FinanceHeader(): ReactElement {
  const router = useRouter()
  const dispatch = useDispatch()
  const currencies: status = useSelector(
    (store: IStore) => store.financeCurrencies.dataStatus
  )

  useEffect(() => {
    /** загрузка валют */
    if (currencies !== status.successful) {
      dispatch(financeCoursesActions.changeGetCoursesStatus(status.loading))
      dispatch(financeCoursesActions.getCourses())
    }
  }, [])

  return (
    <PageHeader
      backIcon={<HomeOutlined />}
      onBack={() => router.push("/")}
      className={classes.header}
      title={<FinanceHeaderTitle />}
      extra={<LoginButton />}
    ></PageHeader>
  )
}

export default FinanceHeader

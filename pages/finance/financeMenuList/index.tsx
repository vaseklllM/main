import { BitcoinIcon, BriefcaseIcon } from "../../../components/Icons"
import { DollarCircleOutlined, BarChartOutlined } from "@ant-design/icons"
import classes from "./menuList.module.scss"
import Briefcase from "./Briefcase"

const financeMenuList = [
  {
    id: "briefcase",
    name: "Портфель",
    icon: <BriefcaseIcon className={classes.briefcase} />,
    page: <Briefcase />,
  },
  {
    id: "currencies",
    name: "Валюти",
    icon: <DollarCircleOutlined />,
    page: "Валюти",
  },
  {
    id: "share",
    name: "Акції",
    icon: <BarChartOutlined />,
    page: "Акції",
  },
  {
    id: "cryptocurrency",
    name: "Криптовалюта",
    icon: <BitcoinIcon className={classes.btc} />,
    page: "Криптовалюта",
  },
]

export default financeMenuList

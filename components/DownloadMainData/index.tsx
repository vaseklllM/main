import { ReactElement, useEffect, useState } from "react"
import { bindActionCreators } from "redux"
import authActions from "../../store/auth/actions"
import { IActionLogin } from "../../store/auth/actions/login"
import { status } from "../../utils/status"
import { connect } from "react-redux"
import api from "../../api"
import { IServActiveUserData } from "../../api/user/getActiveUserData"
import { Typography } from "antd"
import globalActions from "../../store/global/actions"

interface Props {
  children: ReactElement
  login: (payload: IActionLogin) => {}
  changeDataStatus: (v: status) => {}
  changeWidth: (payload: number) => any
  changeHeight: (payload: number) => any
}

const DownloadMainData = (props: Props): ReactElement => {
  const { children, changeDataStatus, login, changeHeight, changeWidth } = props
  const [isLoaded, setIsLoaded] = useState(false)

  const { Title } = Typography

  useEffect(() => {
    downloadMainData()
    windowResizeListener()
  }, [])

  async function downloadMainData() {
    await getUserInfo()
    setIsLoaded(true)
  }

  const getUserInfo = async () => {
    changeDataStatus(status.loading)

    const res: IServActiveUserData = await api.user.getUserDataByToken()

    if (res.ok) {
      login({ ...res.data.user, isAuth: true })
    } else {
      /** если пользователь не авторизован */
      localStorage.removeItem("token")
    }
    changeDataStatus(status.successful)
  }

  function windowResizeListener() {
    changeWidth(window.innerWidth)
    changeHeight(window.innerHeight)

    window.addEventListener(
      "resize",
      (event) => {
        changeWidth(event.target.innerWidth)
        changeHeight(event.target.innerHeight)
      },
      false
    )
  }

  if (isLoaded) {
    return children
  } else return <Title level={4}>loading</Title>
}

const mapDispatch = (d) => {
  const { login, changeDataStatus } = authActions
  const { changeHeight, changeWidth } = globalActions
  const actions = {
    login,
    changeDataStatus,
    changeHeight,
    changeWidth,
  }
  return bindActionCreators(actions, d)
}

export default connect(null, mapDispatch)(DownloadMainData)

import { ReactElement, useEffect, useState } from "react"
import { bindActionCreators } from "redux"
import authActions from "../../store/auth/actions"
import { IActionLogin } from "../../store/auth/actions/login"
import { status } from "../../utils/status"
import { connect } from "react-redux"
import api from "../../api"
import { IServActiveUserData } from "../../api/user/getActiveUserData"
import { Typography } from "antd"

interface Props {
  children: ReactElement
  login: (payload: IActionLogin) => {}
  changeDataStatus: (v: status) => {}
}

function DownloadMainData(props: Props): ReactElement {
  const { children, changeDataStatus, login } = props
  const [isLoaded, setIsLoaded] = useState(false)

  const { Title } = Typography

  useEffect(() => {
    downloadMainData()
  }, [])

  async function downloadMainData() {
    await getUserInfo()
    setIsLoaded(true)
  }

  async function getUserInfo() {
    changeDataStatus(status.loading)

    const res: IServActiveUserData = await api.user.getUserDataByToken()

    if (res.ok) {
      login({ ...res.data.user, isAuth: true })
    } else {
      /** если пользователь не авторизован */
      localStorage.token = undefined
    }
    changeDataStatus(status.successful)
  }

  if (isLoaded) {
    return children
  } else return <Title level={4}>loading</Title>
}

const mapDispatch = (d) => {
  const { login, changeDataStatus } = authActions
  const actions = {
    login,
    changeDataStatus,
  }
  return bindActionCreators(actions, d)
}

export default connect(null, mapDispatch)(DownloadMainData)

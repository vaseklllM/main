import { ReactElement, useEffect } from "react"
import { bindActionCreators } from "redux"
import authActions from "../../store/auth/actions"
import { IActionLogin } from "../../store/auth/actions/login"
import { IStoreAuthData } from "../../store/auth/reducer"
import { status } from "../../utils/status"
import { connect } from "react-redux"
import api from "../../api"
import { IServActiveUserData } from "../../api/user/getActiveUserData"

interface Props {
  children: ReactElement
  userData: IStoreAuthData
  userDataStatus: status
  login: (payload: IActionLogin) => {}
  changeDataStatus: (v: status) => {}
}

function DownloadMainData(props: Props): ReactElement {
  const { children, userData, userDataStatus, changeDataStatus, login } = props

  useEffect(() => {
    downloadMainData()
  }, [])

  async function downloadMainData() {
    await getUserInfo()
  }

  async function getUserInfo() {
    changeDataStatus(status.loading)

    const res: IServActiveUserData = await api.user.getUserDataByToken()

    // localStorage.token = undefined

    if (res.ok) {
      console.log(res.data.user)
    } else {
      console.log(res.data.message)
    }
  }

  return children
}

const mapState = (state) => ({
  userData: state.auth.data,
  userDataStatus: state.auth.isAuthStatus,
})

const mapDispatch = (d) => {
  const { login, changeDataStatus } = authActions
  const actions = {
    login,
    changeDataStatus,
  }
  return bindActionCreators(actions, d)
}

export default connect(mapState, mapDispatch)(DownloadMainData)

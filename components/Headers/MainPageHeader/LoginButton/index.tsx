import Link from "next/link"
import { ReactElement } from "react"
import { Button } from "antd"
import { connect } from "react-redux"
import authActions from "../../../../store/auth/actions"
import { bindActionCreators } from "redux"
import { status } from "../../../../utils/status"

interface Props {
  isAuth: boolean
  logout: () => void
  isAuthStatus: status
}

function LoginButton(props: Props): ReactElement {
  const { isAuth, logout, isAuthStatus } = props

  /** выход из акаунта */
  function clickLogout() {
    if (isAuth) {
      logout()
      localStorage.token = undefined
    }
  }

  function getBtnText() {
    if (isAuthStatus === status.loading) return "Загрузка"
    else return isAuth ? "Вихід" : "Вхід"
  }

  const btn = (
    <Button
      type='primary'
      onClick={clickLogout}
      loading={isAuthStatus === status.loading}
    >
      {getBtnText()}
    </Button>
  )

  return <Link href={`${isAuth ? "/" : "/login"}`}>{btn}</Link>
}

const mapState = (state) => ({
  isAuth: state.auth.data.isAuth,
  isAuthStatus: state.auth.isAuthStatus,
})

const mapDispatch = (d) => {
  const { logout } = authActions
  const actions = {
    logout,
  }
  return bindActionCreators(actions, d)
}

export default connect(mapState, mapDispatch)(LoginButton)

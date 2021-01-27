import { connect } from "react-redux"
import { status } from "../../utils/status"
import NoUserApp from "./NoUserApp"
import SectionsApp from "./SectionsApp"

interface Props {
  isAuthStatus: status
  isAuth: boolean
}

function App(props: Props) {
  const { isAuthStatus, isAuth } = props

  if (isAuthStatus === status.loading) return null

  if (isAuth) {
    return <SectionsApp />
  } else {
    return <NoUserApp />
  }
}

const mapState = (state) => ({
  isAuth: state.auth.data.isAuth,
  isAuthStatus: state.auth.isAuthStatus,
})

export default connect(mapState)(App)

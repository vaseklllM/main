import { connect } from "react-redux"
import { status } from "../../utils/status"
import Categories from "../Categories"
import NoUserApp from "./NoUserApp"

interface Props {
  isAuthStatus: status
  isAuth: boolean
}

function App(props: Props) {
  const { isAuthStatus, isAuth } = props

  if (isAuthStatus === status.loading) return null

  if (isAuth) {
    return <Categories />
  } else {
    return <NoUserApp />
  }
}

const mapState = (state) => ({
  isAuth: state.auth.data.isAuth,
  isAuthStatus: state.auth.isAuthStatus,
})

export default connect(mapState)(App)

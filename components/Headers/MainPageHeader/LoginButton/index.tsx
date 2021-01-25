import Link from "next/link"
import { ReactElement } from "react"
import { Button } from "antd"
import { connect } from "react-redux"

interface Props {
  isAuth: boolean
}

function LoginButton({ isAuth }: Props): ReactElement {
  if (isAuth) {
    return <Button type='primary'>Вихід</Button>
  } else {
    return (
      <Link href='/login'>
        <Button type='primary'>Вхід</Button>
      </Link>
    )
  }
}

const mapState = (state) => ({
  isAuth: state.auth.data.isAuth,
})

export default connect(mapState)(LoginButton)

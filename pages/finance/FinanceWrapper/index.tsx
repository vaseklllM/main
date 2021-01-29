import { Layout } from "antd"
import { ReactElement } from "react"
import FinanceHeader from "../../../components/Headers/FinanceHeader"
import SideMenu from "../SideMenu"
import { useCheckAuth } from "../../../hooks"

interface Props {
  children?: ReactElement | string
}

export default function FinanceWrapper(props: Props): ReactElement {
  const { children } = props
  const { Footer } = Layout

  useCheckAuth()

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <SideMenu />
      <Layout className='site-layout'>
        <FinanceHeader />
        {children}
        <Footer style={{ textAlign: "center" }}>Ant Design ©2021 Created by Vasek</Footer>
      </Layout>
    </Layout>
  )
}

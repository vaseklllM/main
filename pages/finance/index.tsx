import { Layout } from "antd"
import React, { ReactElement } from "react"
import Breadcrumbs from "../../components/Breadcrumbs"
import FinanceHeader from "../../components/Headers/FinanceHeader"
import SideMenu from "../../components/SideMenu"
import { useCheckAuth } from "../../hooks"

interface Props {}

export default function Finance({}: Props): ReactElement {
  const { Footer, Content } = Layout

  useCheckAuth()

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <SideMenu />
      <Layout className='site-layout'>
        <FinanceHeader />
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumbs />
          <div style={{ padding: 24, minHeight: 360, backgroundColor: "white" }}>
            Bill is a cat.
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>Ant Design ©2021 Created by Vasek</Footer>
      </Layout>
    </Layout>
  )
}

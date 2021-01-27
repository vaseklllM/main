import React, { ReactElement } from "react"
import { Layout } from "antd"
import SectionsHeader from "../../Headers/SectionsHeader"
import SideMenu from "../../SideMenu"
import Breadcrumbs from "../../Breadcrumbs"

interface Props {}

export default function SectionsApp({}: Props): ReactElement {
  const { Footer, Content } = Layout

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <SideMenu />
      <Layout className='site-layout'>
        <SectionsHeader />
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

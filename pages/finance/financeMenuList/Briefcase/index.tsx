import React, { ReactElement } from "react"
import { Layout } from "antd"
import Breadcrumbs from "../../../../components/Breadcrumbs"

interface Props {}

export default function Briefcase({}: Props): ReactElement {
  const { Footer, Content } = Layout
  return (
    <Content style={{ margin: "0 16px" }}>
      <Breadcrumbs />
      <div style={{ padding: 24, minHeight: 360, backgroundColor: "white" }}>
        Портфель
      </div>
    </Content>
  )
}

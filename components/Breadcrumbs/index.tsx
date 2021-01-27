import React, { ReactElement } from "react"
import { Breadcrumb } from "antd"

interface Props {}

export default function Breadcrumbs({}: Props): ReactElement {
  return (
    <Breadcrumb style={{ margin: "16px 0" }}>
      <Breadcrumb.Item>Категорії</Breadcrumb.Item>
    </Breadcrumb>
  )
}

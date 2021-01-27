import React, { useState } from "react"
import { AppstoreOutlined } from "@ant-design/icons"
import { Layout, Menu } from "antd"

function SideMenu(props) {
  const [collapsed, setCollapsed] = useState(false)

  const { Sider } = Layout

  return (
    <Sider theme='light' collapsible collapsed={collapsed} onCollapse={setCollapsed}>
      <div className='logo' />
      <Menu theme='light' defaultSelectedKeys={["1"]} mode='inline'>
        <Menu.Item key='1' icon={<AppstoreOutlined />}>
          Категорії
        </Menu.Item>
      </Menu>
    </Sider>
  )
}

export default SideMenu

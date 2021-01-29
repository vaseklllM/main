import React, { useState } from "react"
import { Layout, Menu } from "antd"
import financeMenuList from "../financeMenuList"
import { useRouter } from "next/router"

function SideMenu() {
  const [collapsed, setCollapsed] = useState(false)
  const router = useRouter()
  const { Sider } = Layout
  const { toggle } = router.query

  const activeTogle = typeof toggle === "string" ? toggle : financeMenuList[0].id

  return (
    <Sider theme='light' collapsible collapsed={collapsed} onCollapse={setCollapsed}>
      <div className='logo' />
      <Menu
        theme='light'
        defaultSelectedKeys={[activeTogle]}
        mode='inline'
        onClick={(e) => router.push(`/finance/${e.key}`)}
      >
        {financeMenuList.map((el) => (
          <Menu.Item key={el.id} icon={el.icon}>
            {el.name}
          </Menu.Item>
        ))}
      </Menu>
    </Sider>
  )
}

export default SideMenu

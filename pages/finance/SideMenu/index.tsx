import React, { useState } from "react"
import { DollarCircleOutlined, BarChartOutlined } from "@ant-design/icons"
import { Layout, Menu } from "antd"
import { BitcoinIcon, BriefcaseIcon } from "../../../components/Icons"
import classes from "./style.module.scss"

function SideMenu(props) {
  const [collapsed, setCollapsed] = useState(true)

  const { Sider } = Layout

  const menuList = [
    {
      id: "briefcase",
      name: "Портфель",
      icon: <BriefcaseIcon className={classes.briefcase} />,
    },
    {
      id: "currencies",
      name: "Валюти",
      icon: <DollarCircleOutlined />,
    },
    {
      id: "share",
      name: "Акції",
      icon: <BarChartOutlined />,
    },
    {
      id: "cryptocurrency",
      name: "Криптовалюта",
      icon: <BitcoinIcon className={classes.btc} />,
    },
  ]

  return (
    <Sider theme='light' collapsible collapsed={collapsed} onCollapse={setCollapsed}>
      <div className='logo' />
      <Menu
        theme='light'
        defaultSelectedKeys={[menuList[0].id]}
        mode='inline'
        onClick={(e) => console.log(e)}
      >
        {menuList.map((el) => (
          <Menu.Item key={el.id} icon={el.icon}>
            {el.name}
          </Menu.Item>
        ))}
      </Menu>
    </Sider>
  )
}

export default SideMenu

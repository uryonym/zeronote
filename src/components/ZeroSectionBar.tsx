import React from 'react'
import { Layout, Menu } from 'antd'

const ZeroSectionBar: React.FC = () => {
  const { Sider } = Layout
  return (
    <Sider className="sidebar-layout">
      <Menu mode="inline">
        <Menu.Item>セクション１</Menu.Item>
        <Menu.Item>セクション２</Menu.Item>
        <Menu.Item>セクション３</Menu.Item>
      </Menu>
    </Sider>
  )
}

export default ZeroSectionBar

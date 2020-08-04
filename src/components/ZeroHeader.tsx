import React from 'react'
import { Layout, Select, Avatar, Dropdown, Menu } from 'antd'
import { UserOutlined } from '@ant-design/icons/lib'

const ZeroHeader: React.FC = () => {
  const { Header } = Layout
  const { Option } = Select
  const userMenu = (
    <Menu>
      <Menu.Item>ryo yoneyama</Menu.Item>
      <Menu.Divider />
      <Menu.Item>サインアウト</Menu.Item>
    </Menu>
  )

  return (
    <Header>
      <h1>ZeroNote</h1>
      <Select className="select-note" placeholder="ノートを選択" size="large">
        <Option value="note1">ノート１</Option>
        <Option value="note2">ノート２</Option>
        <Option value="note3">ノート３</Option>
      </Select>
      <Dropdown className="right-menu" overlay={userMenu}>
        <Avatar size="large" icon={<UserOutlined />} />
      </Dropdown>
    </Header>
  )
}

export default ZeroHeader

import React from 'react'
import { Layout, Select, Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons/lib'

const ZeroHeader: React.FC = () => {
  const { Header } = Layout
  const { Option } = Select
  return (
    <Header>
      <div className="sidebar-user">
        <h1>ZeroNote</h1>
        <Select placeholder="ノートを選択">
          <Option value="note1">ノート１</Option>
          <Option value="note2">ノート２</Option>
          <Option value="note3">ノート３</Option>
        </Select>
        <Avatar size="large" icon={<UserOutlined />} />
        <span className="user-name">ryo yoneyama</span>
      </div>
    </Header>
  )
}

export default ZeroHeader

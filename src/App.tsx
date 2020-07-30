import React from 'react'
import { Layout, Select, Avatar, Tree } from 'antd'
import { UserOutlined, CarryOutOutlined, FormOutlined } from '@ant-design/icons'

const treeData = [
  {
    title: 'parent 1',
    key: '0-0',
    icon: <CarryOutOutlined />,
    children: [
      {
        title: 'parent 1-0',
        key: '0-0-0',
        icon: <CarryOutOutlined />,
        children: [
          { title: 'leaf', key: '0-0-0-0', icon: <CarryOutOutlined /> },
          { title: 'leaf', key: '0-0-0-1', icon: <CarryOutOutlined /> },
          { title: 'leaf', key: '0-0-0-2', icon: <CarryOutOutlined /> }
        ]
      },
      {
        title: 'parent 1-1',
        key: '0-0-1',
        icon: <CarryOutOutlined />,
        children: [
          { title: 'leaf', key: '0-0-1-0', icon: <CarryOutOutlined /> }
        ]
      },
      {
        title: 'parent 1-2',
        key: '0-0-2',
        icon: <CarryOutOutlined />,
        children: [
          { title: 'leaf', key: '0-0-2-0', icon: <CarryOutOutlined /> },
          {
            title: 'leaf',
            key: '0-0-2-1',
            icon: <CarryOutOutlined />,
            switcherIcon: <FormOutlined />
          }
        ]
      }
    ]
  }
]

const App: React.FC = () => {
  const { Header, Sider, Content } = Layout
  const { Option } = Select
  return (
    <Layout>
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
      <Layout>
        <Sider className="sidebar-layout">
          <Tree showLine={true} treeData={treeData} />
        </Sider>
        <Content>Content</Content>
      </Layout>
    </Layout>
  )
}

export default App

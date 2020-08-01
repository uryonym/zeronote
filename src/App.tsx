import React from 'react'
import { Layout, Tree } from 'antd'
import { CarryOutOutlined, FormOutlined } from '@ant-design/icons'
import ZeroHeader from './components/ZeroHeader'

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
  const { Sider, Content } = Layout
  return (
    <Layout>
      <ZeroHeader />
      <Layout>
        <Sider className="sidebar-layout">
          <Tree showLine={true} treeData={treeData} />
        </Sider>
        <Sider className="sidebar-layout">
          <Tree showLine={true} treeData={treeData} />
        </Sider>
        <Content>Content</Content>
      </Layout>
    </Layout>
  )
}

export default App

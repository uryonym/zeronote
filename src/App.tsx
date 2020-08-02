import React from 'react'
import { Layout } from 'antd'
import ZeroHeader from './components/ZeroHeader'
import ZeroSectionBar from './components/ZeroSectionBar'

const App: React.FC = () => {
  const { Content } = Layout
  return (
    <Layout>
      <ZeroHeader />
      <Layout>
        <ZeroSectionBar />
        <ZeroSectionBar />
        <Content>Content</Content>
      </Layout>
    </Layout>
  )
}

export default App

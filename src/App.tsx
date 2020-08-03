import React from 'react'
import { Layout } from 'antd'
import ZeroHeader from './components/ZeroHeader'
import ZeroSectionBar from './components/ZeroSectionBar'
import LoginForm from './components/LoginForm'

import * as authService from './lib/AuthService'

const App: React.FC = () => {
  const { Content } = Layout

  if (authService.isAuth()) {
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
  } else {
    return <LoginForm />
  }
}

export default App

import React from 'react'
import ZeroHeader from './components/ZeroHeader'
import ZeroSectionBar from './components/ZeroSectionBar'
import LoginForm from './components/LoginForm'

import * as authService from './lib/AuthService'

const App: React.FC = () => {
  if (authService.isAuth()) {
    return (
      <div className="container">
        <ZeroHeader />
        <ZeroSectionBar />
      </div>
    )
  } else {
    return <LoginForm />
  }
}

export default App

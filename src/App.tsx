import React from 'react'
import { ZeroHeader } from './components/ZeroHeader'
import { ZeroSectionBar } from './components/sidebar/ZeroSectionBar'
import { ZeroPageBar } from './components/sidebar/ZeroPageBar'
import { ZeroEditor } from './components/editor/ZeroEditor'
import { LoginForm } from './components/LoginForm'

import * as authService from './lib/AuthService'

const App: React.FC = () => {
  if (authService.isAuth()) {
    return (
      <div className="container">
        <ZeroHeader />
        <div className="content">
          <ZeroSectionBar />
          <ZeroPageBar />
          <ZeroEditor />
        </div>
      </div>
    )
  } else {
    return <LoginForm />
  }
}

export default App

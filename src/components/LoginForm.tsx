import React from 'react'
import { Button } from 'antd'
import * as authService from '../lib/AuthService'

const LoginForm: React.FC = () => {
  return (
    <div className="login-container">
      <div className="login-form">
        <h1>
          ZeroNoteのご利用にはMicrosoftアカウントでのサインインが必要です。
        </h1>
        <Button size="large" type="primary" onClick={authService.signIn}>
          サインイン
        </Button>
      </div>
    </div>
  )
}

export default LoginForm

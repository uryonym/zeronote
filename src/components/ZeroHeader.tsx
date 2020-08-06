import React from 'react'
import { IconButton } from '@fluentui/react'
import * as authService from '../lib/AuthService'

const ZeroHeader: React.FC = () => {
  return (
    <header className="zero-header">
      <h3>ZeroNote</h3>
      <IconButton className="user-icon" allowDisabledFocus={true} iconProps={{ iconName: 'Contact' }} />
    </header>
  )
}

export default ZeroHeader

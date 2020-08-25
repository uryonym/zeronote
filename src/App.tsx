import React, { useEffect } from 'react'
import { ZeroHeader } from './components/ZeroHeader'
import { ZeroSectionBar } from './components/sidebar/ZeroSectionBar'
import { ZeroPageBar } from './components/sidebar/ZeroPageBar'
import { ZeroEditor } from './components/editor/ZeroEditor'
import { LoginForm } from './components/LoginForm'

import * as authService from './lib/AuthService'
import { useDispatch } from 'react-redux'
import { fetchUserData } from './store/UserSlice'
import { fetchNoteData } from './store/NoteSlice'

const App: React.FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    if (authService.isAuth()) {
      dispatch(fetchUserData())
      dispatch(fetchNoteData())
    }
  }, [dispatch])

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

import React from 'react'
import {
  IconButton,
  IContextualMenuProps,
  IButtonStyles,
  Dropdown,
  IDropdownOption
} from '@fluentui/react'
import * as authService from '../lib/AuthService'
import { useSelector } from 'react-redux'
import { selectUser } from '../store/UserSlice'
import { selectNoteList } from '../store/NoteSlice'

export const ZeroHeader: React.FC = () => {
  const user = useSelector(selectUser)
  const noteList = useSelector(selectNoteList)

  const menuProps: IContextualMenuProps = {
    items: [
      {
        key: 'userName',
        text: user.isLoad ? user.displayName : ''
      },
      {
        key: 'email',
        text: user.isLoad ? user.email : ''
      },
      {
        key: 'signOut',
        text: 'サインアウト',
        onClick: () => authService.signOut()
      }
    ],
    alignTargetEdge: true,
    directionalHintFixed: true
  }

  const iconBtnStyle: IButtonStyles = {
    rootHovered: {
      background: '#9953c0'
    },
    rootPressed: {
      background: '#9953c0'
    },
    rootExpanded: {
      background: '#9953c0'
    }
  }

  return (
    <header className="zero-header">
      <h1>ZeroNote</h1>
      <Dropdown
        className="note-select"
        placeholder="ノートを選択"
        options={noteList}
      />
      <IconButton
        className="user-icon"
        allowDisabledFocus={true}
        iconProps={{ iconName: 'Contact' }}
        menuProps={menuProps}
        styles={iconBtnStyle}
      />
    </header>
  )
}

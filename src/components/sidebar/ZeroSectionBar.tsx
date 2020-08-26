import React from 'react'
import { Nav, INavLinkGroup } from '@fluentui/react'
import { sidebarStyles } from './SidebarStyle'
import { useSelector } from 'react-redux'
import { selectSectionList } from '../../store/NoteSlice'

export const ZeroSectionBar: React.FC = () => {
  const sectionList = useSelector(selectSectionList)
  const navLinkGroups: INavLinkGroup[] = [{ links: sectionList }]

  return (
    <div className="zero-sectionbar">
      <Nav groups={navLinkGroups} styles={sidebarStyles} />
    </div>
  )
}

import React from 'react'
import { Nav, INavLinkGroup } from '@fluentui/react'
import { sidebarStyles } from './SidebarStyle'

export const ZeroSectionBar: React.FC = () => {
  const navLinkGroups: INavLinkGroup[] = [
    {
      links: [
        {
          name: 'セクション１',
          url: '',
          onClick: () => console.log('click a section1')
        },
        {
          name: 'セクション２',
          url: '',
          onClick: () => console.log('click a section2')
        },
        {
          name: 'セクション３',
          url: '',
          onClick: () => console.log('click a section3')
        }
      ]
    }
  ]

  return (
    <div className="zero-sectionbar">
      <Nav groups={navLinkGroups} styles={sidebarStyles} />
    </div>
  )
}

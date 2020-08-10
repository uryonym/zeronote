import React from 'react'
import { Nav, INavLinkGroup } from '@fluentui/react'
import { sidebarStyles } from './SidebarStyle'

export const ZeroPageBar: React.FC = () => {
  const navLinkGroups: INavLinkGroup[] = [
    {
      links: [
        {
          name: 'ページ１',
          url: '',
          onClick: () => console.log('click a page1')
        },
        {
          name: 'ページ２',
          url: '',
          onClick: () => console.log('click a page2')
        },
        {
          name: 'ページ３',
          url: '',
          onClick: () => console.log('click a page3')
        }
      ]
    }
  ]

  return (
    <div className="zero-pagebar">
      <Nav groups={navLinkGroups} styles={sidebarStyles} />
    </div>
  )
}

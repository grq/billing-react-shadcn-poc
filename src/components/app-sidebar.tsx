import * as React from 'react'
import {
  Settings2, BadgePercent,
  Eye
} from 'lucide-react'
import { useLocation } from 'react-router-dom'

import { AppSidebarNav, NavMainItem } from './app-sidebar-nav'
import { ThemeSwitcher } from './theme-switcher'

import {
  Sidebar,
  SidebarContent, SidebarFooter, SidebarHeader,
  SidebarRail
} from '@/components/ui/sidebar'

const data = {
  user: {},
  navMain: [
    {
      title: 'Visits',
      icon: Eye,
      items: [
        {
          title: 'Unbilled visits',
          url: '/visits',
        }
      ],
    },
    {
      title: 'Rate management',
      icon: BadgePercent,
      items: [
        {
          title: 'Service rates',
          url: '/servicerates'
        }
      ]
    },
    {
      title: 'Settings',
      icon: Settings2,
      items: [
        {
          title: 'General',
          url: '/generalsettings'
        }
      ]
    }
  ]
}

const setActive = (nav: NavMainItem[], pathname: string) => {
  return nav.map(item => {
    const isActive = item.items
      ? item.items.some(subitem => subitem.url && pathname.startsWith(subitem.url))
      : pathname.startsWith(item.url || '')

    if (item.items) {
      item.items = setActive(item.items, pathname)
    }

    return { ...item, isActive }
  })
}

export const AppSidebar = ({ ...props }: React.ComponentProps<typeof Sidebar>) => {
  const location = useLocation()

  const nav = setActive(data.navMain, location.pathname)

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
      </SidebarHeader>
      <SidebarContent>
        <AppSidebarNav items={nav} />
      </SidebarContent>
      <SidebarFooter>
        <ThemeSwitcher />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

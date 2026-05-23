import type { ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaBookSkull } from 'react-icons/fa6'
import { OssadaAvatar } from '../guia/OssadaAvatar'

type TabItem = {
  to: string
  label: string
  icon: ReactNode
}

const tabs: TabItem[] = [
  { to: '/guia', label: 'Prof. Ossada', icon: <OssadaAvatar className="go-ossada-avatar--tab" decorative /> },
  { to: '/dex', label: 'Anatodex', icon: <FaBookSkull aria-hidden /> },
]

export function GoTabBar() {
  const { pathname } = useLocation()

  return (
    <div className="go-tabbar-dock">
      <nav className="go-tabbar" aria-label="Navegação principal">
      {tabs.map((tab) => {
        const active =
          tab.to === '/guia'
            ? pathname === '/guia'
            : pathname === '/dex' || pathname.startsWith('/dex/')
        return (
          <Link
            key={tab.to}
            to={tab.to}
            className={`go-tab${active ? ' go-tab--active' : ''}${
              active && tab.to === '/dex' ? ' go-tab--active-anatodex' : ''
            }${active && tab.to === '/guia' ? ' go-tab--active-guia' : ''}`}
            aria-current={active ? 'page' : undefined}
          >
            <span className="go-tab-icon" aria-hidden>
              {tab.icon}
            </span>
            <span className="go-tab-label">{tab.label}</span>
          </Link>
        )
      })}
      </nav>
    </div>
  )
}

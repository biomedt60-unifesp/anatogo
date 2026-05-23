import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'
import { AnatoGoLogo, isBrandTitle } from '../brand'
import { GoTabBar } from './GoTabBar.tsx'

type Props = {
  children: ReactNode
  title?: string
  backTo?: string
  backLabel?: string
  hideTabBar?: boolean
  hideHeader?: boolean
  pageClass?: string
}

export function GoShell({
  children,
  title,
  backTo,
  backLabel = 'Voltar',
  hideTabBar,
  hideHeader,
  pageClass,
}: Props) {
  const floatingBack = Boolean(backTo)
  const showHeader = !hideHeader && !floatingBack

  const backChevron = (
    <svg width="12" height="20" viewBox="0 0 13 21" fill="none" aria-hidden>
      <path
        d="M11 2L2 10.5L11 19"
        stroke="currentColor"
        strokeWidth="2.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )

  return (
    <div
      className={`go-app${floatingBack ? ' go-app--floating-back' : ''}${
        pageClass ? ` go-app--${pageClass.replace(/^go-/, '')}` : ''
      }`}
    >
      {floatingBack && (
        <div className="go-back-floating-wrap">
          <Link to={backTo!} className="go-back-floating" aria-label={backLabel}>
            {backChevron}
          </Link>
        </div>
      )}

      {showHeader && (
        <header className="go-header">
          <div className="go-header-bar">
            <div className="go-header-leading">
              <span className="go-header-btn go-header-btn--spacer" aria-hidden />
            </div>
            <div className="go-header-center">
              {isBrandTitle(title) ? (
                <AnatoGoLogo size="sm" className="go-header-brand" />
              ) : (
                <h1 className="go-header-title">{title}</h1>
              )}
            </div>
            <div className="go-header-trailing">
              <span className="go-header-btn go-header-btn--spacer" aria-hidden />
            </div>
          </div>
        </header>
      )}

      <main className={`go-main${pageClass ? ` ${pageClass}` : ''}`}>{children}</main>

      {!hideTabBar && <GoTabBar />}
    </div>
  )
}

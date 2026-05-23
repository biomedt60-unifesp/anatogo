import { anatodexMeta } from '../../data/anatodex'

export const BRAND_NAME = anatodexMeta.titulo

/** Marca visual no header e telas de login */
export const BRAND_DISPLAY = 'Anato Go'

type Props = {
  className?: string
  /** md = login/registro; sm = barra superior; lg = destaque */
  size?: 'sm' | 'md' | 'lg'
}

export function isBrandTitle(title?: string): boolean {
  if (!title) return true
  return title === BRAND_NAME || title === BRAND_DISPLAY
}

export function AnatoGoLogo({ className = '', size = 'md' }: Props) {
  return (
    <h1
      className={`go-brand-anatogo go-brand-anatogo--${size} ${className}`.trim()}
      aria-label={BRAND_DISPLAY}
    >
      <span className="go-brand-anat">Anato</span>
      <span className="go-brand-go">Go</span>
    </h1>
  )
}

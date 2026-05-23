import type { KeyboardEvent, MouseEvent, ReactNode } from 'react'

type Props = {
  children: ReactNode
  onContinue: () => void
  /** Bloqueia avanço (ex.: animação de fala) */
  disabled?: boolean
  className?: string
}

export function GoTapContinue({
  children,
  onContinue,
  disabled = false,
  className = '',
}: Props) {
  const handleActivate = () => {
    if (disabled) return
    onContinue()
  }

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    handleActivate()
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleActivate()
    }
  }

  return (
    <div
      className={`go-tap-screen${disabled ? ' go-tap-screen--disabled' : ''} ${className}`.trim()}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={disabled ? 'Aguarde' : 'Toque na tela para continuar'}
      aria-disabled={disabled}
    >
      {children}
    </div>
  )
}

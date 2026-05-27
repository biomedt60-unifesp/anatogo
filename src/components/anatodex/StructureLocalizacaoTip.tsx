import { useEffect, useId, useRef, useState } from 'react'

type Props = {
  texto: string
  nomeEstrutura: string
}

export function StructureLocalizacaoTip({ texto, nomeEstrutura }: Props) {
  const [open, setOpen] = useState(false)
  const tipId = useId()
  const wrapRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!open) return
    const onPointerDown = (e: PointerEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false)
    }
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return (
    <span ref={wrapRef} className="go-structure-info-wrap">
      <button
        type="button"
        className="go-structure-info-btn"
        aria-expanded={open}
        aria-controls={tipId}
        aria-label={`Onde localizar: ${nomeEstrutura}`}
        onClick={(e) => {
          e.stopPropagation()
          setOpen((v) => !v)
        }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
          <path d="M12 11v5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <circle cx="12" cy="8" r="1" fill="currentColor" />
        </svg>
      </button>
      {open && (
        <span id={tipId} role="tooltip" className="go-structure-info-tip">
          {texto}
        </span>
      )}
    </span>
  )
}

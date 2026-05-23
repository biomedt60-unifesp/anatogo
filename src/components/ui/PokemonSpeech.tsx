import type { ReactNode } from 'react'

type Pointer = 'bottom' | 'bottom-left' | 'left'

type Props = {
  children: ReactNode
  speaker?: string
  pointer?: Pointer
  compact?: boolean
  showContinue?: boolean
  className?: string
}

export function PokemonSpeech({
  children,
  speaker,
  pointer = 'bottom',
  compact = false,
  showContinue = false,
  className = '',
}: Props) {
  return (
    <div
      className={`pk-speech-wrap pk-speech-wrap--${pointer}${compact ? ' pk-speech-wrap--compact' : ''} ${className}`.trim()}
    >
      {speaker && <p className="pk-speech-speaker">{speaker}</p>}
      <div className="pk-speech-box">
        <div className="pk-speech-inner">
          <div className="pk-speech-text">{children}</div>
          {showContinue && (
            <span className="pk-speech-arrow" aria-hidden>
              ▼
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

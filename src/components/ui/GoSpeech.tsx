import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  speaker?: string
  showContinue?: boolean
  compact?: boolean
  className?: string
}

export function GoSpeech({
  children,
  speaker,
  showContinue = false,
  compact = false,
  className = '',
}: Props) {
  return (
    <div className={`go-speech${compact ? ' go-speech--compact' : ''} ${className}`.trim()}>
      {speaker && <p className="go-speech-speaker">{speaker}</p>}
      <div className="go-speech-card">
        <p className="go-speech-text">{children}</p>
        {showContinue && (
          <span className="go-speech-continue" aria-hidden>
            ▼
          </span>
        )}
      </div>
    </div>
  )
}

type Props = {
  children: string
  /** Primeira fala estilo “Olá! Sou…” */
  greeting?: boolean
}

export function GoNpcSpeech({ children, greeting = false }: Props) {
  const lines = children.split('\n').filter(Boolean)

  return (
    <div className="go-npc-speech">
      <div className="go-npc-speech-box">
        {greeting && lines.length >= 2 ? (
          lines.map((line) => (
            <p key={line} className="go-npc-speech-line">
              {line}
            </p>
          ))
        ) : (
          <p className="go-npc-speech-line">{children}</p>
        )}
      </div>
    </div>
  )
}

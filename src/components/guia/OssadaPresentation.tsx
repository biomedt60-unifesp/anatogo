import { GoNpcSpeech } from '../ui/GoNpcSpeech'
import { GoTapContinue } from '../ui/GoTapContinue'
import { guiaInfo } from '../../data/guia'

export type OssadaProgressStep = {
  id: string
}

type Props = {
  imageSrc: string
  message: string
  imageAlt?: string
  /** Balão estilo “Olá! / Sou…” em duas linhas */
  greeting?: boolean
  ariaLabel?: string
  /** z-index abaixo da tab bar (aba Prof. Ossada) */
  underTabBar?: boolean
  /** Toque na tela para continuar (intro) */
  onContinue?: () => void
  /** Indicador de passos (intro) */
  progress?: {
    steps: readonly OssadaProgressStep[]
    currentIndex: number
  }
  speechLive?: boolean
  className?: string
}

export function OssadaPresentation({
  imageSrc,
  message,
  imageAlt = guiaInfo.nome,
  greeting = false,
  ariaLabel = `Apresentação do ${guiaInfo.nome}`,
  underTabBar = false,
  onContinue,
  progress,
  speechLive = false,
  className = '',
}: Props) {
  const scene = (
    <div
      className={`go-presentation-scene${className ? ` ${className}` : ''}`}
      aria-label={ariaLabel}
    >
      <div className="go-presentation-spotlight" aria-hidden />
      <img
        className="go-presentation-npc"
        src={imageSrc}
        alt={imageAlt}
        draggable={false}
      />
      <div
        className="go-presentation-speech"
        {...(speechLive ? { 'aria-live': 'polite' as const } : {})}
      >
        <GoNpcSpeech key={message} greeting={greeting}>
          {message}
        </GoNpcSpeech>
      </div>
      {progress && (
        <div
          className="go-progress go-progress--presentation go-presentation-progress"
          aria-hidden
        >
          {progress.steps.map((step, i) => (
            <span
              key={step.id}
              className={`go-progress-dot${
                i === progress.currentIndex
                  ? ' go-progress-dot--on'
                  : i < progress.currentIndex
                    ? ' go-progress-dot--done'
                    : ''
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )

  const content = onContinue ? (
    <GoTapContinue onContinue={onContinue} className="go-presentation-tap">
      {scene}
    </GoTapContinue>
  ) : (
    scene
  )

  return (
    <div
      className={`go-presentation${underTabBar ? ' go-presentation--under-tabbar' : ''}`}
      aria-label={ariaLabel}
    >
      {content}
    </div>
  )
}

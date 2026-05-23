import { LoadingParticles } from './LoadingParticles'

const brainSrc = `${import.meta.env.BASE_URL}images/brain-intro.png`

type Props = {
  exiting?: boolean
}

export function LoadingBrainStack({ exiting = false }: Props) {
  return (
    <div className={`go-loading-brain-stack${exiting ? ' go-loading-brain-stack--exiting' : ''}`}>
      <img
        className="go-loading-brain-img"
        src={brainSrc}
        alt=""
        decoding="async"
        draggable={false}
      />
      <div className="go-loading-particles-layer" aria-hidden>
        <LoadingParticles />
      </div>
    </div>
  )
}

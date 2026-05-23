import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LoadingBrainStack } from '../components/loading/LoadingBrainStack'
import { loadingTips } from '../data/loadingTips'

const LOAD_MS = 3400
const EXIT_MS = 720

export function LoadingPage() {
  const navigate = useNavigate()
  const [progress, setProgress] = useState(0)
  const [exiting, setExiting] = useState(false)
  const tip = useMemo(
    () => loadingTips[Math.floor(Math.random() * loadingTips.length)],
    [],
  )

  useEffect(() => {
    if (exiting) return
    const start = performance.now()
    let frame = 0

    const tick = (now: number) => {
      const elapsed = now - start
      const eased = 1 - (1 - Math.min(elapsed / LOAD_MS, 1)) ** 1.4
      setProgress(Math.round(eased * 100))

      if (elapsed < LOAD_MS) {
        frame = requestAnimationFrame(tick)
      } else {
        setExiting(true)
      }
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [exiting])

  useEffect(() => {
    if (!exiting) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const delay = reduced ? 120 : EXIT_MS

    const t = window.setTimeout(() => {
      navigate('/login', { replace: true, state: { fromLoading: true } })
    }, delay)

    return () => window.clearTimeout(t)
  }, [exiting, navigate])

  return (
    <div
      className={`go-loading${exiting ? ' go-loading--exiting' : ''}`}
      aria-busy={!exiting}
      aria-label="Carregando Anatodex"
    >
      <div className="go-loading-center">
        <LoadingBrainStack exiting={exiting} />
      </div>

      <div className={`go-loading-footer${exiting ? ' go-loading-footer--exiting' : ''}`}>
        <p className="go-loading-tip">{tip}</p>
        <div
          className="go-loading-bar"
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Progresso do carregamento"
        >
          <div className="go-loading-bar-fill" style={{ width: `${progress}%` }} />
        </div>
      </div>
    </div>
  )
}

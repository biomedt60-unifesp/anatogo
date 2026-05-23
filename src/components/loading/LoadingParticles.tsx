import Particles from '@tsparticles/react'
import { memo, useEffect, useMemo, useState } from 'react'
import { ensureTsparticlesEngine } from '../../particles/initEngine'
import { getLoadingParticleOptions } from '../../particles/loadingParticleOptions'

function LoadingParticlesInner() {
  const [ready, setReady] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const apply = () => setReducedMotion(mq.matches)
    apply()
    mq.addEventListener('change', apply)
    return () => mq.removeEventListener('change', apply)
  }, [])

  useEffect(() => {
    if (reducedMotion) return
    void ensureTsparticlesEngine().then(() => setReady(true))
  }, [reducedMotion])

  const options = useMemo(() => getLoadingParticleOptions(), [])

  if (reducedMotion || !ready) return null

  return (
    <Particles id="loading-tsparticles" className="go-loading-particles-canvas" options={options} />
  )
}

export const LoadingParticles = memo(LoadingParticlesInner)

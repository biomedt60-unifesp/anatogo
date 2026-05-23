import { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'

let engineReady: Promise<void> | null = null

export function ensureTsparticlesEngine(): Promise<void> {
  if (!engineReady) {
    engineReady = initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    })
  }
  return engineReady
}

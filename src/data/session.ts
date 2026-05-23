import { countEstruturasRegistradas } from './anatodex'

export type PlayerMode = 'returning' | 'new'

const MODE_KEY = 'anatodex-player-mode'

export function getPlayerMode(): PlayerMode | null {
  const v = localStorage.getItem(MODE_KEY)
  if (v === 'returning' || v === 'new') return v
  return null
}

export function setPlayerMode(mode: PlayerMode) {
  localStorage.setItem(MODE_KEY, mode)
}

export function hasSavedProgress(): boolean {
  return countEstruturasRegistradas() > 0
}

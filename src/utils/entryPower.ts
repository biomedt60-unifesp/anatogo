import type { AnatoEntry } from '../data/anatodex'
import { getEstruturaCount } from './entryStructures'

/** “AR” — índice de relevância anatômica (análogo ao CP do Pokémon GO) */
export function entryPower(entry: AnatoEntry): number {
  const base = parseInt(entry.number, 10) * 12
  return base + getEstruturaCount(entry) * 2
}

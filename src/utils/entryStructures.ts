import type { AnatoEntry } from '../data/anatodex'
import type { EstruturaGrupo, EstruturaItem, EstruturaSecao } from '../data/structureTypes'

export function getEntrySecoes(entry: AnatoEntry): EstruturaSecao[] {
  if (entry.secoes?.length) return entry.secoes
  if (entry.grupos?.length) {
    return [{ id: 'default', titulo: '', grupos: entry.grupos }]
  }
  return []
}

export function getAllGrupos(entry: AnatoEntry): EstruturaGrupo[] {
  return getEntrySecoes(entry).flatMap((secao) => secao.grupos)
}

export function getAllEstruturas(entry: AnatoEntry): EstruturaItem[] {
  return getAllGrupos(entry).flatMap((grupo) => grupo.estruturas)
}

export function getEstruturaCount(entry: AnatoEntry): number {
  return getAllEstruturas(entry).length
}

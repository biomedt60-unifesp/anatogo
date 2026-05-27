import type { EstruturaGrupo, EstruturaSecao } from '../data/structureTypes'

export function slugifyRoteiroId(nome: string): string {
  return nome
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{M}/gu, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

export function grupoRoteiro(
  id: string,
  titulo: string,
  nomes: string[],
  /** Evita colisão de id quando o mesmo nome aparece em seções diferentes */
  idPrefix?: string,
): EstruturaGrupo {
  return {
    id,
    titulo,
    estruturas: nomes.map((nome) => {
      const baseId = slugifyRoteiroId(nome)
      return { id: idPrefix ? `${idPrefix}-${baseId}` : baseId, nome }
    }),
  }
}

/** Uma seção com um único grupo — lista na ordem do roteiro */
export function secaoListaRoteiro(id: string, titulo: string, nomes: string[]): EstruturaSecao {
  return {
    id,
    titulo,
    grupos: [grupoRoteiro('roteiro', titulo || 'Roteiro prático', nomes)],
  }
}

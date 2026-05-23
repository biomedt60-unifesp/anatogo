import type { EstruturaGrupo, EstruturaItem, EstruturaSecao } from '../data/structureTypes'

export function slugifyRoteiroId(nome: string): string {
  return nome
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{M}/gu, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

function item(nome: string): EstruturaItem {
  return { id: slugifyRoteiroId(nome), nome }
}

export function grupoRoteiro(id: string, titulo: string, nomes: string[]): EstruturaGrupo {
  return {
    id,
    titulo,
    estruturas: nomes.map((nome) => item(nome)),
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

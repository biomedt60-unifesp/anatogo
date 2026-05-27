import type { EstruturaSecao } from '../data/structureTypes'

export function aplicarLocalizacao(
  secoes: EstruturaSecao[],
  mapa: Record<string, string>,
): EstruturaSecao[] {
  return secoes.map((secao) => ({
    ...secao,
    grupos: secao.grupos.map((grupo) => ({
      ...grupo,
      estruturas: grupo.estruturas.map((item) => ({
        ...item,
        localizacao: mapa[item.id] ?? item.localizacao,
      })),
    })),
  }))
}

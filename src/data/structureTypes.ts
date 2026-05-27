export type EstruturaItem = {
  id: string
  nome: string
  /** Dica para localizar a estrutura (estudo / peça no museu) */
  localizacao?: string
}

export type EstruturaGrupo = {
  id: string
  titulo: string
  descricao?: string
  estruturas: EstruturaItem[]
}

export type EstruturaSecao = {
  id: string
  titulo: string
  descricao?: string
  grupos: EstruturaGrupo[]
}

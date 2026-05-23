export type EstruturaItem = {
  id: string
  nome: string
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

/** Respostas no estilo PokeAPI (lista paginada simplificada) */

export type AnatoApiResourceLink = {
  name: string
  slug: string
  url: string
}

export type AnatoApiListResponse<T extends AnatoApiResourceLink = AnatoApiResourceLink> = {
  count: number
  next: string | null
  previous: string | null
  results: T[]
}

export type AnatoApiStructure = {
  /** id estável no sistema, ex.: `femur` */
  id: string
  /** id composto global, ex.: `esqueletico/femur` */
  globalId: string
  name: string
  system: AnatoApiResourceLink
  section?: { id: string; title: string }
  group?: { id: string; title: string }
  /** Dica para localizar a estrutura */
  location?: string
}

export type AnatoApiSystemSummary = AnatoApiResourceLink & {
  id: number
  tipo: string
  emoji: string
  structureCount: number
}

export type AnatoApiSystem = AnatoApiSystemSummary & {
  tagline: string
  description: string
  abilities: string[]
  fact: string
  ossada: string
  power: number
  structures: AnatoApiStructure[]
}

export type AnatoApiMeta = {
  title: string
  subtitle: string
  institution: string
  version: string
  documentation: string
}

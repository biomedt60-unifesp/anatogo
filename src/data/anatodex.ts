import type { EstruturaGrupo, EstruturaSecao } from './structureTypes'
import { getRoteiroSecoes } from './roteiroBiomedicina'
import { getAllEstruturas, getEstruturaCount } from '../utils/entryStructures'

export type AnatoEntry = {
  number: string
  slug: string
  nome: string
  emoji: string
  tipo: string
  tagline: string
  descricao: string
  funcoes: string[]
  secoes?: EstruturaSecao[]
  grupos?: EstruturaGrupo[]
  fato: string
  ossada: string
}

export const anatodexMeta = {
  titulo: 'Anatodex',
  subtitulo: 'Atlas de sistemas do corpo humano',
  institucao: 'UNIFESP · Museu Prof. Dr. Renato Locchi',
}

export const anatoEntries: AnatoEntry[] = [
  {
    number: '001',
    slug: 'esqueletico',
    nome: 'Sistema esquelético',
    emoji: '🦴',
    tipo: 'Suporte',
    tagline: 'O arcabouço do corpo',
    descricao:
      'O sistema esquelético é formado por ossos, cartilagens, articulações e estruturas associadas. No corpo humano adulto existem cerca de 206 ossos.',
    funcoes: [
      'Sustentação',
      'Proteção',
      'Movimento',
      'Armazenamento mineral',
      'Hematopoiese',
      'Reserva energética',
    ],
    secoes: getRoteiroSecoes('esqueletico'),
    fato: 'Bebês têm ~270 ossos; muitos se fundem na infância.',
    ossada: 'Sem mim você viraria gelatina.',
  },
  {
    number: '002',
    slug: 'muscular',
    nome: 'Sistema muscular',
    emoji: '💪',
    tipo: 'Movimento',
    tagline: 'Força e postura',
    descricao:
      'Mais de 600 músculos esqueléticos, além do cardíaco e liso, permitem movimento voluntário e estabilidade.',
    funcoes: ['Movimento', 'Postura', 'Calor', 'Circulação auxiliar'],
    secoes: getRoteiroSecoes('muscular'),
    fato: 'O masseter é um dos músculos mais fortes proporcionalmente.',
    ossada: 'Contraia com saber — na visita, observe origem e inserção.',
  },
  {
    number: '003',
    slug: 'cardiovascular',
    nome: 'Sistema cardiovascular',
    emoji: '❤️',
    tipo: 'Transporte',
    tagline: 'O circuito da vida',
    descricao:
      'Coração e vasos formam um circuito fechado que distribui oxigênio, nutrientes e hormônios.',
    funcoes: ['Distribuição O₂', 'Remoção CO₂', 'Transporte hormonal', 'Termorregulação'],
    secoes: getRoteiroSecoes('cardiovascular'),
    fato: 'Em repouso, o coração bombeia cerca de 5 L de sangue por minuto.',
    ossada: 'Lub-dub! Compare paredes dos ventrículos — são diferentes por um motivo.',
  },
  {
    number: '004',
    slug: 'nervoso',
    nome: 'Sistema nervoso',
    emoji: '🧠',
    tipo: 'Controle',
    tagline: 'Comando e integração',
    descricao:
      'Encéfalo, medula e nervos periféricos coordenam sensação, movimento e funções autonômicas.',
    funcoes: ['Sensação', 'Movimento', 'Autonômico', 'Cognição'],
    secoes: getRoteiroSecoes('nervoso'),
    fato: 'O cérebro usa cerca de 20% do oxigênio do corpo.',
    ossada: 'Cada sulco conta uma história.',
  },
  {
    number: '005',
    slug: 'respiratorio',
    nome: 'Sistema respiratório',
    emoji: '🫁',
    tipo: 'Gases',
    tagline: 'Ar dentro, vida fora',
    descricao:
      'Vias aéreas conduzem o ar aos alvéolos, onde ocorre a troca gasosa com o sangue.',
    funcoes: ['Hematose', 'Fonação', 'Filtração do ar', 'pH sanguíneo'],
    secoes: getRoteiroSecoes('respiratorio'),
    fato: 'Alvéolos estendidos cobririam área de um quarto de tênis.',
    ossada: 'Inspire fundo — e sem correr no laboratório, combinado?',
  },
  {
    number: '006',
    slug: 'urinario',
    nome: 'Sistema urinário',
    emoji: '💧',
    tipo: 'Filtração',
    tagline: 'Equilíbrio interno',
    descricao:
      'Rins e vias urinárias eliminam resíduos e regulam volume, pressão e eletrólitos.',
    funcoes: ['Filtração', 'Eliminação', 'Pressão arterial', 'Eritropoiese'],
    secoes: getRoteiroSecoes('urinario'),
    fato: 'Filtram ~180 L/dia; quase tudo é reabsorvido.',
    ossada: 'Dois rins, milhões de néfrons — eficiência pura.',
  },
  {
    number: '007',
    slug: 'reprodutor',
    nome: 'Sistema reprodutor',
    emoji: '🧬',
    tipo: 'Reprodução',
    tagline: 'Continuidade da espécie',
    descricao:
      'Órgãos reprodutivos masculinos e femininos produzem gametas e hormônios sexuais.',
    funcoes: ['Gametas', 'Hormônios', 'Gestação', 'Caracteres sexuais'],
    secoes: getRoteiroSecoes('reprodutor'),
    fato: 'Reserva folicular feminina é definida ao nascer.',
    ossada: 'Ciência com ética e respeito sempre.',
  },
  {
    number: '008',
    slug: 'digestorio',
    nome: 'Sistema digestório',
    emoji: '🍽️',
    tipo: 'Digestão',
    tagline: 'Do prato à célula',
    descricao:
      'Tubo digestório e órgãos anexos processam alimentos e absorvem nutrientes.',
    funcoes: ['Digestão', 'Absorção', 'Eliminação', 'Metabolismo hepático'],
    secoes: getRoteiroSecoes('digestorio'),
    fato: 'Intestino delgado pode medir mais de 6 metros.',
    ossada: 'Siga o tubo como um mapa — eu sou seu GPS ósseo.',
  },
]

export function getEntry(slug: string): AnatoEntry | undefined {
  return anatoEntries.find((e) => e.slug === slug)
}

function getAllEstruturaIdsForEntry(entry: AnatoEntry): string[] {
  return getAllEstruturas(entry).map((item) => item.id)
}

export const STORAGE_KEY = 'anatodex-registrados'
export const STRUCTURES_STORAGE_KEY = 'anatodex-estruturas-registradas'

export type EstruturasRegistradasMap = Record<string, string[]>

const REGISTRO_CHANGE_EVENT = 'anatodex-registro-change'

function notifyRegistroChange() {
  window.dispatchEvent(new Event(REGISTRO_CHANGE_EVENT))
}

function migrateLegacyRegistrados(map: EstruturasRegistradasMap): EstruturasRegistradasMap {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return map
    const legacy = JSON.parse(raw) as string[]
    if (!Array.isArray(legacy) || legacy.length === 0) return map

    const next = { ...map }
    let changed = false
    for (const slug of legacy) {
      if (next[slug]?.length) continue
      const entry = getEntry(slug)
      if (!entry) continue
      const ids = getAllEstruturaIdsForEntry(entry)
      next[slug] = [...ids]
      changed = true
    }
    if (changed) saveEstruturasRegistradas(next)
    return next
  } catch {
    return map
  }
}

function normalizeRegistradasIds(map: EstruturasRegistradasMap): EstruturasRegistradasMap {
  let changed = false
  const next: EstruturasRegistradasMap = {}

  for (const [slug, stored] of Object.entries(map)) {
    const entry = getEntry(slug)
    if (!entry || !stored?.length) {
      next[slug] = stored ?? []
      continue
    }
    const items = getAllEstruturas(entry)
    const ids = new Set<string>()
    for (const value of stored) {
      const byId = items.find((item) => item.id === value)
      if (byId) {
        ids.add(byId.id)
        continue
      }
      const stripOsso = (s: string) =>
        s.replace(/^osso\s+(do|da|dos|das)\s+/i, '').replace(/^osso\s+/i, '').trim()
      const valueNorm = stripOsso(value).toLowerCase()
      const byNome = items.find((item) => {
        if (item.nome === value || item.id === value) return true
        const itemNorm = stripOsso(item.nome).toLowerCase()
        return itemNorm === valueNorm || itemNorm === value.toLowerCase()
      })
      if (byNome) {
        ids.add(byNome.id)
        changed = true
        continue
      }
      ids.add(value)
    }
    const list = [...ids]
    if (list.length !== stored.length) changed = true
    next[slug] = list
  }

  if (changed) saveEstruturasRegistradas(next)
  return changed ? next : map
}

export function loadEstruturasRegistradas(): EstruturasRegistradasMap {
  try {
    const raw = localStorage.getItem(STRUCTURES_STORAGE_KEY)
    const map = raw ? (JSON.parse(raw) as EstruturasRegistradasMap) : {}
    return normalizeRegistradasIds(migrateLegacyRegistrados(map))
  } catch {
    return normalizeRegistradasIds(migrateLegacyRegistrados({}))
  }
}

function saveEstruturasRegistradas(map: EstruturasRegistradasMap) {
  localStorage.setItem(STRUCTURES_STORAGE_KEY, JSON.stringify(map))
  syncLegacySlugsFromEstruturas(map)
  notifyRegistroChange()
}

function syncLegacySlugsFromEstruturas(map: EstruturasRegistradasMap) {
  const slugs = anatoEntries
    .filter((entry) => {
      const registradas = map[entry.slug] ?? []
      return registradas.length > 0
    })
    .map((entry) => entry.slug)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(slugs))
}

export function getRegistradasPorSlug(slug: string): string[] {
  return loadEstruturasRegistradas()[slug] ?? []
}

export function isEstruturaRegistrada(slug: string, estrutura: string): boolean {
  return getRegistradasPorSlug(slug).includes(estrutura)
}

export function toggleEstruturaRegistrada(slug: string, estrutura: string): boolean {
  const map = loadEstruturasRegistradas()
  const atual = new Set(map[slug] ?? [])
  if (atual.has(estrutura)) {
    atual.delete(estrutura)
  } else {
    atual.add(estrutura)
  }
  const list = [...atual]
  const next = { ...map }
  if (list.length === 0) {
    delete next[slug]
  } else {
    next[slug] = list
  }
  saveEstruturasRegistradas(next)
  return atual.has(estrutura)
}

export function countRegistradasPorSlug(slug: string): number {
  return getRegistradasPorSlug(slug).length
}

export function totalEstruturasNoAtlas(): number {
  return anatoEntries.reduce((sum, entry) => sum + getEstruturaCount(entry), 0)
}

export function countEstruturasRegistradas(): number {
  const map = loadEstruturasRegistradas()
  return Object.values(map).reduce((sum, list) => sum + list.length, 0)
}

export function isSistemaCompleto(slug: string): boolean {
  const entry = getEntry(slug)
  if (!entry) return false
  return countRegistradasPorSlug(slug) >= getEstruturaCount(entry)
}

/** @deprecated Prefer countEstruturasRegistradas / getRegistradasPorSlug */
export function loadRegistrados(): string[] {
  const map = loadEstruturasRegistradas()
  return Object.keys(map).filter((slug) => (map[slug]?.length ?? 0) > 0)
}

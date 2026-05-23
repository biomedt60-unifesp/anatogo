import { anatoEntries, anatodexMeta } from '../data/anatodex'
import type { AnatoEntry } from '../data/anatodex'
import { getEntrySecoes, getEstruturaCount } from '../utils/entryStructures'
import { entryPower } from '../utils/entryPower'
import type {
  AnatoApiListResponse,
  AnatoApiMeta,
  AnatoApiStructure,
  AnatoApiSystem,
  AnatoApiSystemSummary,
} from './types'

export const ANATO_API_VERSION = 'v1'
export const ANATO_API_BASE = `/api/${ANATO_API_VERSION}`

function systemUrl(slug: string): string {
  return `${ANATO_API_BASE}/systems/${slug}`
}

function structureUrl(systemSlug: string, structureId: string): string {
  return `${ANATO_API_BASE}/systems/${systemSlug}/structures/${structureId}`
}

function toSystemSummary(entry: AnatoEntry): AnatoApiSystemSummary {
  return {
    id: Number.parseInt(entry.number, 10),
    name: entry.nome,
    slug: entry.slug,
    tipo: entry.tipo,
    emoji: entry.emoji,
    structureCount: getEstruturaCount(entry),
    url: systemUrl(entry.slug),
  }
}

function toStructures(entry: AnatoEntry): AnatoApiStructure[] {
  const systemLink = {
    name: entry.nome,
    slug: entry.slug,
    url: systemUrl(entry.slug),
  }

  return getEntrySecoes(entry).flatMap((secao) =>
    secao.grupos.flatMap((grupo) =>
      grupo.estruturas.map((item) => ({
        id: item.id,
        globalId: `${entry.slug}/${item.id}`,
        name: item.nome,
        system: systemLink,
        section: secao.titulo
          ? { id: secao.id, title: secao.titulo }
          : undefined,
        group: { id: grupo.id, title: grupo.titulo },
      })),
    ),
  )
}

function toSystem(entry: AnatoEntry): AnatoApiSystem {
  const summary = toSystemSummary(entry)
  return {
    ...summary,
    tagline: entry.tagline,
    description: entry.descricao,
    abilities: [...entry.funcoes],
    fact: entry.fato,
    ossada: entry.ossada,
    power: entryPower(entry),
    structures: toStructures(entry),
  }
}

const systemsIndex = anatoEntries.map(toSystemSummary)
const systemsBySlug = new Map(anatoEntries.map((e) => [e.slug, toSystem(e)]))
const structuresByGlobalId = new Map<string, AnatoApiStructure>()

for (const entry of anatoEntries) {
  for (const s of toStructures(entry)) {
    structuresByGlobalId.set(s.globalId, s)
  }
}

export function getMeta(): AnatoApiMeta {
  return {
    title: anatodexMeta.titulo,
    subtitle: anatodexMeta.subtitulo,
    institution: anatodexMeta.institucao,
    version: ANATO_API_VERSION,
    documentation: `${ANATO_API_BASE}/`,
  }
}

/** GET /systems — lista resumida (estilo PokeAPI) */
export function listSystems(): AnatoApiListResponse<AnatoApiSystemSummary> {
  return {
    count: systemsIndex.length,
    next: null,
    previous: null,
    results: systemsIndex,
  }
}

/** GET /systems/:slug */
export function getSystem(slug: string): AnatoApiSystem | undefined {
  return systemsBySlug.get(slug)
}

/** GET /systems/:slug/structures */
export function listStructures(systemSlug: string): AnatoApiListResponse | undefined {
  const system = systemsBySlug.get(systemSlug)
  if (!system) return undefined

  const results = system.structures.map((s) => ({
    name: s.name,
    slug: s.id,
    url: structureUrl(systemSlug, s.id),
  }))

  return {
    count: results.length,
    next: null,
    previous: null,
    results,
  }
}

/** GET /systems/:slug/structures/:structureId */
export function getStructure(
  systemSlug: string,
  structureId: string,
): AnatoApiStructure | undefined {
  return structuresByGlobalId.get(`${systemSlug}/${structureId}`)
}

/** Todas as estruturas do atlas (visita ao museu) */
export function listAllStructures(): AnatoApiListResponse {
  const results = [...structuresByGlobalId.values()].map((s) => ({
    name: s.name,
    slug: s.globalId,
    url: structureUrl(s.system.slug, s.id),
  }))

  return {
    count: results.length,
    next: null,
    previous: null,
    results,
  }
}

/** Compatível com código existente */
export function getEntry(slug: string): AnatoEntry | undefined {
  return anatoEntries.find((e) => e.slug === slug)
}

export { anatoEntries }

function apiBaseUrl(): string {
  const base = import.meta.env.BASE_URL ?? '/'
  return `${base}api/${ANATO_API_VERSION}`
}

/** GET via JSON estático (public/api/v1) — útil fora do bundle React */
export async function fetchSystems(): Promise<AnatoApiListResponse<AnatoApiSystemSummary>> {
  const res = await fetch(`${apiBaseUrl()}/systems.json`)
  if (!res.ok) throw new Error(`Anato API: systems (${res.status})`)
  return res.json() as Promise<AnatoApiListResponse<AnatoApiSystemSummary>>
}

export async function fetchSystem(slug: string): Promise<AnatoApiSystem | undefined> {
  const res = await fetch(`${apiBaseUrl()}/systems/${slug}/index.json`)
  if (res.status === 404) return undefined
  if (!res.ok) throw new Error(`Anato API: system ${slug} (${res.status})`)
  return res.json() as Promise<AnatoApiSystem>
}

export async function fetchStructures(
  systemSlug: string,
): Promise<AnatoApiListResponse | undefined> {
  const res = await fetch(`${apiBaseUrl()}/systems/${systemSlug}/structures.json`)
  if (res.status === 404) return undefined
  if (!res.ok) throw new Error(`Anato API: structures ${systemSlug} (${res.status})`)
  return res.json() as Promise<AnatoApiListResponse>
}

export async function fetchStructure(
  systemSlug: string,
  structureId: string,
): Promise<AnatoApiStructure | undefined> {
  const res = await fetch(`${apiBaseUrl()}/systems/${systemSlug}/structures/${structureId}.json`)
  if (res.status === 404) return undefined
  if (!res.ok) throw new Error(`Anato API: structure ${systemSlug}/${structureId} (${res.status})`)
  return res.json() as Promise<AnatoApiStructure>
}

import { useCallback, useMemo, useState } from 'react'
import type { AnatoEntry } from '../../data/anatodex'
import { isSistemaCompleto, toggleEstruturaRegistrada } from '../../data/anatodex'
import { useRegistroEstruturas } from '../../hooks/useRegistroEstruturas'
import { getAllEstruturas, getEntrySecoes, getEstruturaCount } from '../../utils/entryStructures'
import type { EstruturaItem } from '../../data/structureTypes'
import { StructureLocalizacaoTip } from './StructureLocalizacaoTip'

type Props = {
  entry: AnatoEntry
}

export function StructureRegisterList({ entry }: Props) {
  const [query, setQuery] = useState('')
  const { map } = useRegistroEstruturas()
  const registradas = map[entry.slug] ?? []
  const secoes = useMemo(() => getEntrySecoes(entry), [entry])
  const estruturas = useMemo(() => getAllEstruturas(entry), [entry])
  const porSecao = secoes.length > 1 && secoes.some((s) => s.titulo)

  const onToggle = useCallback(
    (estruturaId: string) => {
      toggleEstruturaRegistrada(entry.slug, estruturaId)
    },
    [entry.slug],
  )

  const filteredSecoes = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return secoes
    return secoes
      .map((secao) => ({
        ...secao,
        grupos: secao.grupos.map((grupo) => ({
          ...grupo,
          estruturas: grupo.estruturas.filter((item) => item.nome.toLowerCase().includes(q)),
        })),
      }))
      .filter((secao) => secao.grupos.some((g) => g.estruturas.length > 0))
  }, [secoes, query])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return estruturas
    return estruturas.filter((item) => item.nome.toLowerCase().includes(q))
  }, [estruturas, query])

  const renderItem = (item: EstruturaItem) => {
    const registrado = registradas.includes(item.id)
    return (
      <li key={item.id} className="go-structure-row">
        <button
          type="button"
          className={`go-structure-item${registrado ? ' go-structure-item--registered' : ''}`}
          aria-pressed={registrado}
          aria-label={
            registrado ? `${item.nome}, registrada` : `${item.nome}, toque para registrar`
          }
          onClick={() => onToggle(item.id)}
        >
          <span className="go-structure-item-label">{item.nome}</span>
          <span className="go-structure-item-action" aria-hidden>
            {registrado ? '✓' : '+'}
          </span>
        </button>
        {item.localizacao && (
          <StructureLocalizacaoTip texto={item.localizacao} nomeEstrutura={item.nome} />
        )}
      </li>
    )
  }

  const total = getEstruturaCount(entry)
  const count = registradas.length
  const completo = isSistemaCompleto(entry.slug)

  return (
    <section className="go-card-section go-structure-section">
      <h3 className="go-section-title">
        Estruturas do sistema
        <span className="go-section-count">
          {count} / {total}
        </span>
      </h3>

      {total > 6 && (
        <label className="go-structure-search go-dex-search">
          <span className="sr-only">Buscar estrutura</span>
          <svg className="go-dex-search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
            <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
            <path d="M20 20l-3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <input
            type="search"
            placeholder="Buscar estrutura..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
      )}

      {porSecao ? (
        filteredSecoes.map((secao) => (
          <div key={secao.id} className="go-structure-part">
            <h4 className="go-structure-part-title">{secao.titulo}</h4>
            <ul className="go-structure-list">
              {secao.grupos.flatMap((grupo) => grupo.estruturas.map((item) => renderItem(item)))}
            </ul>
          </div>
        ))
      ) : (
        <ul className="go-structure-list">{filtered.map((item) => renderItem(item))}</ul>
      )}

      {filtered.length === 0 && query.trim() && (
        <p className="go-structure-empty">Nenhuma estrutura encontrada para &quot;{query.trim()}&quot;.</p>
      )}

      {completo && (
        <p className="go-detail-caught go-detail-caught--system">
          <span className="go-detail-caught-icon" aria-hidden>
            ✓
          </span>
          Sistema completo no Anatodex
        </p>
      )}
    </section>
  )
}

import { useCallback, useMemo, useState } from 'react'
import type { AnatoEntry } from '../../data/anatodex'
import { isSistemaCompleto, toggleEstruturaRegistrada } from '../../data/anatodex'
import { useRegistroEstruturas } from '../../hooks/useRegistroEstruturas'
import { getAllEstruturas, getEstruturaCount } from '../../utils/entryStructures'

type Props = {
  entry: AnatoEntry
}

export function StructureRegisterList({ entry }: Props) {
  const [query, setQuery] = useState('')
  const { map } = useRegistroEstruturas()
  const registradas = map[entry.slug] ?? []
  const estruturas = useMemo(() => getAllEstruturas(entry), [entry])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return estruturas
    return estruturas.filter((item) => item.nome.toLowerCase().includes(q))
  }, [estruturas, query])

  const onToggle = useCallback(
    (estruturaId: string) => {
      toggleEstruturaRegistrada(entry.slug, estruturaId)
    },
    [entry.slug],
  )

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

      <ul className="go-structure-list">
        {filtered.map((item) => {
          const registrado = registradas.includes(item.id)
          return (
            <li key={item.id}>
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
            </li>
          )
        })}
      </ul>

      {filtered.length === 0 && (
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

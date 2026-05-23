import { useState } from 'react'
import { DexListItem } from '../components/anatodex/DexListItem'
import { GoShell } from '../components/layout/GoShell'
import { anatoEntries } from '../data/anatodex'
import { getMeta } from '../api/anatoApi'
import { useRegistroEstruturas } from '../hooks/useRegistroEstruturas'

export function DexPage() {
  const [query, setQuery] = useState('')
  const { totalRegistradas, totalNoAtlas, countPorSlug } = useRegistroEstruturas()

  const filtered = anatoEntries.filter(
    (e) =>
      e.nome.toLowerCase().includes(query.toLowerCase()) ||
      e.tipo.toLowerCase().includes(query.toLowerCase()) ||
      e.number.includes(query),
  )

  return (
    <GoShell pageClass="go-dex-screen">
      <header className="go-dex-header">
        <h2 className="go-dex-heading">{getMeta().title}</h2>
        <p className="go-dex-caught">
          <strong>{totalRegistradas}</strong> estruturas registradas
        </p>
      </header>

      <div className="go-dex-actions">
        <label className="go-dex-search">
          <span className="sr-only">Buscar</span>
          <svg className="go-dex-search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
            <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
            <path d="M20 20l-3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <input
            type="search"
            placeholder="Buscar sistema..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
      </div>

      <ul className="go-dex-grid">
        {filtered.map((entry) => (
          <li key={entry.slug}>
            <DexListItem entry={entry} registradas={countPorSlug(entry.slug)} />
          </li>
        ))}
      </ul>

      {filtered.length === 0 && <p className="go-dex-empty">Nenhum sistema encontrado.</p>}

      {totalRegistradas < totalNoAtlas && (
        <p className="go-dex-footer-count">
          {totalRegistradas} de {totalNoAtlas} estruturas registradas
        </p>
      )}
    </GoShell>
  )
}

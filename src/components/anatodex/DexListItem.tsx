import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import type { AnatoEntry } from '../../data/anatodex'
import { getTipoStyle } from '../../data/goTypes'
import { getEstruturaCount } from '../../utils/entryStructures'
import { SystemIcon } from './SystemIcon'

type Props = {
  entry: AnatoEntry
  registradas: number
}

function dexCardTitle(nome: string): string {
  const short = nome.replace(/^Sistema\s+/i, '').trim()
  if (!short) return nome
  return short.charAt(0).toUpperCase() + short.slice(1).toLowerCase()
}

export function DexListItem({ entry, registradas }: Props) {
  const total = getEstruturaCount(entry)
  const tipo = getTipoStyle(entry.tipo)
  const cardStyle = {
    '--dex-accent': tipo.bg,
  } as CSSProperties

  return (
    <Link
      to={`/dex/${entry.slug}`}
      className="go-dex-card"
      style={cardStyle}
    >
      <div className="go-dex-card-icon-wrap" aria-hidden>
        <SystemIcon entry={entry} className="go-dex-card-icon" />
      </div>
      <h3 className="go-dex-card-title">{dexCardTitle(entry.nome)}</h3>
      <p className="go-dex-card-value" aria-label={`${registradas} de ${total} estruturas registradas`}>
        {registradas > 0 ? (
          <>
            <span className="go-dex-card-value-num">{registradas}</span>
            <span className="go-dex-card-value-dim"> / {total}</span>
          </>
        ) : (
          <span className="go-dex-card-value-num go-dex-card-value-num--solo">{total}</span>
        )}
      </p>
      <p className="go-dex-card-meta">
        {registradas > 0 ? 'registradas' : total === 1 ? 'estrutura' : 'estruturas'}
      </p>
    </Link>
  )
}

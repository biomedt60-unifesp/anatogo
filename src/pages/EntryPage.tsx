import type { CSSProperties } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { StructureRegisterList } from '../components/anatodex/StructureRegisterList'
import { SystemIcon } from '../components/anatodex/SystemIcon'
import { GoShell } from '../components/layout/GoShell'
import { OssadaBubble } from '../components/guia/OssadaBubble'
import { getEntry, getSystem } from '../api/anatoApi'
import { OssadaAvatar } from '../components/guia/OssadaAvatar'
import { getTipoStyle } from '../data/goTypes'
export function EntryPage() {
  const { slug } = useParams<{ slug: string }>()
  const entry = slug ? getEntry(slug) : undefined
  const system = slug ? getSystem(slug) : undefined

  if (!entry || !system) return <Navigate to="/dex" replace />

  const tipo = getTipoStyle(entry.tipo)
  const power = system.power

  return (
    <GoShell backTo="/dex" backLabel="Lista" hideTabBar pageClass="go-detail-screen">
      <article
        className="go-detail"
        style={{ '--structure-accent': tipo.bg, '--hero-accent': tipo.bg } as CSSProperties}
      >
        <div className="go-detail-hero">
          <div className="go-detail-cp">
            <span className="go-detail-cp-label">AR</span>
            <span className="go-detail-cp-value">{power}</span>
          </div>
          <div className="go-detail-sprite-ring">
            <SystemIcon entry={entry} className="go-detail-emoji" />
          </div>
        </div>

        <div className="go-detail-sheet">
          <div className="go-detail-head">
            <div>
              <h2 className="go-detail-name">{entry.nome}</h2>
            </div>
            <span className="go-type-chip go-type-chip--outline">
              {entry.tipo}
            </span>
          </div>

          <p className="go-detail-tagline">{entry.tagline}</p>
          <p className="go-detail-desc">{entry.descricao}</p>

          <section className="go-card-section">
            <h3 className="go-section-title">Funções</h3>
            <ul className="go-chips">
              {entry.funcoes.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </section>

          <StructureRegisterList entry={entry} />

          <section className="go-fact-card">
            <h3 className="go-section-title">Fato curioso</h3>
            <p>{entry.fato}</p>
          </section>

          <div className="go-npc-block">
            <div className="ossada-mini-canvas" aria-hidden>
              <OssadaAvatar />
            </div>
            <OssadaBubble texto={entry.ossada} />
          </div>
        </div>
      </article>
    </GoShell>
  )
}

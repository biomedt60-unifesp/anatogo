import { useState, type FormEvent } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { AnatoGoLogo } from '../components/brand'
import { anatodexMeta } from '../data/anatodex'
import { hasProfile, verifyLogin } from '../data/profile'
import { hasSavedProgress, setPlayerMode } from '../data/session'

type View = 'menu' | 'signin'

export function LoginPage() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const [view, setView] = useState<View>(() =>
    searchParams.get('view') === 'signin' ? 'signin' : 'menu',
  )
  const [usuario, setUsuario] = useState('')
  const [senha, setSenha] = useState('')
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const enterReturning = () => {
    setError('')
    setView('signin')
  }

  const enterNew = () => {
    navigate('/registro', { replace: true })
  }

  const backToMenu = () => {
    setError('')
    setView('menu')
  }

  const handleSignIn = async (e: FormEvent) => {
    e.preventDefault()
    if (!hasProfile()) {
      setError('Nenhuma conta neste aparelho. Use "Primeira visita" para criar.')
      return
    }

    setSubmitting(true)
    const ok = await verifyLogin(usuario, senha)
    setSubmitting(false)

    if (!ok) {
      setError('Usuário ou senha incorretos.')
      return
    }

    setPlayerMode('returning')
    navigate(hasSavedProgress() ? '/dex' : '/intro', { replace: true })
  }

  return (
    <div className="go-login">
      <div className={`go-login-content${view === 'signin' ? ' go-register-content' : ''}`}>
        <header className={view === 'signin' ? 'go-register-header' : 'go-login-brand'}>
          <AnatoGoLogo
            size={view === 'menu' ? 'lg' : 'md'}
            className={view === 'menu' ? 'go-login-brand-title' : undefined}
          />
          {view === 'menu' ? (
            <p className="go-login-brand-sub">{anatodexMeta.subtitulo}</p>
          ) : (
            <p className="go-register-sub">Entrar</p>
          )}
        </header>

        {view === 'menu' ? (
          <main className="go-login-actions">
            <button type="button" className="go-login-btn go-login-btn--primary" onClick={enterReturning}>
              Visitante registrado
            </button>
            <button type="button" className="go-login-btn go-login-btn--outline" onClick={enterNew}>
              Primeira visita
            </button>
          </main>
        ) : (
          <form className="go-register-form" onSubmit={handleSignIn} noValidate>
            <label className="go-register-label">
              Nome de usuário
              <input
                className="go-register-input"
                type="text"
                name="usuario"
                value={usuario}
                onChange={(e) => {
                  setUsuario(e.target.value)
                  setError('')
                }}
                autoComplete="username"
                required
                placeholder="Seu usuário"
              />
            </label>

            <label className="go-register-label">
              Senha
              <input
                className="go-register-input"
                type="password"
                name="senha"
                value={senha}
                onChange={(e) => {
                  setSenha(e.target.value)
                  setError('')
                }}
                autoComplete="current-password"
                required
                placeholder="Sua senha"
              />
            </label>

            {error && <p className="go-register-error">{error}</p>}

            <button
              type="submit"
              className="go-login-btn go-login-btn--primary"
              disabled={submitting}
            >
              {submitting ? 'Entrando…' : 'Entrar'}
            </button>

            <button type="button" className="go-login-btn go-login-btn--outline" onClick={backToMenu}>
              Voltar
            </button>
          </form>
        )}

        <footer className="go-login-footer">
          {view === 'signin' ? (
            <button type="button" className="go-register-back go-register-back--btn" onClick={enterNew}>
              Primeira visita? Criar conta
            </button>
          ) : (
            <p className="go-login-copy">
              {anatodexMeta.institucao}
              <br />
              Turma 60 · Biomedicina
            </p>
          )}
        </footer>
      </div>
    </div>
  )
}

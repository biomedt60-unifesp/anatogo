import { useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AnatoGoLogo } from '../components/brand'
import { hasProfile, registerProfile } from '../data/profile'
import { setPlayerMode } from '../data/session'

export function RegisterPage() {
  const navigate = useNavigate()
  const [usuario, setUsuario] = useState('')
  const [senha, setSenha] = useState('')
  const [confirmar, setConfirmar] = useState('')
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const user = usuario.trim()
    if (user.length < 3) {
      setError('Usuário precisa ter pelo menos 3 caracteres.')
      return
    }
    if (senha.length < 6) {
      setError('Senha precisa ter pelo menos 6 caracteres.')
      return
    }
    if (senha !== confirmar) {
      setError('As senhas não coincidem.')
      return
    }
    if (hasProfile()) {
      setError('Já existe uma conta neste aparelho. Use “Visitante registrado” no login.')
      return
    }

    setSubmitting(true)
    try {
      await registerProfile(user, senha)
      setPlayerMode('new')
      navigate('/intro', { replace: true })
    } catch {
      setError('Não foi possível criar a conta. Tente de novo.')
      setSubmitting(false)
    }
  }

  return (
    <div className="go-login">
      <div className="go-login-content go-register-content">
        <header className="go-register-header">
          <AnatoGoLogo />
          <p className="go-register-sub">Registro</p>
        </header>

        <form className="go-register-form" onSubmit={handleSubmit} noValidate>
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
              minLength={3}
              placeholder="ex.: maria.silva"
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
              autoComplete="new-password"
              required
              minLength={6}
              placeholder="Mínimo 6 caracteres"
            />
          </label>

          <label className="go-register-label">
            Confirmar senha
            <input
              className="go-register-input"
              type="password"
              name="confirmar"
              value={confirmar}
              onChange={(e) => {
                setConfirmar(e.target.value)
                setError('')
              }}
              autoComplete="new-password"
              required
              minLength={6}
              placeholder="Repita a senha"
            />
          </label>

          {error && <p className="go-register-error">{error}</p>}

          <button
            type="submit"
            className="go-login-btn go-login-btn--primary"
            disabled={submitting}
          >
            {submitting ? 'Criando…' : 'Criar conta'}
          </button>
        </form>

        <footer className="go-login-footer">
          <Link to="/login" className="go-register-back">
            Voltar ao login
          </Link>
        </footer>
      </div>
    </div>
  )
}

export type UserProfile = {
  usuario: string
  senhaHash: string
  createdAt: string
}

const PROFILE_KEY = 'anatodex-perfil'

async function hashSenha(usuario: string, senha: string): Promise<string> {
  const data = new TextEncoder().encode(`${usuario.toLowerCase()}:${senha}`)
  const buf = await crypto.subtle.digest('SHA-256', data)
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')
}

export function loadProfile(): UserProfile | null {
  try {
    const raw = localStorage.getItem(PROFILE_KEY)
    if (!raw) return null
    const data = JSON.parse(raw) as UserProfile
    if (!data.usuario?.trim() || !data.senhaHash) return null
    return data
  } catch {
    return null
  }
}

export function hasProfile(): boolean {
  return loadProfile() !== null
}

export async function registerProfile(usuario: string, senha: string): Promise<UserProfile> {
  const user = usuario.trim().toLowerCase()
  const full: UserProfile = {
    usuario: user,
    senhaHash: await hashSenha(user, senha),
    createdAt: new Date().toISOString(),
  }
  localStorage.setItem(PROFILE_KEY, JSON.stringify(full))
  return full
}

export async function verifyLogin(usuario: string, senha: string): Promise<boolean> {
  const profile = loadProfile()
  if (!profile) return false
  const user = usuario.trim().toLowerCase()
  if (user !== profile.usuario) return false
  const hash = await hashSenha(user, senha)
  return hash === profile.senhaHash
}

export type TipoStyle = {
  bg: string
  text: string
}

const tipos: Record<string, TipoStyle> = {
  Suporte: { bg: '#F9DE36', text: '#1a1a1a' },
  Movimento: { bg: '#EE6B2F', text: '#ffffff' },
  Transporte: { bg: '#F21761', text: '#ffffff' },
  Controle: { bg: '#B092F2', text: '#1a1a1a' },
  Gases: { bg: '#4F8FD0', text: '#ffffff' },
  Filtração: { bg: '#00FFF5', text: '#1a1a1a' },
  Reprodução: { bg: '#E48AD1', text: '#1a1a1a' },
  Digestão: { bg: '#B8FF00', text: '#1a1a1a' },
}

const fallback: TipoStyle = { bg: '#6B7280', text: '#ffffff' }

export function getTipoStyle(tipo: string): TipoStyle {
  return tipos[tipo] ?? fallback
}

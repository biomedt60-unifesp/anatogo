import { guiaInfo, profOssadaAvatar } from '../../data/guia'

type Props = {
  className?: string
  /** Ícone decorativo (ex.: tab bar) — sem texto alternativo */
  decorative?: boolean
}

/** Avatar circular do Prof. Ossada (retrato em fundo preto). */
export function OssadaAvatar({ className = '', decorative = false }: Props) {
  return (
    <img
      src={profOssadaAvatar}
      alt={decorative ? '' : guiaInfo.nome}
      aria-hidden={decorative || undefined}
      className={`go-ossada-avatar ${className}`.trim()}
      draggable={false}
    />
  )
}

import type { IconType } from 'react-icons'
import {
  GiBrain,
  GiHeartOrgan,
  GiKidneys,
  GiLungs,
  GiMuscularTorso,
  GiPelvisBone,
  GiStomach,
} from 'react-icons/gi'
import { MdOutlinePregnantWoman } from 'react-icons/md'

const iconsBySlug: Record<string, IconType> = {
  esqueletico: GiPelvisBone,
  muscular: GiMuscularTorso,
  cardiovascular: GiHeartOrgan,
  nervoso: GiBrain,
  respiratorio: GiLungs,
  urinario: GiKidneys,
  reprodutor: MdOutlinePregnantWoman,
  digestorio: GiStomach,
}

type Props = {
  entry: { slug: string; emoji: string; nome: string }
  className?: string
}

export function SystemIcon({ entry, className = '' }: Props) {
  const Icon = iconsBySlug[entry.slug]

  if (Icon) {
    return <Icon className={className} role="img" aria-label={entry.nome} />
  }

  return (
    <span className={className} role="img" aria-label={entry.nome}>
      {entry.emoji}
    </span>
  )
}

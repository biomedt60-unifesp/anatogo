import { GoSpeech } from '../ui/GoSpeech'

type Props = {
  nome?: string
  texto: string
  compact?: boolean
  showContinue?: boolean
}

export function OssadaBubble({
  nome = 'Prof. Ossada',
  texto,
  compact = false,
  showContinue = false,
}: Props) {
  return (
    <GoSpeech speaker={nome} compact={compact} showContinue={showContinue} className="go-speech--npc">
      {texto}
    </GoSpeech>
  )
}

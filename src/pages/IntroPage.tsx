import { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { OssadaPresentation } from '../components/guia/OssadaPresentation'
import { guiaSteps, profOssadaImage } from '../data/guia'

export function IntroPage() {
  const navigate = useNavigate()
  const [stepIndex, setStepIndex] = useState(0)

  const step = guiaSteps[stepIndex]
  const isLast = stepIndex >= guiaSteps.length - 1
  const isGreeting = step.id === 'hello'

  const advance = useCallback(() => {
    if (isLast) {
      navigate('/dex')
      return
    }
    setStepIndex((i) => i + 1)
  }, [isLast, navigate])

  return (
    <OssadaPresentation
      imageSrc={profOssadaImage}
      message={step.texto}
      greeting={isGreeting}
      onContinue={advance}
      progress={{ steps: guiaSteps, currentIndex: stepIndex }}
    />
  )
}

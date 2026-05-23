import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { OssadaPresentation } from '../components/guia/OssadaPresentation'
import { GoShell } from '../components/layout/GoShell'
import { getRandomCuriosidade } from '../data/curiosidades'
import { guiaInfo, profOssadaAvatar } from '../data/guia'

export function GuiaPage() {
  const location = useLocation()
  const [curiosidade, setCuriosidade] = useState(getRandomCuriosidade)

  useEffect(() => {
    setCuriosidade(getRandomCuriosidade())
  }, [location.pathname, location.key])

  return (
    <GoShell hideHeader pageClass="go-guia-screen">
      <OssadaPresentation
        underTabBar
        imageSrc={profOssadaAvatar}
        message={curiosidade}
        ariaLabel={`Curiosidade com ${guiaInfo.nome}`}
        speechLive
      />
    </GoShell>
  )
}

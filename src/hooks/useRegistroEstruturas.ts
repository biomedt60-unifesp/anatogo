import { useEffect, useMemo, useState } from 'react'
import {
  countEstruturasRegistradas,
  countRegistradasPorSlug,
  loadEstruturasRegistradas,
  totalEstruturasNoAtlas,
} from '../data/anatodex'

const REGISTRO_CHANGE_EVENT = 'anatodex-registro-change'

export function useRegistroEstruturas() {
  const [version, setVersion] = useState(0)

  useEffect(() => {
    const onChange = () => setVersion((v) => v + 1)
    window.addEventListener(REGISTRO_CHANGE_EVENT, onChange)
    return () => window.removeEventListener(REGISTRO_CHANGE_EVENT, onChange)
  }, [])

  return useMemo(() => {
    const map = loadEstruturasRegistradas()
    return {
      map,
      totalRegistradas: countEstruturasRegistradas(),
      totalNoAtlas: totalEstruturasNoAtlas(),
      countPorSlug: (slug: string) => countRegistradasPorSlug(slug),
    }
  }, [version])
}

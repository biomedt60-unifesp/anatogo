import type { EstruturaSecao } from './structureTypes'
import { grupoRoteiro, secaoListaRoteiro } from '../utils/roteiroHelpers'

/**
 * Visita ao museu — só estruturas visíveis em peças reais ou modelos didáticos.
 *
 * Nomes dos ossos: como no atlas escolar (mandíbula, fêmur…), sem prefixar tudo com
 * “Osso”. Usamos “Osso” só quando é o nome usual (ex.: osso do quadril, osso frontal).
 */

export const roteiroEsqueletico: EstruturaSecao[] = [
  {
    id: 'visita',
    titulo: 'Visita ao museu',
    grupos: [
      grupoRoteiro('ossos-visita', 'Ossos', [
        'Crânio',
        'Mandíbula',
        'Coluna cervical',
        'Coluna torácica',
        'Coluna lombar',
        'Sacro',
        'Costelas',
        'Esterno',
        'Escápula',
        'Clavícula',
        'Úmero',
        'Rádio',
        'Ulna',
        'Osso do quadril',
        'Fêmur',
        'Patela',
        'Tíbia',
        'Fíbula',
      ]),
    ],
  },
]

export const roteiroMuscular = [
  secaoListaRoteiro('visita', 'Visita ao museu', [
    'Músculo masseter',
    'Músculo temporal',
    'Músculo esternocleidomastóideo',
    'Músculo peitoral maior',
    'Músculo diafragma',
    'Músculo trapézio',
    'Músculo deltoide',
    'Músculo bíceps braquial',
    'Músculo tríceps braquial',
    'Músculo glúteo máximo',
    'Músculo quadríceps femoral',
    'Músculo gastrocnêmio',
    'Músculo tibial anterior',
  ]),
]

export const roteiroNervoso = [
  secaoListaRoteiro('visita', 'Visita ao museu', [
    'Medula espinhal',
    'Encéfalo',
    'Cerebelo',
    'Tronco encefálico',
  ]),
]

export const roteiroCardiovascular = [
  secaoListaRoteiro('visita', 'Visita ao museu', [
    'Coração',
    'Átrio direito',
    'Átrio esquerdo',
    'Ventrículo direito',
    'Ventrículo esquerdo',
    'Aorta',
    'Pulmão',
    'Baço',
  ]),
]

export const roteiroRespiratorio = [
  secaoListaRoteiro('visita', 'Visita ao museu', [
    'Laringe',
    'Traqueia',
    'Pulmão direito',
    'Pulmão esquerdo',
  ]),
]

export const roteiroUrinario = [
  secaoListaRoteiro('visita', 'Visita ao museu', [
    'Rim',
    'Ureter',
    'Bexiga urinária',
  ]),
]

export const roteiroReprodutor = [
  secaoListaRoteiro('visita', 'Visita ao museu', [
    'Testículo',
    'Pênis',
    'Ovário',
    'Útero',
  ]),
]

export const roteiroDigestorio = [
  secaoListaRoteiro('visita', 'Visita ao museu', [
    'Língua',
    'Esôfago',
    'Estômago',
    'Fígado',
    'Vesícula biliar',
    'Pâncreas',
    'Intestino delgado',
    'Cólon',
    'Reto',
  ]),
]

export const roteiroPorSlug: Record<string, EstruturaSecao[]> = {
  esqueletico: roteiroEsqueletico,
  muscular: roteiroMuscular,
  nervoso: roteiroNervoso,
  cardiovascular: roteiroCardiovascular,
  respiratorio: roteiroRespiratorio,
  urinario: roteiroUrinario,
  reprodutor: roteiroReprodutor,
  digestorio: roteiroDigestorio,
}

export function getRoteiroSecoes(slug: string): EstruturaSecao[] | undefined {
  return roteiroPorSlug[slug]
}

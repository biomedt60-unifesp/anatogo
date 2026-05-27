import type { EstruturaSecao } from './structureTypes'
import { localizacaoDigestorio } from './digestorioLocalizacao'
import { grupoRoteiro, secaoListaRoteiro } from '../utils/roteiroHelpers'
import { aplicarLocalizacao } from '../utils/roteiroLocalizacao'

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

const roteiroDigestorioBase: EstruturaSecao[] = [
  {
    id: 'boca',
    titulo: 'Boca',
    grupos: [
      grupoRoteiro('boca', 'Boca', [
        'Lábios e bochechas (com corpo adiposo da bochecha)',
        'Rima da boca',
        'Ângulo da boca',
        'Cavidade oral',
        'Vestíbulo da boca',
        'Cavidade própria da boca',
        'Palato duro',
        'Palato mole (= véu palatino)',
        'Fauces',
        'Istmo das fauces',
        'Úvula palatina',
        'Arco palatoglosso',
        'Tipos de dentes: incisivos, caninos, pré-molares e molares',
        'Língua',
        'Raiz da língua',
        'Corpo da língua',
        'Ápice, dorso e margens',
        'Papilas linguais: filiformes, fungiformes, folhadas e circunvaladas',
        'Tonsilas linguais',
        'Músculos extrínsecos da língua',
        'M. genioglosso',
        'Camada de músculos intrínsecos',
        'Glândulas salivares maiores',
        'Glândula parótida e ducto parotídeo',
        'Glândula submandibular',
        'Glândula sublingual',
        'Músculos da mastigação',
        'M. temporal',
        'M. masseter',
        'Mm. pterigoideos lateral e medial',
        'Músculos supra-hioideos',
        'M. digástrico',
        'M. milo-hióideo (este constitui o “diafragma oral”)',
      ], 'boca'),
    ],
  },
  {
    id: 'faringe',
    titulo: 'Faringe',
    grupos: [
      grupoRoteiro('faringe', 'Faringe', [
        'Parte nasal da faringe',
        'Parte oral da faringe',
        'Fauces',
        'Arco palatofaríngeo',
        'Fossa tonsilar',
        'Tonsila palatina',
        'Parte laríngea da faringe',
        'Músculos da faringe',
        'M. constritor superior da faringe',
        'M. constritor médio da faringe',
        'M. constritor inferior da faringe',
      ], 'faringe'),
    ],
  },
  {
    id: 'esofago',
    titulo: 'Esôfago',
    grupos: [
      grupoRoteiro('esofago', 'Esôfago', [
        'Partes cervical, torácica e abdominal (estabelecer os limites)',
      ], 'esofago'),
    ],
  },
  {
    id: 'estomago',
    titulo: 'Estômago',
    grupos: [
      grupoRoteiro('estomago', 'Estômago', [
        'Paredes anterior e posterior',
        'Cárdia, fundo gástrico, corpo gástrico e parte pilórica',
        'Curvaturas maior e menor',
        'Piloro (na transição entre estômago e duodeno)',
        'Omentos maior e menor (projeção de peritônio)',
      ], 'estomago'),
    ],
  },
  {
    id: 'intestino-delgado',
    titulo: 'Intestino delgado',
    grupos: [
      grupoRoteiro('intestino-delgado', 'Intestino delgado', [
        'Duodeno',
        'Parte superior',
        'Parte descendente',
        'Papila maior do duodeno',
        'Parte horizontal',
        'Parte ascendente',
        'Flexura duodenojejunal',
        'Jejuno e íleo (constituem as alças intestinais)',
        'Mesentério (fixa o jejuno-íleo à parede posterior do abdome)',
        'Parte terminal do íleo',
      ], 'intestino-delgado'),
    ],
  },
  {
    id: 'intestino-grosso',
    titulo: 'Intestino grosso',
    grupos: [
      grupoRoteiro('intestino-grosso', 'Intestino grosso', [
        'Ceco',
        'Apêndice vermiforme',
        'Colo ascendente',
        'Flexura direita do colo',
        'Colo transverso',
        'Mesocolo transverso',
        'Flexura esquerda do colo',
        'Colo descendente',
        'Colo sigmoide',
        'Mesocolo sigmoide',
        'Saculações do colo',
        'Apêndices omentais do colo',
        'Tênias do colo (fitas musculares características do ceco e colos)',
        'Reto',
        'Pregas transversais do reto',
        'Ampola do reto',
        'Canal anal',
        'Flexura anorretal',
        'Colunas anais',
        'Mm. esfíncteres externo e interno do ânus',
        'Ânus (abertura do canal anal para o meio exterior)',
      ], 'intestino-grosso'),
    ],
  },
  {
    id: 'figado',
    titulo: 'Fígado',
    grupos: [
      grupoRoteiro('figado', 'Fígado', [
        'Faces diafragmática e visceral',
        'Lobos hepático direito, hepático esquerdo, quadrado e caudado',
        'Porta do fígado (= hilo, por onde passam estruturas do pedículo do fígado)',
        'Pedículo do fígado: v. porta, a. hepática própria e ducto hepático comum',
        'Ligamentos falciforme e redondo do fígado',
        'Vesícula biliar',
        'Ducto hepático comum, ducto cístico e ducto colédoco (ampola hepatopancreática)',
      ], 'figado'),
    ],
  },
  {
    id: 'pancreas',
    titulo: 'Pâncreas',
    grupos: [
      grupoRoteiro('pancreas', 'Pâncreas', [
        'Cabeça, colo, corpo e cauda do pâncreas',
        'Ducto pancreático',
      ], 'pancreas'),
    ],
  },
  {
    id: 'peritonio',
    titulo: 'Peritônio',
    grupos: [
      grupoRoteiro('peritonio', 'Peritônio', [
        'Peritônio parietal e peritônio visceral',
      ], 'peritonio'),
    ],
  },
]

/** Roteiro prático completo — Sistema digestório (estudo) */
export const roteiroDigestorio = aplicarLocalizacao(roteiroDigestorioBase, localizacaoDigestorio)

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

import { slugifyRoteiroId } from '../utils/roteiroHelpers'

function loc(secao: string, nome: string, texto: string): [string, string] {
  return [`${secao}-${slugifyRoteiroId(nome)}`, texto]
}

/** Dicas de localização — roteiro prático do sistema digestório */
export const localizacaoDigestorio: Record<string, string> = Object.fromEntries([
  // Boca
  loc(
    'boca',
    'Lábios e bochechas (com corpo adiposo da bochecha)',
    'Região externa da cavidade oral; bochechas formam as paredes laterais do vestíbulo.',
  ),
  loc('boca', 'Rima da boca', 'Linha de contato entre os lábios; limite externo da abertura oral.'),
  loc('boca', 'Ângulo da boca', 'Cantos da boca, junção dos lábios superior e inferior.'),
  loc('boca', 'Cavidade oral', 'Espaço interno da boca, do vestíbulo até as fauces.'),
  loc('boca', 'Vestíbulo da boca', 'Espaço entre lábios/cheeks e dentes — “antessala” da cavidade.'),
  loc('boca', 'Cavidade própria da boca', 'Região interna aos dentes, limitada pelo palato e pela língua.'),
  loc('boca', 'Palato duro', 'Teto anterior da boca, osso (palato) revestido de mucosa.'),
  loc('boca', 'Palato mole (= véu palatino)', 'Teto posterior móvel; continua na úvula.'),
  loc('boca', 'Fauces', 'Abertura posterior da cavidade oral em direção à faringe.'),
  loc('boca', 'Istmo das fauces', 'Passagem estreita entre cavidade oral e orofaringe.'),
  loc('boca', 'Úvula palatina', 'Projeção mediana pendente do palato mole.'),
  loc('boca', 'Arco palatoglosso', 'Dobra na parede lateral da faringe, entre palato e língua.'),
  loc(
    'boca',
    'Tipos de dentes: incisivos, caninos, pré-molares e molares',
    'Na arcada: incisivos e caninos à frente; pré-molares e molares mais posteriores.',
  ),
  loc('boca', 'Língua', 'Assoalho móvel da cavidade oral; músculo volumoso no centro.'),
  loc('boca', 'Raiz da língua', 'Porção posterior fixa, voltada para a faringe (não vista de frente).'),
  loc('boca', 'Corpo da língua', 'Parte central entre ápice e raiz.'),
  loc('boca', 'Ápice, dorso e margens', 'Ápice = ponta; dorso = face superior; margens = bordas laterais.'),
  loc(
    'boca',
    'Papilas linguais: filiformes, fungiformes, folhadas e circunvaladas',
    'No dorso da língua: filiformes cobrem a maior parte; fungiformes mais anteriores; folhadas e circunvaladas na região posterior.',
  ),
  loc('boca', 'Tonsilas linguais', 'Agregado linfóide na face posterior da raiz da língua.'),
  loc('boca', 'Músculos extrínsecos da língua', 'Fora da língua; movem-na (genioglosso, hioglosso, etc.).'),
  loc('boca', 'M. genioglosso', 'Do queixo ao dorso da língua; principal protrusor.'),
  loc('boca', 'Camada de músculos intrínsecos', 'Dentro da língua; alteram forma (não a posição grosseira).'),
  loc('boca', 'Glândulas salivares maiores', 'Parótida, submandibular e sublingual — fora da língua.'),
  loc(
    'boca',
    'Glândula parótida e ducto parotídeo',
    'Parótida anterior à orelha; ducto abre na mucosa junto ao 2.º molar superior.',
  ),
  loc('boca', 'Glândula submandibular', 'No assoalho da boca, medial à mandíbula; ducto abre perto do freio lingual.'),
  loc('boca', 'Glândula sublingual', 'No assoalho, sob a mucosa lateral ao freio; ductos múltiplos pequenos.'),
  loc('boca', 'Músculos da mastigação', 'Região da mandíbula e têmpora; fecham e movem a mandíbula.'),
  loc('boca', 'M. temporal', 'Na fossa temporal, acima da mandíbula; elevador da mandíbula.'),
  loc('boca', 'M. masseter', 'Superfície lateral da mandíbula; músculo da “bochecha” ao morder.'),
  loc('boca', 'Mm. pterigoideos lateral e medial', 'Na fossa infratemporal; lateral abre, medial fecha a mandíbula.'),
  loc('boca', 'Músculos supra-hioideos', 'Entre o hióide e o crânio/mandíbula; elevam o assoalho oral.'),
  loc('boca', 'M. digástrico', 'Do mento ao hióide; ventre anterior eleva o assoalho da boca.'),
  loc(
    'boca',
    'M. milo-hióideo (este constitui o “diafragma oral”)',
    'Lamina entre os ramos da mandíbula; forma o assoalho muscular da boca.',
  ),
  // Faringe
  loc('faringe', 'Parte nasal da faringe', 'Acima do palato mole; continua das coanas (não visível pela boca).'),
  loc('faringe', 'Parte oral da faringe', 'Atrás da cavidade oral, entre palato mole e epiglote.'),
  loc('faringe', 'Fauces', 'Abertura entre cavidade oral e orofaringe; limitada pelos arcos.'),
  loc('faringe', 'Arco palatofaríngeo', 'Dobra posterior à tonsila, entre palato e parede faríngea.'),
  loc('faringe', 'Fossa tonsilar', 'Depressão entre arcos palatoglosso e palatofaríngeo (leito da tonsila).'),
  loc('faringe', 'Tonsila palatina', 'Agregado linfóide na fossa tonsilar, lateral da orofaringe.'),
  loc('faringe', 'Parte laríngea da faringe', 'Atrás da laringe, acima do esôfago; continua na hipofaringe.'),
  loc('faringe', 'Músculos da faringe', 'Camada muscular externa da parede faríngea (constritores).'),
  loc('faringe', 'M. constritor superior da faringe', 'Porção mais superior; junto à faringe nasal/oral.'),
  loc('faringe', 'M. constritor médio da faringe', 'Porção intermediária da parede faríngea.'),
  loc('faringe', 'M. constritor inferior da faringe', 'Porção mais inferior, acima do esôfago cervical.'),
  // Esôfago
  loc(
    'esofago',
    'Partes cervical, torácica e abdominal (estabelecer os limites)',
    'Cervical: pescoço atrás da traqueia; torácica: mediastino posterior; abdominal: curto, antes do estômago.',
  ),
  // Estômago
  loc('estomago', 'Paredes anterior e posterior', 'Na peça/abdome: parede voltada para frente vs. para trás.'),
  loc(
    'estomago',
    'Cárdia, fundo gástrico, corpo gástrico e parte pilórica',
    'Cárdia = junção com esôfago; fundo = cúpula superior; corpo = região central; piloro = porção distal.',
  ),
  loc('estomago', 'Curvaturas maior e menor', 'Maior = borda côncava longa; menor = borda curta com incisura angular.'),
  loc(
    'estomago',
    'Piloro (na transição entre estômago e duodeno)',
    'Canal pilórico + esfíncter; região distal que continua no duodeno.',
  ),
  loc(
    'estomago',
    'Omentos maior e menor (projeção de peritônio)',
    'Maior: “avental” da curvatura maior; menor: entre estômago e fígado/duodeno.',
  ),
  // Intestino delgado
  loc('intestino-delgado', 'Duodeno', 'Primeira porção do delgado, em forma de “C” ao redor da cabeça do pâncreas.'),
  loc('intestino-delgado', 'Parte superior', '1.ª porção do duodeno (bulbo), após o piloro.'),
  loc('intestino-delgado', 'Parte descendente', '2.ª porção vertical do duodeno, na parede posterior.'),
  loc(
    'intestino-delgado',
    'Papila maior do duodeno',
    'Na parede medial da 2.ª porção; entrada dos ductos biliar e pancreático.',
  ),
  loc('intestino-delgado', 'Parte horizontal', '3.ª porção transversa do duodeno.'),
  loc('intestino-delgado', 'Parte ascendente', '4.ª porção que sobe até a flexura duodenojejunal.'),
  loc('intestino-delgado', 'Flexura duodenojejunal', 'Junção duodeno → jejuno, à esquerda da coluna.'),
  loc(
    'intestino-delgado',
    'Jejuno e íleo (constituem as alças intestinais)',
    'Jejuno mais proximal (mais largo, vascular); íleo distal, antes do ceco.',
  ),
  loc(
    'intestino-delgado',
    'Mesentério (fixa o jejuno-íleo à parede posterior do abdome)',
    'Dobra dupla de peritônio que sustenta as alças e contém vasos.',
  ),
  loc('intestino-delgado', 'Parte terminal do íleo', 'Último segmento do íleo, antes da válvula ileocecal.'),
  // Intestino grosso
  loc('intestino-grosso', 'Ceco', 'Bolsa inicial do grosso, íleo entra pela válvula ileocecal.'),
  loc('intestino-grosso', 'Apêndice vermiforme', 'Projeção do ceco; base na fossa ileocecal.'),
  loc('intestino-grosso', 'Colo ascendente', 'Sobe pelo flanco direito até o fígado.'),
  loc('intestino-grosso', 'Flexura direita do colo', 'Curva hepática entre ascendente e transverso.'),
  loc('intestino-grosso', 'Colo transverso', 'Cruza o abdome abaixo do estômago.'),
  loc('intestino-grosso', 'Mesocolo transverso', 'Peritônio que sustenta o colo transverso.'),
  loc('intestino-grosso', 'Flexura esquerda do colo', 'Curva esplênica, junção transverso/descendente.'),
  loc('intestino-grosso', 'Colo descendente', 'Desce pelo flanco esquerdo em direção à pelve.'),
  loc('intestino-grosso', 'Colo sigmoide', 'Porção em “S” antes do reto, na pelve.'),
  loc('intestino-grosso', 'Mesocolo sigmoide', 'Dobra que fixa o sigmoide à parede posterior.'),
  loc('intestino-grosso', 'Saculações do colo', 'Bolhas da parede entre as tênias (haustrações).'),
  loc('intestino-grosso', 'Apêndices omentais do colo', 'Gordura na superfície serosa do colo (epiploicas).'),
  loc(
    'intestino-grosso',
    'Tênias do colo (fitas musculares características do ceco e colos)',
    'Três faixas musculares longitudinais na superfície externa do ceco/colo.',
  ),
  loc('intestino-grosso', 'Reto', 'Porção final do grosso, na pelve, continua no canal anal.'),
  loc('intestino-grosso', 'Pregas transversais do reto', 'Dobras da mucosa no reto (válvulas de Houston).'),
  loc('intestino-grosso', 'Ampola do reto', 'Dilatação terminal do reto, acima do canal anal.'),
  loc('intestino-grosso', 'Canal anal', 'Último trecho do tubo digestivo, com esfíncteres.'),
  loc('intestino-grosso', 'Flexura anorretal', 'Curva entre reto e canal anal.'),
  loc('intestino-grosso', 'Colunas anais', 'Pregas longitudinais da mucosa no canal anal.'),
  loc(
    'intestino-grosso',
    'Mm. esfíncteres externo e interno do ânus',
    'Interno = liso (mucosa/muscular); externo = estriado, voluntário, ao redor do canal.',
  ),
  loc(
    'intestino-grosso',
    'Ânus (abertura do canal anal para o meio exterior)',
    'Abertura final; pele circundante (região perianal).',
  ),
  // Fígado
  loc(
    'figado',
    'Faces diafragmática e visceral',
    'Diafragmática = côncava contra o diafragma; visceral = voltada para órgãos abdominais.',
  ),
  loc(
    'figado',
    'Lobos hepático direito, hepático esquerdo, quadrado e caudado',
    'Direito = maior volume; esquerdo = medial ao fígado; quadrado e caudado junto à vesícula e veia cava.',
  ),
  loc(
    'figado',
    'Porta do fígado (= hilo, por onde passam estruturas do pedículo do fígado)',
    'Fissura na face visceral; entram veia porta, artéria hepática e saem ductos.',
  ),
  loc(
    'figado',
    'Pedículo do fígado: v. porta, a. hepática própria e ducto hepático comum',
    'Tríade na porta: veia porta + artéria hepática + ducto hepático comum.',
  ),
  loc(
    'figado',
    'Ligamentos falciforme e redondo do fígado',
    'Falciforme = crista entre lobos na face diafragmática; redondo = resto da veia umbilical.',
  ),
  loc('figado', 'Vesícula biliar', 'Na face visceral do fígado, entre lobos direito e quadrado.'),
  loc(
    'figado',
    'Ducto hepático comum, ducto cístico e ducto colédoco (ampola hepatopancreática)',
    'Cístico sai da vesícula; comum + cístico → colédoco → papila maior do duodeno.',
  ),
  // Pâncreas
  loc(
    'pancreas',
    'Cabeça, colo, corpo e cauda do pâncreas',
    'Cabeça no “C” do duodeno; corpo cruza o abdome; cauda chega ao baço.',
  ),
  loc('pancreas', 'Ducto pancreático', 'Corre no pâncreas e abre na papila maior com o colédoco.'),
  // Peritônio
  loc(
    'peritonio',
    'Peritônio parietal e peritônio visceral',
    'Parietal = reveste parede abdominal; visceral = cobre superfície dos órgãos.',
  ),
])

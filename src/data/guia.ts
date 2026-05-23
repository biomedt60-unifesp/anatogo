export type GuiaStep = {
  id: string
  texto: string
}

export const guiaInfo = {
  nome: 'Prof. Ossada',
  papel: 'Guia esquelético · Turma 60 de Biomedicina',
}

export const profOssadaImage = `${import.meta.env.BASE_URL}images/prof-ossada.png`
export const profOssadaAvatar = `${import.meta.env.BASE_URL}images/prof-ossada-2.png`

export const guiaSteps: GuiaStep[] = [
  {
    id: 'hello',
    texto: 'Olá!\nSou Professor Ossada!',
  },
  {
    id: 'guide-visit',
    texto:
      'Vou acompanhar você na visita ao Museu Prof. Dr. Renato Locchi e ao laboratório de anatomia.',
  },
  {
    id: 'museum',
    texto:
      'O Museu Prof. Dr. Renato Locchi reúne centenas de peças anatômicas utilizadas desde a década de 1960 no ensino da anatomia na UNIFESP.',
  },
  {
    id: 'rules',
    texto:
      'Em respeito às pessoas que doaram seus corpos para compor nosso acervo, não é permitido tirar fotos no museu nem no laboratório.',
  },
  {
    id: 'anatodex',
    texto: `Você pode registrar as peças que conhecer na sua Anatodex e levar essa experiência como lembrança.`,
  },
  {
    id: 'start',
    texto: `Vamos começar? Abra a Anatodex e registre suas descobertas no museu e no laboratório.`,
  },
]

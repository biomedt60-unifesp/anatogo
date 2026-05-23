# Anatodex — Museu de Anatomia UNIFESP

**Anatodex** é uma Pokédex de anatomia: registre os 8 sistemas do corpo humano com o **Prof. Ossada** (guia 3D em esqueleto).

## Fluxo

1. **`/`** — Carregamento (cérebro + dica + barra)
2. **`/login`** — Login estilo Pokémon GO (visitante / primeira visita)
3. **`/registro`** — Cadastro (usuário e senha, primeira visita)
4. **`/login?view=signin`** — Usuário e senha (visitante registrado, na mesma página de login)
5. **`/intro`** — Intro com Prof. Ossada
6. **`/dex`** — Lista de sistemas (estilo dex)
7. **`/dex/:slug`** — Ficha completa + “registrado” no `localStorage`

## Desenvolvimento

```bash
npm install
npm run dev
```

## Dados

- Entradas: `src/data/anatodex.ts`
- Falas do Prof. Ossada (intro): `src/data/guia.ts`

## PWA (instalar no celular)

O projeto é um **Progressive Web App**: após o deploy, abra o site no Chrome (Android) ou Safari (iOS) e use **“Adicionar à tela inicial”** / **“Instalar app”**.

- Funciona offline após a primeira visita (cache do app e fontes)
- Atualizações automáticas quando houver nova versão publicada
- Em desenvolvimento: `npm run dev` também registra o service worker (útil para testar instalação)

Build para GitHub Pages (subpasta do repositório):

```bash
npm run deploy:local
```

## Stack

- Vite + React + TypeScript + Tailwind
- React Router
- React Three Fiber (Prof. Ossada)
- vite-plugin-pwa (manifest + service worker)

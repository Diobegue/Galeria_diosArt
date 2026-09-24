# Galeria Verdiana

Galeria de pinturas em Next.js (App Router) + Tailwind CSS, em preto e verde,
com imagens hospedadas externamente (Wikimedia Commons) e modal de imagem em
tela cheia.

## Como rodar

```bash
npm install
npm run dev
```

Abra http://localhost:3000

## Estrutura

- `app/page.tsx` — página inicial, cabeçalho e chamada da galeria
- `app/layout.tsx` — fontes (Fraunces + Work Sans) e metadata
- `components/Gallery.tsx` — grade responsiva de obras
- `components/Modal.tsx` — modal com fechamento por ESC (desktop), clique
  fora da imagem, e botão de fechar (essencial no mobile)
- `data/paintings.ts` — lista de obras e URLs de imagens externas

## Comportamento do modal

- **ESC** fecha o modal (desktop)
- **Clique fora da imagem/card** fecha o modal (desktop e mobile)
- **Botão "×"** no canto superior direito fecha o modal (sempre visível,
  pensado especialmente para mobile, onde não há tecla ESC)
- O scroll da página é travado enquanto o modal está aberto

## Trocar as imagens

Edite `data/paintings.ts`. Cada item aceita qualquer URL de imagem externa
(https). Se usar um domínio novo, adicione-o em `next.config.js` na lista
`images.remotePatterns` (necessário apenas se você trocar `<img>` por
`next/image`; como o projeto usa `<img>` puro, funciona com qualquer domínio
sem configuração extra).

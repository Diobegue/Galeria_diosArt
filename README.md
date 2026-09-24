# Galeria DiosArts

Galeria responsiva de desenhos e imagens. A página inicial apresenta um mural em colunas; cada imagem pode ser aberta em um visualizador em tela cheia, com navegação entre as imagens. O projeto também inclui um botão flutuante para voltar ao topo.

## Tecnologias

- **Next.js 14** com App Router
- **React 18** para a interface
- **TypeScript** para tipagem
- **Tailwind CSS 3** para estilos responsivos
- **PostCSS** e **Autoprefixer** para processamento de estilos
- Fontes **Fraunces** e **Work Sans**, carregadas pelo `next/font`

## Requisitos

- Node.js 18.17 ou superior
- npm

## Rodar localmente

1. Clone ou baixe este repositório e abra a pasta do projeto no terminal.
2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

4. Abra [http://localhost:3000](http://localhost:3000) no navegador.

O servidor atualiza a página automaticamente quando os arquivos são alterados. Para interrompê-lo, pressione `Ctrl+C` no terminal.

## Comandos disponíveis

| Comando | Uso |
| --- | --- |
| `npm run dev` | Inicia o servidor local de desenvolvimento. |
| `npm run build` | Gera a versão de produção do site. |
| `npm start` | Inicia localmente a versão de produção já compilada. Execute `npm run build` antes. |
| `npm run lint` | Executa o lint configurado pelo Next.js. |

## Estrutura do projeto

```text
app/
  globals.css       Estilos globais e rolagem suave
  layout.tsx        Layout raiz, fontes e metadados
  page.tsx          Página inicial da galeria
components/
  BackToTop.tsx     Botão flutuante para voltar ao topo
  Gallery.tsx       Mural responsivo e abertura das imagens
  Modal.tsx         Visualizador em tela cheia
data/
  paintings.ts      Dados, títulos, orientações e caminhos das imagens
public/
  fotos/            Imagens locais usadas pela galeria
```

## Editar a galeria

Os itens da galeria ficam em `data/paintings.ts`. Cada item tem:

- `id`: identificador único;
- `title`: texto alternativo da imagem;
- `src`: caminho da imagem em `public/` (por exemplo, `/fotos/foto-01.webp`) ou endereço HTTPS;
- `orientation`: `portrait`, `landscape` ou `square`, usado para definir o espaço reservado enquanto a imagem carrega.

Para incluir uma imagem local, coloque o arquivo em `public/fotos/` e use seu caminho a partir de `public`, como `/fotos/minha-imagem.webp`. Atualize também o array `paintings`.

## Interações

- Clique em uma imagem para ampliá-la.
- No visualizador, use as setas do teclado ou os botões laterais para navegar; `Esc` fecha a imagem.
- Clique fora da imagem ou no botão de fechar para sair do visualizador.
- O botão “Voltar ao topo” aparece depois de rolar mais de 300 pixels.

## Imagens remotas

As imagens podem usar arquivos locais ou endereços HTTPS. O projeto renderiza as imagens com a tag HTML `<img>`. A configuração de `images.remotePatterns` em `next.config.js` só será necessária se as imagens forem migradas para o componente `next/image`.

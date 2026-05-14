# Menta — Landing Page

Site institucional do Menta, app de controle financeiro com IA.
Conecta conta bancária via Open Finance, classifica gastos automaticamente
e diz exatamente quanto investir hoje.

🔗 **Produção:** [mentaapp.com.br](https://mentaapp.com.br)
🔗 **Hospedagem:** Vercel · deploy automático a cada push em `main`

---

## Estrutura do projeto

```
menta-landing/
├── index.html              ← markup da página, dividido em seções comentadas
├── assets/
│   ├── css/
│   │   └── styles.css      ← tokens da marca + animações customizadas
│   ├── js/
│   │   └── main.js         ← interações (menu mobile)
│   └── img/                ← imagens do projeto (reservado)
├── README.md
└── .gitignore
```

---

## Stack

- **HTML5 + CSS3** — sem build step, sem framework de frontend
- **Tailwind CSS** via CDN (`cdn.tailwindcss.com`)
- **Iconify** via CDN (ícones Lucide e Solar)
- **Google Fonts** — Plus Jakarta Sans
- **Vercel** para hospedagem

> Por que sem build? Landing page de produto não justifica a complexidade
> de bundler / npm / Vite. CDN + cache da Vercel resolve em < 100kb.

---

## Como rodar localmente

```bash
# Opção 1: abrir direto no navegador
open index.html

# Opção 2: servidor local simples (recomendado pra testar formulários)
python3 -m http.server 8000
# acessar http://localhost:8000
```

---

## Como fazer deploy

A Vercel está conectada ao repositório. **Qualquer push em `main` faz
deploy automaticamente.** Não é necessário rodar nada manualmente.

```bash
git add .
git commit -m "feat: atualizar copy do hero"
git push origin main
# deploy aparece em https://vercel.com/dashboard em ~30s
```

---

## Design system

A paleta da marca está centralizada em **dois lugares** que precisam
ficar sincronizados:

1. **`assets/css/styles.css`** → variáveis CSS (`--menta-200`, etc)
2. **`index.html`** → `tailwind.config` no `<head>` (mesmas cores
   expostas como classes Tailwind `menta-*`)

### Paleta oficial

| Token         | Hex       | Uso                              |
|---------------|-----------|----------------------------------|
| `--menta-200` | `#7ad9b7` | **Primário** — CTAs, destaques   |
| `--menta-100` | `#7cdbb9` | Variação clara                   |
| `--menta-500` | `#3d7d66` | Ícones, ações secundárias        |
| `--menta-400` | `#407c66` | Tons médios                      |
| `--menta-700` | `#183e31` | Cards escuros, seções            |
| `--menta-800` | `#0c2019` | Fundo do hero                    |
| `--menta-900` | `#0c1f18` | Fundo mais escuro                |
| `--ink-900`   | `#010302` | Texto sobre fundo claro          |
| `--ink-950`   | `#010201` | Texto preto puro                 |

### Princípios

- **Não é tech-bro:** sem neon, sem cyber, sem hacker. Tom acolhedor,
  acessível pra classes B/C/D.
- **Logo:** "M" duplo + seta para cima em gradiente menta. Mantém-se
  em todas as variações (header, mobile menu, footer).
- **Tipografia:** Plus Jakarta Sans, peso 600 para títulos.

---

## Seções da página

A página tem 10 blocos principais, todos comentados no HTML:

1. **Header** — navbar com logo, links de âncora e CTA
2. **Hero** — headline, formulário de email, mock do app e do dashboard
3. **Problem / Promise** — dor do público + jeito Menta
4. **Features Bento** — 7 cards de funcionalidades (âncora: `#recursos`)
5. **How it Works** — 3 passos: Conecte → Entenda → Decida (âncora: `#como-funciona`)
6. **Comparison** — tabela Menta vs apps tradicionais
7. **Stats** — números de impacto
8. **Testimonials** — carrossel infinito com depoimentos
9. **Security** — Open Finance, BACEN, LGPD (âncora: `#seguranca`)
10. **Pricing** — Free vs Premium (âncora: `#precos`)
11. **Final CTA** — pare de adivinhar, comece a controlar
12. **Footer** — links + redes sociais

Os links do menu (`Como funciona`, `Recursos`, `Preços`, `Segurança`)
usam âncoras com `scroll-behavior: smooth` e `scroll-margin-top` para
compensar a altura da nav fixa.

---

## Acessibilidade

- `<nav>` com `aria-label`
- Botão do menu mobile com `aria-expanded` atualizado dinamicamente
- Ícones decorativos com `aria-hidden="true"`
- Foco visível em todos os elementos interativos (default do browser)
- `prefers-reduced-motion` respeitado — usuários que pediram menos
  movimento no SO veem as animações desligadas

---

## Convenções de código

### HTML
- Indentação: 2 espaços
- Atributos longos: quebrar em múltiplas linhas alinhadas
- Comentários de seção: `<!-- ====== NOME ====== -->`
- IDs apenas onde necessário (âncoras + JS hooks)

### CSS
- Variáveis para qualquer valor que apareça mais de uma vez
- Seções numeradas e comentadas
- Classes utilitárias > inline styles (`style="..."` só pra valores dinâmicos)

### JS
- IIFE para isolar escopo
- `'use strict'` em todo arquivo
- Early returns em vez de aninhamento profundo
- Sem dependências externas

---

## Browser support

- Chrome / Edge / Firefox / Safari (últimas 2 versões)
- iOS Safari 14+
- Android Chrome (últimas 2 versões)

Não há fallback para IE — está descontinuado.

---

## Manutenção

### "Quero mudar uma cor"
Mexe em **2 lugares**: `assets/css/styles.css` (variável CSS) e no
`tailwind.config` dentro do `<head>` do `index.html`.

### "Quero trocar uma copy/texto"
Abre o `index.html`, faz `Ctrl+F` pelo texto antigo e troca.

### "Quero adicionar uma nova seção"
1. Adiciona o markup no `index.html` com um comentário `<!-- ====== NOVA ====== -->`
2. Se for âncora do menu, adiciona `id="nome-da-secao"` no `<section>`
3. Adiciona o link no menu desktop **e** no menu mobile

### "Quero adicionar JavaScript novo"
Cria a função no `assets/js/main.js` dentro de uma nova IIFE, pra
manter o escopo isolado.

---

© 2026 Menta. Todos os direitos reservados.

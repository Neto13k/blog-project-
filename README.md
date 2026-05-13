# 📰 TechJournal — Dev & Games Blog

<div align="center">

[![Deploy](https://img.shields.io/badge/Deploy-GitHub%20Pages-blue?logo=github)](https://neto13k.github.io/blog-project-/)
[![HTML](https://img.shields.io/badge/HTML-5-orange?logo=html5)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS-3-blue?logo=css3)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

**[🚀 Ver Demo ao Vivo](https://neto13k.github.io/blog-project-/)**

</div>

---

Blog estático sobre desenvolvimento web, games e tecnologia — design dark terminal com UI brutalist. Todo o conteúdo é renderizado dinamicamente via JavaScript puro, sem frameworks, sem build, sem dependências.

---

## ✨ Funcionalidades

### Originais
- ⭐ **Featured Post** — primeiro post em destaque no topo da página
- 🗂️ **Filtro por categoria** — HTML, JavaScript, Games, Dinheiro e Tecnologia (5 categorias)
- 👁️ **Contador de visualizações** — salvo por post via localStorage
- 🔗 **Roteamento por URL** — `post.html?id=N` carrega o post correto
- 📱 **Design responsivo** — suporte até 375px (celulares pequenos)
- 🎞️ **Animações de entrada** — cards com delay escalonado

### Novas (Atualização 2025)
- 📊 **Barra de progresso de leitura** — preenche conforme o usuário rola o artigo
- 💀 **Skeleton loading** — placeholder animado enquanto as imagens carregam
- ✨ **Hover com glow colorido** — cada card brilha na cor de sua categoria
- 🗃️ **Dados centralizados** — array unificado em `JS/data.js`, sem duplicação

---

## 📝 Posts

| # | Título | Categoria | Data |
|---|--------|-----------|------|
| 0 | HTML e suas funções | HTML | 05/07/2025 |
| 1 | JavaScript: aprendendo a linguagem | JavaScript | 06/07/2025 |
| 2 | Consoles mais vendidos de todos os tempos | Games | 07/07/2025 |
| 3 | Dinheiro com tarefas fáceis | Dinheiro | 09/07/2025 |
| 4 | DeepSeek e o Novo Cenário da IA em 2025 | Tecnologia | 10/05/2025 |
| 5 | Nintendo Switch 2: O que Sabemos Até Agora | Games | 11/05/2025 |
| 6 | TypeScript 5.5 e as Novidades que Todo Dev Precisa Conhecer | JavaScript | 12/05/2025 |
| 7 | Bitcoin a US$100 Mil: Entenda o que Aconteceu e o que Vem a Seguir | Dinheiro | 13/05/2025 |
| 8 | Web Components em 2025: HTML Nativo Finalmente Maduro | HTML | 14/05/2025 |

---

## 🛠️ Tecnologias

| Tecnologia | Uso |
|---|---|
| HTML5 | Estrutura semântica das páginas |
| CSS3 | Design system com variáveis customizadas e animações |
| JavaScript ES6+ | Renderização dinâmica, filtros, roteamento e scroll events |
| Google Fonts | Tipografia — Syne, Space Mono, Inter |
| localStorage | Persistência do contador de visualizações |
| GitHub Pages | Hospedagem e deploy contínuo via GitHub Actions |

---

## ⚙️ Como executar localmente

Clone o repositório:

```bash
git clone https://github.com/Neto13k/blog-project-.git
cd blog-project-
```

> ⚠️ Abrir via `file://` pode causar erros de CORS. Use um servidor local.

**Opção 1: VS Code + Live Server**
- Instale a extensão **Live Server** (Five Server)
- Clique em "Go Live" no canto inferior direito

**Opção 2: Terminal**
```bash
npx serve .
# ou
python -m http.server 8080
```

Abra http://localhost:8080 (ou a porta indicada) no navegador.

---

## 📂 Estrutura do Projeto

```
blog-project/
│
├── .github/
│   └── workflows/
│       └── static.yml          # Pipeline de deploy automático (GitHub Pages)
│
├── Imagens/                    # Assets de imagem dos posts
│
├── css/
│   └── blog.css                # Estilos globais + design system + skeleton + glow
│
├── JS/
│   ├── data.js                 # Array unificado com todos os posts
│   ├── Blog.js                 # Listagem, filtros e featured post
│   └── post.js                 # Renderização do post individual + barra de progresso
│
├── index.html                  # Página principal
├── post.html                   # Página de post (dinâmica via URL param)
└── README.md
```

---

## 👨‍💻 Autor

Desenvolvido por **José Hermes**

[![GitHub](https://img.shields.io/badge/GitHub-Neto13k-181717?logo=github)](https://github.com/Neto13k)

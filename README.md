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
- ⭐ **Featured Post** — carrossel de posts em destaque no topo da página
- 🗂️ **Filtro por categoria** — HTML, JavaScript, Games, Dinheiro e Tecnologia (5 categorias)
- 👁️ **Contador de visualizações** — salvo por post via localStorage
- 🔗 **Roteamento por URL** — `post.html?id=N` carrega o post correto
- 📱 **Design responsivo** — suporte até 375px (celulares pequenos)
- 🎞️ **Animações de entrada** — cards com delay escalonado

---

## 📝 Posts

| # | Título | Categoria | Data |
|---|--------|-----------|------|
| 0 | HTML e suas funções | HTML | 05/07/2025 |
| 1 | JavaScript: aprendendo a linguagem | JavaScript | 06/07/2025 |
| 2 | Consoles mais vendidos de todos os tempos | Games | 07/07/2025 |
| 3 | Dinheiro com tarefas fáceis | Dinheiro | 09/07/2025 |
| 4 | GTA 6: Tudo que Sabemos Sobre o Jogo Mais Aguardado da Década | Games | 15/05/2026 |
| 5 | NVIDIA e a Corrida da IA: Como a Empresa Virou o Centro do Mundo Tech | Tecnologia | 18/05/2026 |
| 6 | React 19 e o Futuro do Desenvolvimento Frontend | JavaScript | 12/05/2026 |
| 7 | Forza Horizon 6: Tudo Sobre o Jogo no Japão | Games | 19/05/2026 |
| 8 | IA em 2026: GPT-5, Gemini Ultra 2 e a Guerra dos Modelos | Tecnologia | 14/05/2026 |
| 9 | Node.js em 2026: 10 Dicas para Escrever Código Profissional | JavaScript | 16/05/2026 |
| 10 | DeepSeek e o Novo Cenário da IA em 2025 | Tecnologia | 10/05/2025 |
| 11 | NVIDIA GeForce RTX 5000: A Nova Geração de GPUs Chegou | Tecnologia | 20/05/2026 |
| 12 | Game Pass em 2026: O Que Mudou e Vale a Pena? | Games | 21/05/2026 |
| 13 | Freelancer em 2026: Guia Completo para Começar Hoje | Dinheiro | 22/05/2026 |
| 14 | TypeScript em 2026: Principais Novidades e Melhores Práticas | JavaScript | 13/05/2026 |
| 15 | Bitcoin em 2026: De US$ 100 Mil a O Que Vem Depois | Dinheiro | 14/05/2026 |
| 16 | Web Components em 2026: HTML Nativo Finalmente Maduro | HTML | 14/05/2026 |
| 17 | Nintendo Switch 2 em 2026: O Que Sabemos Até Agora | Games | 11/05/2025 |
| 18 | Artemis: O Retorno à Lua e o Caminho Para Marte | Tecnologia | 23/05/2026 |

---

## 🛠️ Tecnologias

| Tecnologia | Uso |
|---|---|
| HTML5 | Estrutura semântica das páginas |
| CSS3 | Design system com variáveis customizadas e animações |
| JavaScript ES6+ | Renderização dinâmica, filtros, roteamento e scroll events |
| Google Fonts | Tipografia — Syne, JetBrains Mono |
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
│   └── blog.css                # Estilos antigos (deprecated)
│
├── JS/
│   ├── data.js                 # Array unificado com todos os posts + funções utilitárias
│   ├── Blog.js                 # Listagem, filtros e featured post
│   └── post.js                 # Renderização do post individual
│
├── index.html                  # Página principal
├── post.html                   # Página de post (dinâmica via URL param)
├── style.css                   # Arquivo de estilos principal
└── README.md
```

---

## 👨‍💻 Autor

Desenvolvido por **José Hermes**

[![GitHub](https://img.shields.io/badge/GitHub-Neto13k-181717?logo=github)](https://github.com/Neto13k)

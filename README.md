# 📰 TechJournal — Dev & Games Blog

<div align="center">

[![Deploy](https://img.shields.io/badge/Deploy-GitHub%20Pages-blue?logo=github)](https://neto13k.github.io/blog-project-/)
[![HTML](https://img.shields.io/badge/HTML-5-orange?logo=html5)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS-3-blue?logo=css3)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

**[🚀 Ver Demo ao Vivo](https://neto13k.github.io/blog-project-/)**

</div>

---

Blog estático sobre desenvolvimento web e games, com design dark terminal e UI profissional. Todo o conteúdo é renderizado dinamicamente via JavaScript puro — sem frameworks, sem build.

### ✨ Funcionalidades

- ⭐ **Featured Post** — primeiro post em destaque no topo da página
- 🗂️ **Filtro por categoria** — HTML, JavaScript, Games, Dinheiro
- 👁️ **Contador de visualizações** — salvo por post via localStorage
- 🔗 **Roteamento por URL** — `post.html?id=0` carrega o post correto
- 📱 **Design responsivo** — mobile, tablet e desktop
- 🎞️ **Animações de entrada** — cards com delay escalonado

### 🛠️ Tecnologias

| Tecnologia | Uso |
|---|---|
| HTML5 | Estrutura semântica das páginas |
| CSS3 | Design system com variáveis customizadas |
| JavaScript ES6+ | Renderização dinâmica, filtros e roteamento |
| Google Fonts | Tipografia — Syne, Space Mono, Inter |
| localStorage | Persistência do contador de visualizações |
| GitHub Pages | Hospedagem e deploy contínuo |

### ⚙️ Como executar localmente

Clone o repositório:

```bash
git clone https://github.com/Neto13k/blog-project-.git
cd blog-project-
```

> ⚠️ Abrir via `file://` pode causar erros de CORS. Prefira sempre um servidor local.

### 📂 Estrutura do Projeto

```
blog-project/
│
├── .github/
│   └── workflows/
│       └── static.yml      # Pipeline de deploy automático (GitHub Pages)
│
├── Imagens/                # Assets de imagem dos posts
│
├── css/
│   └── blog.css            # Estilos globais + design system
│
├── JS/
│   ├── Blog.js             # Listagem, filtros e featured post
│   └── post.js             # Renderização do post individual
│
├── index.html              # Página principal
├── post.html               # Página de post (dinâmica via URL param)
└── README.md
```

## 👨‍💻 Autor

Desenvolvido por **José Hermes**

[![GitHub](https://img.shields.io/badge/GitHub-Neto13k-181717?logo=github)](https://github.com/Neto13k)

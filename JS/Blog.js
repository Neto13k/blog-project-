// ──────────────────────────────────────────
// TechJournal — Blog.js
// ──────────────────────────────────────────

const posts = [
  {
    titulo: "HTML e suas funções",
    conteudo: "HTML (HyperText Markup Language) é a espinha dorsal da web. Aprenda como estruturar documentos, usar tags semânticas e construir páginas acessíveis do zero.",
    categoria: "HTML",
    data: "05/07/2025",
    imagem: "Imagens/HTML.png"
  },
  {
    titulo: "JavaScript: aprendendo a linguagem",
    conteudo: "Descubra as principais funcionalidades do JavaScript moderno — manipulação de DOM, async/await, Promises, módulos ES6 e muito mais.",
    categoria: "JavaScript",
    data: "06/07/2025",
    imagem: "Imagens/js.png"
  },
  {
    titulo: "Consoles mais vendidos de todos os tempos",
    conteudo: "Do PS2 ao Nintendo Switch — uma análise dos 5 consoles que bateram todos os recordes de vendas e marcaram gerações inteiras de jogadores.",
    categoria: "Games",
    data: "07/07/2025",
    imagem: "Imagens/Consoles.jpg"
  },
  {
    titulo: "Dinheiro com tarefas fáceis",
    conteudo: "Estratégias práticas para gerar renda extra com habilidades que você já possui. Plataformas, dicas e como começar ainda essa semana.",
    categoria: "Dinheiro",
    data: "09/07/2025",
    imagem: "Imagens/Dolar.jpg"
  }
];

// ── ELEMENTOS ─────────────────────────────
const container = document.getElementById("postcard");
const filterTabs = document.querySelectorAll(".filter-tab");
const postCountEl = document.getElementById("postCount");
const featuredEl = document.getElementById("featuredPost");
const headerDateEl = document.getElementById("headerDate");

// ── DATA NO HEADER ─────────────────────────
if (headerDateEl) {
  const now = new Date();
  headerDateEl.textContent = now.toLocaleDateString("pt-BR", {
    day: "2-digit", month: "short", year: "numeric"
  }).toUpperCase();
}

// ── UTILITÁRIOS ────────────────────────────
function getViews(index) {
  return parseInt(localStorage.getItem(`post_${index}_visualizacoes`) || "0");
}

function getCategoryColor(cat) {
  const map = {
    HTML:       "#f0a500",
    JavaScript: "#39d353",
    Games:      "#00d4ff",
    Dinheiro:   "#9b59b6",
  };
  return map[cat] || "#64748b";
}

// ── FEATURED CARD ──────────────────────────
function renderFeatured() {
  if (!featuredEl) return;
  const post = posts[0]; // Primeiro post = destaque
  const views = getViews(0);

  featuredEl.innerHTML = `
    <div class="featured-img-wrap">
      <img src="${post.imagem}" alt="${post.titulo}">
      <div class="featured-img-overlay"></div>
    </div>
    <div class="featured-body">
      <span class="featured-tag" style="color: ${getCategoryColor(post.categoria)}; border-color: ${getCategoryColor(post.categoria)}33; background: ${getCategoryColor(post.categoria)}18;">
        ${post.categoria}
      </span>
      <h2 class="featured-title">${post.titulo}</h2>
      <p class="featured-excerpt">${post.conteudo}</p>
      <div class="featured-meta">
        <span>📅 ${post.data}</span>
        <span class="meta-views">👁 ${views} views</span>
      </div>
      <a href="post.html?id=0" class="featured-read-btn">LER POST</a>
    </div>
  `;
}

// ── CARD INDIVIDUAL ────────────────────────
function criarCard(post, index) {
  const card = document.createElement("div");
  card.classList.add("card");
  const views = getViews(index);
  const catColor = getCategoryColor(post.categoria);

  card.innerHTML = `
    <div class="card-img-wrap">
      <img src="${post.imagem}" alt="${post.titulo}" loading="lazy">
      <div class="card-img-overlay"></div>
      <span class="card-category-badge" style="color: ${catColor};">${post.categoria}</span>
    </div>
    <div class="card-body">
      <h2 class="card-title">
        <a href="post.html?id=${index}">${post.titulo}</a>
      </h2>
      <p class="card-excerpt">${post.conteudo}</p>
      <div class="card-footer">
        <div class="card-meta">
          <span>📅 ${post.data}</span>
          <span class="card-views">👁 ${views} views</span>
        </div>
        <a href="post.html?id=${index}" class="card-read-btn">LER →</a>
      </div>
    </div>
  `;

  return card;
}

// ── RENDERIZAR GRID ────────────────────────
function renderizarPosts(filtro = "todas") {
  container.innerHTML = "";

  const filtrados = posts
    .map((post, index) => ({ post, index }))
    .filter(({ post }) => filtro === "todas" || post.categoria === filtro);

  if (filtrados.length === 0) {
    container.innerHTML = `<div class="empty-state">Nenhum post encontrado nessa categoria.</div>`;
    if (postCountEl) postCountEl.textContent = "0 posts";
    return;
  }

  filtrados.forEach(({ post, index }, i) => {
    const card = criarCard(post, index);
    card.style.animationDelay = `${i * 0.06}s`;
    container.appendChild(card);
  });

  if (postCountEl) {
    postCountEl.textContent = `${filtrados.length} post${filtrados.length !== 1 ? "s" : ""}`;
  }
}

// ── FILTRO ─────────────────────────────────
filterTabs.forEach(tab => {
  tab.addEventListener("click", () => {
    filterTabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    renderizarPosts(tab.dataset.cat);
  });
});

// ── INIT ───────────────────────────────────
renderFeatured();
renderizarPosts();

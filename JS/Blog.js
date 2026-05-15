// ──────────────────────────────────────────
// TechJournal — Blog.js
// Importa posts de JS/data.js
// ──────────────────────────────────────────

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

// ── FEATURED CARD ──────────────────────────
// ── FEATURED CARD ──────────────────────────
let featuredIndex = 0;
let featuredInterval = null;

function renderFeatured(index) {
  if (!featuredEl) return;
  const post = posts[index];
  const views = getViews(index);

  featuredEl.classList.remove("featured-anim");
  void featuredEl.offsetWidth; // força reflow para reiniciar animação
  featuredEl.classList.add("featured-anim");

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
      <a href="post.html?id=${index}" class="featured-read-btn">LER POST</a>
    </div>
    <div class="featured-controls">
      <button class="featured-prev" id="featuredPrev">&#8592;</button>
      <div class="featured-dots">
        ${posts.map((_, i) => `<span class="featured-dot ${i === index ? 'active' : ''}" data-i="${i}"></span>`).join("")}
      </div>
      <button class="featured-next" id="featuredNext">&#8594;</button>
    </div>
  `;

  // Botão anterior
  document.getElementById("featuredPrev").addEventListener("click", () => {
    clearInterval(featuredInterval);
    featuredIndex = (featuredIndex - 1 + posts.length) % posts.length;
    renderFeatured(featuredIndex);
    startFeaturedInterval();
  });

  // Botão próximo
  document.getElementById("featuredNext").addEventListener("click", () => {
    clearInterval(featuredInterval);
    featuredIndex = (featuredIndex + 1) % posts.length;
    renderFeatured(featuredIndex);
    startFeaturedInterval();
  });

  // Dots clicáveis
  document.querySelectorAll(".featured-dot").forEach(dot => {
    dot.addEventListener("click", () => {
      clearInterval(featuredInterval);
      featuredIndex = parseInt(dot.dataset.i);
      renderFeatured(featuredIndex);
      startFeaturedInterval();
    });
  });
}

function startFeaturedInterval() {
  featuredInterval = setInterval(() => {
    featuredIndex = (featuredIndex + 1) % posts.length;
    renderFeatured(featuredIndex);
  }, 5000); // troca a cada 5 segundos
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
    .filter(({ post, index }) => index > 0 && (filtro === "todas" || post.categoria === filtro));

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
renderFeatured(featuredIndex);
startFeaturedInterval();
renderizarPosts();

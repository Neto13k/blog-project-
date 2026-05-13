// ──────────────────────────────────────────
// TechJournal — post.js
// Importa posts de JS/data.js
// ──────────────────────────────────────────

// ── URL PARAMS ─────────────────────────────
const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"));

// ── VIEWS ──────────────────────────────────
const viewKey = `post_${id}_visualizacoes`;
let views = parseInt(localStorage.getItem(viewKey) || "0");
views++;
localStorage.setItem(viewKey, views);

// ── READING PROGRESS BAR ───────────────────
function updateReadingProgress() {
  const article = document.querySelector('.post-article');
  if (!article) return;

  const articleTop = article.offsetTop;
  const articleHeight = article.offsetHeight;
  const windowHeight = window.innerHeight;
  
  let scrolled = window.scrollY - articleTop + windowHeight / 2;
  let progress = (scrolled / articleHeight) * 100;
  progress = Math.max(0, Math.min(100, progress));
  
  const progressBar = document.getElementById('readingProgress');
  if (progressBar) {
    progressBar.style.width = progress + '%';
  }
}

window.addEventListener('scroll', updateReadingProgress);

// ── RENDER ─────────────────────────────────
const container = document.getElementById("Postpost");
const post = posts[id];

if (post) {
  document.title = `TechJournal — ${post.titulo}`;

  // Atualiza views no topbar
  const topbarViews = document.getElementById("topbarViews");
  if (topbarViews) topbarViews.textContent = `👁 ${views} views`;

  const catColor = getCategoryColor(post.categoria);

  // Usa conteudoCompleto se existir, senão usa conteudo
  const conteudo = post.conteudoCompleto || post.conteudo;

  container.innerHTML = `
    <article class="post-article">
      <header class="post-header">
        <span class="post-tag" style="color:${catColor}; border-color:${catColor}44; background:${catColor}15;">
          ${post.categoria}
        </span>
        <h1 class="post-title">${post.titulo}</h1>
        <div class="post-meta-bar">
          <span>📅 ${post.data}</span>
          <span class="views">👁 ${views} visualizações</span>
          <span>✍ TechJournal</span>
        </div>
      </header>

      <img src="${post.imagem}" alt="${post.titulo}" class="post-hero-img">

      <div class="post-body">
        ${conteudo}
      </div>

      <div class="post-end">
        <div class="post-end-meta">// FIM DO POST — ${post.categoria.toUpperCase()}</div>
        <a href="index.html" class="post-back-btn">← VOLTAR AO BLOG</a>
      </div>
    </article>
  `;

  // Inicializa a barra de progresso
  setTimeout(updateReadingProgress, 100);
} else {
  document.title = "TechJournal — Post não encontrado";
  container.innerHTML = `
    <div style="text-align:center; padding: 4rem 2rem; font-family: 'Space Mono', monospace; color: #64748b;">
      <div style="color:#00d4ff; margin-bottom: 1rem; opacity:0.5;">// 404 — POST_NOT_FOUND</div>
      <p>O post que você procura não existe ou foi removido.</p>
      <a href="index.html" style="display:inline-block; margin-top:2rem; color:#00d4ff; text-decoration:none; border:1px solid #00d4ff44; padding:0.6rem 1.2rem; border-radius:6px;">← Voltar ao blog</a>
    </div>
  `;
}

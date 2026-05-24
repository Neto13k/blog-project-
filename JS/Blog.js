// TechJournal — Blog.js

// ELEMENTOS
const container = document.getElementById("postcard");
const filterTabs = document.querySelectorAll("[data-cat]");
const postCountEl = document.getElementById("postCount");
const featuredEl = document.getElementById("featuredPost");
const headerDateEl = document.getElementById("headerDate");

// DATA NO HEADER
if (headerDateEl) {
  const now = new Date();
  headerDateEl.textContent = now.toLocaleDateString("pt-BR", {
    day: "2-digit", month: "short", year: "numeric"
  }).toUpperCase();
}

// FEATURED CARD
let featuredIndex = 0;
let featuredInterval = null;

function renderFeatured(index) {
  if (!featuredEl) return;
  const post = posts[index];
  const views = getViews(index);

  featuredEl.innerHTML = `
    <img src="${post.imagem}" alt="${post.titulo}">
    <div>
      <span>${post.categoria}</span>
      <h2>${post.titulo}</h2>
      <p>${post.conteudo}</p>
      <div>
        <span>📅 ${post.data}</span>
        <span>👁 ${views} views</span>
      </div>
      <a href="post.html?id=${index}">LER POST</a>
    </div>
    <div>
      <button id="featuredPrev">&#8592;</button>
      <div>
        ${posts.map((_, i) => `<span data-i="${i}">${i === index ? "[•]" : "[ ]"}</span>`).join(" ")}
      </div>
      <button id="featuredNext">&#8594;</button>
    </div>
  `;

  document.getElementById("featuredPrev").addEventListener("click", () => {
    clearInterval(featuredInterval);
    featuredIndex = (featuredIndex - 1 + posts.length) % posts.length;
    renderFeatured(featuredIndex);
    startFeaturedInterval();
  });

  document.getElementById("featuredNext").addEventListener("click", () => {
    clearInterval(featuredInterval);
    featuredIndex = (featuredIndex + 1) % posts.length;
    renderFeatured(featuredIndex);
    startFeaturedInterval();
  });

  document.querySelectorAll("[data-i]").forEach(dot => {
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
  }, 5000);
}

// CARD INDIVIDUAL
function criarCard(post, index) {
  const card = document.createElement("div");
  const views = getViews(index);

  card.innerHTML = `
    <img src="${post.imagem}" alt="${post.titulo}" loading="lazy">
    <div>
      <span>${post.categoria}</span>
      <h2><a href="post.html?id=${index}">${post.titulo}</a></h2>
      <p>${post.conteudo}</p>
      <div>
        <span>📅 ${post.data}</span>
        <span>👁 ${views} views</span>
      </div>
      <a href="post.html?id=${index}">LER →</a>
    </div>
  `;

  return card;
}

// RENDERIZAR GRID
function renderizarPosts(filtro = "todas") {
  container.innerHTML = "";

  const filtrados = posts
    .map((post, index) => ({ post, index }))
    .filter(({ post, index }) => index > 0 && (filtro === "todas" || post.categoria === filtro));

  if (filtrados.length === 0) {
    container.innerHTML = `<p>Nenhum post encontrado nessa categoria.</p>`;
    if (postCountEl) postCountEl.textContent = "0 posts";
    return;
  }

  filtrados.forEach(({ post, index }) => {
    container.appendChild(criarCard(post, index));
  });

  if (postCountEl) {
    postCountEl.textContent = `${filtrados.length} post${filtrados.length !== 1 ? "s" : ""}`;
  }
}

// FILTRO
filterTabs.forEach(tab => {
  tab.addEventListener("click", () => {
    filterTabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    renderizarPosts(tab.dataset.cat);
  });
});

// INIT — marca o primeiro botão como active
if (filterTabs[0]) filterTabs[0].classList.add("active");

// INIT
renderFeatured(featuredIndex);
startFeaturedInterval();
renderizarPosts();

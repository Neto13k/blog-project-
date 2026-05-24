// TechJournal — post.js

// URL PARAMS
const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"));

// VIEWS
const viewKey = `post_${id}_visualizacoes`;
let views = parseInt(localStorage.getItem(viewKey) || "0");
views++;
localStorage.setItem(viewKey, views);

// RENDER
const container = document.getElementById("Postpost");
const post = posts[id];

if (post) {
  document.title = `TechJournal — ${post.titulo}`;

  const topbarViews = document.getElementById("topbarViews");
  if (topbarViews) topbarViews.textContent = `👁 ${views} views`;

  const conteudo = post.conteudoCompleto || post.conteudo;

  container.innerHTML = `
    <article>
      <header>
        <span>${post.categoria}</span>
        <h1>${post.titulo}</h1>
        <div>
          <span>📅 ${post.data}</span>
          <span>👁 ${views} visualizações</span>
          <span>✍ TechJournal</span>
        </div>
      </header>

      <img src="${post.imagem}" alt="${post.titulo}">

      <div>
        ${conteudo}
      </div>

      <div>
        <a href="index.html">← VOLTAR AO BLOG</a>
      </div>
    </article>
  `;
} else {
  document.title = "TechJournal — Post não encontrado";
  container.innerHTML = `
    <p>O post que você procura não existe ou foi removido.</p>
    <a href="index.html">← Voltar ao blog</a>
  `;
}

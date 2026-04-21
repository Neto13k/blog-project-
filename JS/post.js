// ──────────────────────────────────────────
// TechJournal — post.js
// ──────────────────────────────────────────

const posts = [
  {
    titulo: "HTML: A Estrutura da Web",
    conteudo: `
      <p>O <strong>HTML (HyperText Markup Language)</strong> é a linguagem de marcação fundamental da web. Ele é responsável por estruturar o conteúdo das páginas, definindo títulos, parágrafos, listas, links, imagens, tabelas, formulários e muito mais.</p>

      <p>Criado nos primórdios da internet, o HTML evoluiu ao longo dos anos e está em sua versão mais moderna: o <strong>HTML5</strong>. Essa versão trouxe novos elementos e recursos que facilitaram a criação de conteúdos multimídia e páginas mais semânticas.</p>

      <p>Diferente de linguagens de programação, o HTML não possui lógica ou comportamentos — ele apenas estrutura o conteúdo. Para estilo, usamos CSS; para interação, JavaScript.</p>

      <h3>Estrutura Básica</h3>
      <ul>
        <li><strong>&lt;html&gt;</strong> — Define o início e o fim do documento HTML</li>
        <li><strong>&lt;head&gt;</strong> — Metadados, links para CSS e título</li>
        <li><strong>&lt;title&gt;</strong> — Texto exibido na aba do navegador</li>
        <li><strong>&lt;body&gt;</strong> — Todo o conteúdo visível da página</li>
        <li><strong>&lt;h1&gt; até &lt;h6&gt;</strong> — Títulos hierárquicos</li>
        <li><strong>&lt;p&gt;</strong> — Parágrafos de texto</li>
        <li><strong>&lt;a&gt;</strong> — Links clicáveis (âncoras)</li>
        <li><strong>&lt;img&gt;</strong> — Imagens na página</li>
        <li><strong>&lt;ul&gt;, &lt;ol&gt;, &lt;li&gt;</strong> — Listas ordenadas e não ordenadas</li>
        <li><strong>&lt;form&gt;</strong> — Formulários interativos</li>
      </ul>

      <h3>Tags Semânticas do HTML5</h3>
      <ul>
        <li><strong>&lt;header&gt;</strong> — Cabeçalho da página ou seção</li>
        <li><strong>&lt;nav&gt;</strong> — Área de navegação principal</li>
        <li><strong>&lt;section&gt;</strong> — Seção temática de conteúdo</li>
        <li><strong>&lt;article&gt;</strong> — Conteúdo independente e reutilizável</li>
        <li><strong>&lt;footer&gt;</strong> — Rodapé da página</li>
        <li><strong>&lt;aside&gt;</strong> — Conteúdo lateral complementar</li>
        <li><strong>&lt;main&gt;</strong> — Conteúdo principal da página</li>
      </ul>

      <p>Ao escrever HTML bem estruturado e semântico, você garante que mecanismos de busca, leitores de tela e navegadores compreendam melhor seu conteúdo. Dominar o HTML é o primeiro passo para qualquer desenvolvedor web.</p>
    `,
    data: "05/07/2025",
    imagem: "Imagens/HTML.png",
    categoria: "HTML",
  },
  {
    titulo: "JavaScript: Principais Funções",
    conteudo: `
      <p>O <strong>JavaScript</strong> é uma das linguagens de programação mais importantes do mundo. Criado em 1995, surgiu para tornar as páginas web interativas. Hoje é impossível falar de front-end sem mencionar JavaScript.</p>

      <p>Executado no navegador (client-side), mas também no servidor com <strong>Node.js</strong>, o JS é extremamente versátil — vai de pequenos efeitos visuais a aplicações web completas.</p>

      <h3>Principais Funcionalidades</h3>
      <ul>
        <li><strong>Manipulação do DOM</strong> — Acessar e alterar elementos HTML/CSS em tempo real</li>
        <li><strong>Controle de eventos</strong> — Reagir a cliques, teclas, rolagem e formulários</li>
        <li><strong>Validação de formulários</strong> — Verificar dados antes de enviar ao servidor</li>
        <li><strong>AJAX / Fetch API</strong> — Buscar dados externos sem recarregar a página</li>
        <li><strong>Animações e efeitos</strong> — Transições, sliders e interações visuais</li>
        <li><strong>Programação assíncrona</strong> — Async/await, Promises para tarefas demoradas</li>
        <li><strong>Armazenamento local</strong> — localStorage e sessionStorage para persistência</li>
        <li><strong>Criação de jogos</strong> — Canvas API com lógica interativa</li>
        <li><strong>Integração com APIs</strong> — Consumir e exibir dados externos (REST, GraphQL)</li>
        <li><strong>Frameworks modernos</strong> — Base do React, Angular, Vue e Svelte</li>
        <li><strong>Módulos ES6+</strong> — import/export para código organizado e reutilizável</li>
        <li><strong>Manipulação de mídia</strong> — Controlar áudio, vídeo e streams</li>
        <li><strong>WebSockets</strong> — Comunicação em tempo real com servidores</li>
        <li><strong>Service Workers</strong> — PWAs e funcionamento offline</li>
      </ul>

      <p>JavaScript é uma linguagem versátil, poderosa e indispensável. Quem domina JS moderno tem acesso a praticamente todo o ecossistema de desenvolvimento web atual.</p>
    `,
    data: "06/07/2025",
    imagem: "Imagens/js.png",
    categoria: "JavaScript",
  },
  {
    titulo: "Os 5 Consoles Mais Vendidos da História",
    conteudo: `
      <p>O mundo dos videogames já passou por inúmeras gerações, mas alguns consoles conquistaram uma legião de fãs e bateram recordes históricos. Veja os <strong>cinco consoles mais vendidos de todos os tempos</strong>:</p>

      <h3>1. PlayStation 2 — 155 milhões de unidades</h3>
      <img src="Imagens/PS2.jpg" alt="PlayStation 2">
      <p>Lançado em 2000, o PS2 é o campeão absoluto. Com uma biblioteca gigantesca, retrocompatibilidade com PS1, player de DVD e clássicos como <em>GTA San Andreas</em>, <em>God of War</em> e <em>Shadow of the Colossus</em>. No Brasil, foi uma febre nacional.</p>

      <h3>2. Nintendo DS — 154 milhões de unidades</h3>
      <img src="Imagens/Nintendo DS.png" alt="Nintendo DS">
      <p>O portátil de tela dupla que conquistou todas as idades. Lançado em 2004 com tela touchscreen e microfone, trouxe jogos icônicos como <em>Pokémon</em>, <em>New Super Mario Bros.</em> e <em>Brain Age</em>.</p>

      <h3>3. Nintendo Switch — 140+ milhões (em crescimento)</h3>
      <img src="Imagens/nintendo switch.jpg" alt="Nintendo Switch">
      <p>Lançado em 2017, o Switch reinventou o conceito de console com sua proposta híbrida. Zelda, Animal Crossing e Mario Kart garantiram seu sucesso contínuo até 2025.</p>

      <h3>4. Game Boy / Game Boy Color — 118 milhões</h3>
      <img src="Imagens/Gameboy.jpg" alt="Game Boy">
      <p>O clássico dos anos 90 que levou os games a qualquer lugar. <em>Tetris</em>, <em>Pokémon Red/Blue</em> e pilhas que duravam dias — uma revolução portátil.</p>

      <h3>5. PlayStation 4 — 117 milhões de unidades</h3>
      <img src="Imagens/PS4.jpg" alt="PlayStation 4">
      <p>Lançado em 2013, o PS4 marcou a geração com exclusivos como <em>The Last of Us Part II</em>, <em>God of War (2018)</em> e <em>Spider-Man</em>. Sólido e onipresente.</p>

      <p><strong>Menções honrosas:</strong> Nintendo Wii (101M), Xbox 360 e PlayStation 3 (~80M cada), e o PS5 com mais de 60M e ainda em alta.</p>
    `,
    data: "07/07/2025",
    imagem: "Imagens/Consoles.jpg",
    categoria: "Games",
  },
  {
    titulo: "Dinheiro com Tarefas Fáceis",
    conteudo: `
      <p>Gerar renda extra nunca foi tão acessível. Com habilidades básicas e algumas horas por semana, é possível criar fontes de receita consistentes. Veja por onde começar:</p>

      <h3>Trabalhos Remotos e Freelance</h3>
      <ul>
        <li><strong>Design gráfico</strong> — Canva, Figma e plataformas como 99designs e Workana</li>
        <li><strong>Redação e copywriting</strong> — Criação de textos para blogs, redes sociais e newsletters</li>
        <li><strong>Tradução</strong> — Documentos, legendas e localizações de software</li>
        <li><strong>Suporte online</strong> — Atendimento remoto para pequenas empresas</li>
      </ul>

      <h3>Tarefas Digitais Simples</h3>
      <ul>
        <li><strong>Testes de aplicativos</strong> — Plataformas como UserTesting pagam por feedbacks</li>
        <li><strong>Pesquisas online</strong> — Swagbucks, Toluna e similares pagam por respostas</li>
        <li><strong>Digitação de dados</strong> — Entrada de informações em planilhas e sistemas</li>
        <li><strong>Moderação de conteúdo</strong> — Avaliação de posts em redes sociais</li>
      </ul>

      <h3>Vendas e Comissionamento</h3>
      <ul>
        <li><strong>Marketing de afiliados</strong> — Divulgar produtos e ganhar comissão por venda</li>
        <li><strong>Revenda</strong> — Comprar produtos e revender com margem no OLX ou Shopee</li>
        <li><strong>Produtos digitais</strong> — E-books, templates e cursos na Hotmart ou Gumroad</li>
      </ul>

      <p><strong>Dica de ouro:</strong> Foque em uma ou duas opções que se encaixem na sua rotina. Consistência é mais importante que quantidade. Comece pequeno, valide, e escale.</p>
    `,
    data: "09/07/2025",
    imagem: "Imagens/Dolar.jpg",
    categoria: "Dinheiro",
  }
];

// ── URL PARAMS ─────────────────────────────
const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"));

// ── VIEWS ──────────────────────────────────
const viewKey = `post_${id}_visualizacoes`;
let views = parseInt(localStorage.getItem(viewKey) || "0");
views++;
localStorage.setItem(viewKey, views);

// ── RENDER ─────────────────────────────────
const container = document.getElementById("Postpost");
const post = posts[id];

function getCategoryColor(cat) {
  const map = {
    HTML:       "#f0a500",
    JavaScript: "#39d353",
    Games:      "#00d4ff",
    Dinheiro:   "#9b59b6",
  };
  return map[cat] || "#64748b";
}

if (post) {
  document.title = `TechJournal — ${post.titulo}`;

  // Atualiza views no topbar
  const topbarViews = document.getElementById("topbarViews");
  if (topbarViews) topbarViews.textContent = `👁 ${views} views`;

  const catColor = getCategoryColor(post.categoria);

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
        ${post.conteudo}
      </div>

      <div class="post-end">
        <div class="post-end-meta">// FIM DO POST — ${post.categoria.toUpperCase()}</div>
        <a href="index.html" class="post-back-btn">← VOLTAR AO BLOG</a>
      </div>
    </article>
  `;
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

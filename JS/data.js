// ──────────────────────────────────────────
// TechJournal — data.js (Unified Posts)
// ──────────────────────────────────────────

const posts = [
  // ── POST 0 (FEATURED) ──────────────────
  {
    titulo: "HTML e suas funções",
    conteudo: "HTML (HyperText Markup Language) é a espinha dorsal da web. Aprenda como estruturar documentos, usar tags semânticas e construir páginas acessíveis do zero.",
    categoria: "HTML",
    data: "05/07/2025",
    imagem: "Imagens/HTML.png",
    conteudoCompleto: `
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
    `
  },
  // ── POST 1 ────────────────────────────
  {
    titulo: "JavaScript: aprendendo a linguagem",
    conteudo: "Descubra as principais funcionalidades do JavaScript moderno — manipulação de DOM, async/await, Promises, módulos ES6 e muito mais.",
    categoria: "JavaScript",
    data: "06/07/2025",
    imagem: "Imagens/js.png",
    conteudoCompleto: `
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
    `
  },
  // ── POST 2 ────────────────────────────
  {
    titulo: "Consoles mais vendidos de todos os tempos",
    conteudo: "Do PS2 ao Nintendo Switch — uma análise dos 5 consoles que bateram todos os recordes de vendas e marcaram gerações inteiras de jogadores.",
    categoria: "Games",
    data: "07/07/2025",
    imagem: "Imagens/Consoles.jpg",
    conteudoCompleto: `
      <p>O mundo dos videogames já passou por inúmeras gerações, mas alguns consoles conquistaram uma legião de fãs e bateram recordes históricos. Veja os <strong>cinco consoles mais vendidos de todos os tempos</strong>:</p>

      <h3>1. PlayStation 2 — 155 milhões de unidades</h3>
      <p>Lançado em 2000, o PS2 é o campeão absoluto. Com uma biblioteca gigantesca, retrocompatibilidade com PS1, player de DVD e clássicos como <em>GTA San Andreas</em>, <em>God of War</em> e <em>Shadow of the Colossus</em>. No Brasil, foi uma febre nacional.</p>

      <h3>2. Nintendo DS — 154 milhões de unidades</h3>
      <p>O portátil de tela dupla que conquistou todas as idades. Lançado em 2004 com tela touchscreen e microfone, trouxe jogos icônicos como <em>Pokémon</em>, <em>New Super Mario Bros.</em> e <em>Brain Age</em>.</p>

      <h3>3. Nintendo Switch — 140+ milhões (em crescimento)</h3>
      <p>Lançado em 2017, o Switch reinventou o conceito de console com sua proposta híbrida. Zelda, Animal Crossing e Mario Kart garantiram seu sucesso contínuo até 2025.</p>

      <h3>4. Game Boy / Game Boy Color — 118 milhões</h3>
      <p>O clássico dos anos 90 que levou os games a qualquer lugar. <em>Tetris</em>, <em>Pokémon Red/Blue</em> e pilhas que duravam dias — uma revolução portátil.</p>

      <h3>5. PlayStation 4 — 117 milhões de unidades</h3>
      <p>Lançado em 2013, o PS4 marcou a geração com exclusivos como <em>The Last of Us Part II</em>, <em>God of War (2018)</em> e <em>Spider-Man</em>. Sólido e onipresente.</p>

      <p><strong>Menções honrosas:</strong> Nintendo Wii (101M), Xbox 360 e PlayStation 3 (~80M cada), e o PS5 com mais de 60M e ainda em alta.</p>
    `
  },
  // ── POST 3 ────────────────────────────
  {
    titulo: "Dinheiro com tarefas fáceis",
    conteudo: "Estratégias práticas para gerar renda extra com habilidades que você já possui. Plataformas, dicas e como começar ainda essa semana.",
    categoria: "Dinheiro",
    data: "09/07/2025",
    imagem: "Imagens/Dolar.jpg",
    conteudoCompleto: `
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
    `
  },
  // ── POST 4 (NOVO) ─────────────────────
  {
    titulo: "DeepSeek e o Novo Cenário da IA em 2025",
    conteudo: "A startup chinesa DeepSeek lançou modelos de IA que rivalizam com GPT-4 a uma fração do custo, remodelando o mercado global de inteligência artificial e acendendo debates sobre soberania tecnológica.",
    categoria: "Tecnologia",
    data: "10/05/2025",
    imagem: "./Imagens/DeepSeek.avif",
    conteudoCompleto: `
      <p>Em janeiro de 2025, a startup chinesa <strong>DeepSeek</strong> chocou o mundo da tecnologia ao lançar seu modelo de IA <strong>R1</strong>, capaz de rivalizar com o GPT-4 da OpenAI em várias tarefas, mas com um diferencial revolucionário: o custo de inferência é apenas uma fração do que os modelos americanos cobram.</p>

      <p>O impacto foi imediato no mercado de ações. Empresas de IA americana como NVIDIA, OpenAI e Anthropic viram suas avaliações caírem enquanto a comunidade de tecnologia debatia as implicações geopolíticas. <strong>Como uma startup chinesa conseguiu alcançar esse nível?</strong> A resposta envolve eficiência extrema de código, otimizações de hardware e uma abordagem diferente ao treinamento de modelos.</p>

      <h3>O Que Torna o DeepSeek R1 Especial?</h3>
      <ul>
        <li><strong>Custo 90% menor</strong> — Inferência por token significativamente mais barata que GPT-4</li>
        <li><strong>Open-source</strong> — Código e pesos disponíveis para download e deploy local</li>
        <li><strong>Raciocínio longado</strong> — Similar ao o1 da OpenAI, capaz de resolver problemas complexos passo-a-passo</li>
        <li><strong>Suporte multilíngue</strong> — Desempenho robusto em português, chinês e outras línguas</li>
      </ul>

      <h3>O Debate: Open-Source vs. Closed-Source</h3>
      <p>A liberação do DeepSeek em open-source reavivou discussões sobre segurança, controle e acesso democratizado. Desenvolvedores brasileiros agora podem executar modelos de IA de ponta localmente, sem depender de APIs pagas. Mas qual é o trade-off entre liberdade e segurança?</p>

      <h3>O Que Isso Significa Para Desenvolvedores Brasileiros</h3>
      <p>A chegada do DeepSeek abre portas: projetos de IA são agora mais acessíveis financeiramente, plataformas locais podem rodar modelos avançados, e o ecossistema de startups brasileiras ganha uma ferramenta poderosa. Ao mesmo tempo, reforça a urgência de investimento em pesquisa e tecnologia nacional.</p>

      <p><strong>Conclusão:</strong> DeepSeek não é apenas um modelo; é um desafio ao status quo. 2025 promete ser o ano em que IA deixa de ser privilégio de gigantes americanas e se torna verdadeiramente global.</p>
    `
  },
  // ── POST 6 (NOVO) ─────────────────────
  {
    titulo: "TypeScript 5.5 e as Novidades que Todo Dev Precisa Conhecer",
    conteudo: "O TypeScript 5.5 chegou com inferência de tipo para closures, melhorias no isolatedDeclarations e suporte nativo a expressões regulares tipadas — tornando o código mais seguro e a experiência de dev ainda melhor.",
    categoria: "JavaScript",
    data: "12/05/2025",
    imagem: "https://images.unsplash.com/photo-1743090660977-babf07732432?w=800&h=450&fit=crop&auto=format",
    conteudoCompleto: `
      <p>O <strong>TypeScript 5.5</strong> foi lançado em maio de 2025 com melhorias significativas em inferência de tipos, performance e ergonomia de desenvolvedor. Se você trabalha com React, Next.js ou Node.js, as novidades vão simplificar seu fluxo de trabalho.</p>

      <h3>Principais Novidades do TS 5.5</h3>
      
      <h3>1. Inferência de Tipo para Closures</h3>
      <p>Antes:</p>
      <ul>
        <li>Closures exigiam anotações manuais para tipos de parâmetro</li>
        <li>Erros de tipo só apareciam em tempo de compilação</li>
      </ul>
      <p>Agora:</p>
      <pre><code>// TypeScript 5.5 infere automaticamente
const createAdder = (x: number) => {
  return (y) => x + y; // y é inferido como number
};</code></pre>

      <h3>2. Inferred Type Predicates</h3>
      <p>Type predicates agora são inferidos automaticamente, reduzindo boilerplate:</p>
      <pre><code>// Sem anotação explícita de retorno 'is'
function isString(value: unknown) {
  return typeof value === 'string';
}
// TypeScript entende que é um type predicate automaticamente</code></pre>

      <h3>3. Isolated Declarations</h3>
      <p>A flag <code>isolatedDeclarations: true</code> garante que cada arquivo possa ser analisado independentemente, acelerando compilação em projetos grandes.</p>

      <h3>4. Regex Tipado Nativo</h3>
      <pre><code>// Novo suporte a regex.test() com type guard
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const email = "user@example.com";

if (emailRegex.test(email)) {
  // email é inferido como validado aqui
}</code></pre>

      <h3>Por Que Isso Importa Para Seus Projetos</h3>
      <ul>
        <li><strong>React/Next.js:</strong> Melhor type safety em hooks customizados e context</li>
        <li><strong>Node.js:</strong> Streams, eventos e callbacks com tipos mais precisos</li>
        <li><strong>Performance:</strong> Compilação mais rápida em monorepos</li>
        <li><strong>Ergonomia:</strong> Menos anotações manuais = código mais limpo</li>
      </ul>

      <h3>Como Atualizar</h3>
      <pre><code>npm install -D typescript@latest
// Ou com pnpm
pnpm add -D typescript@latest</code></pre>

      <p><strong>Aviso de compatibilidade:</strong> TypeScript 5.5 requer Node.js 16.3+ (ou 18+ recomendado).</p>

      <p><strong>Resumo:</strong> TypeScript continua evoluindo para tornar o desenvolvimento seguro, rápido e agradável. Atualize assim que possível.</p>
    `
  },
  // ── POST 7 (NOVO) ─────────────────────
  {
    titulo: "Bitcoin a US$100 Mil: Entenda o que Aconteceu e o que Vem a Seguir",
    conteudo: "O Bitcoin ultrapassou a barreira dos US$100.000 no fim de 2024 e segue volátil em 2025. Entenda os fatores por trás da alta histórica, o papel dos ETFs spot, o halving e o que analistas projetam para o restante do ano.",
    categoria: "Dinheiro",
    data: "13/05/2025",
    imagem: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=800&h=450&fit=crop&auto=format",
    conteudoCompleto: `
      <p>Em dezembro de 2024, o Bitcoin alcançou um marco histórico: <strong>ultrapassou US$100 mil</strong> pela primeira vez. Continuamos em 2025 e o ativo permanece volátil, oscilando entre US$90 e US$110 mil. <strong>Como chegamos aqui? E para onde vai?</strong></p>

      <h3>Cronologia da Alta de 2024–2025</h3>
      <ul>
        <li><strong>Janeiro 2024:</strong> Bitcoin em US$50 mil</li>
        <li><strong>Julho 2024:</strong> Halving reduz recompensa por bloco de 6.5 para 3.125 BTC</li>
        <li><strong>Setembro 2024:</strong> Aprovação esperada dos ETFs spot nos EUA</li>
        <li><strong>Dezembro 2024:</strong> Bitcoin atinge US$108 mil com aprovação dos ETFs confirmada</li>
        <li><strong>Maio 2025:</strong> Volatilidade continua em torno de US$100 mil</li>
      </ul>

      <h3>O Papel Crítico dos ETFs Spot</h3>
      <p>Os <strong>Bitcoin Spot ETFs</strong> aprovados pela SEC em janeiro de 2024 revolucionaram o acesso: investidores institucionais e pessoas comuns podem agora comprar BTC via corretoras tradicionais, sem tocar em exchanges cripto. <strong>Impacto:</strong> entrada de bilhões em capital institucional.</p>

      <h3>O Halving de Abril de 2024</h3>
      <p>Ocorre a cada 4 anos, reduzindo as recompensas de mineração pela metade. Isso diminui a inflação do Bitcoin e historicamente precede altas de preço. O padrão: halving → escassez → demanda → alta de preço.</p>

      <h3>Projeções Para 2025</h3>
      <p><strong>Cenário otimista:</strong> US$150–200 mil (pressão institucional, aprovação de mais ETFs internacionais).</p>
      <p><strong>Cenário realista:</strong> US$80–120 mil (consolidação, ciclos de ganhos e perdas).</p>
      <p><strong>Cenário pessimista:</strong> US$40–60 mil (recessão econômica, regulação restritiva).</p>

      <h3>Como Brasileiros Podem Acessar Cripto com Segurança</h3>
      <ul>
        <li><strong>Exchanges reguladas:</strong> Coinbase, Kraken (com suporte a BRL), Mercado Bitcoin</li>
        <li><strong>Impostos:</strong> Ganhos em cripto são tributáveis. Mantenha registros de compra/venda</li>
        <li><strong>Segurança:</strong> Use hardware wallets (Ledger, Trezor) para valores acima de US$1k</li>
        <li><strong>Diversificação:</strong> Cripto deve representar &lt;5–10% da carteira total</li>
      </ul>

      <p><strong>Dica final:</strong> Não tente prever o preço exato. Bitcoin é especulativo e volátil. Invista apenas o que pode perder e mantenha visão de longo prazo (5+ anos).</p>
    `
  },
  // ── POST 8 (NOVO) ─────────────────────
  {
    titulo: "Web Components em 2025: HTML Nativo Finalmente Maduro",
    conteudo: "Web Components — Custom Elements, Shadow DOM e HTML Templates — finalmente têm suporte total em todos os browsers modernos. Descubra como criar componentes reutilizáveis sem nenhum framework.",
    categoria: "HTML",
    data: "14/05/2025",
    imagem: "https://images.unsplash.com/photo-1621839673705-6617adf9e890?w=800&h=450&fit=crop&auto=format",
    conteudoCompleto: `
      <p>Por anos, Web Components foi a promessa não cumprida: criar componentes nativos em HTML sem depender de React, Vue ou Angular. Mas em 2025, <strong>finalmente chegamos ao ponto em que Web Components funciona, é confiável, e tem suporte total em todos os browsers modernos</strong>.</p>

      <h3>O Que São Web Components?</h3>
      <p>Web Components é um conjunto de APIs nativas do navegador que permitem criar elementos HTML customizados e reutilizáveis:</p>
      <ul>
        <li><strong>Custom Elements</strong> — Defina seus próprios tags HTML</li>
        <li><strong>Shadow DOM</strong> — Encapsule estilos e marcação isolados</li>
        <li><strong>HTML Templates</strong> — Templates que não renderizam até serem clonados</li>
        <li><strong>Slots</strong> — Adicione pontos de inserção dinâmicos</li>
      </ul>

      <h3>Exemplo Prático: Componente &lt;my-card&gt;</h3>
      <pre><code>class MyCard extends HTMLElement {
  connectedCallback() {
    const title = this.getAttribute('title');
    this.innerHTML = \`
      <div class="card">
        <h2>\${title}</h2>
        <slot></slot>
      </div>
    \`;
  }
}
customElements.define('my-card', MyCard);</code></pre>

      <p>Uso no HTML:</p>
      <pre><code>&lt;my-card title="Hello"&gt;
  Conteúdo aqui!
&lt;/my-card&gt;</code></pre>

      <h3>Vantagens Sobre React/Vue Para Casos Simples</h3>
      <ul>
        <li><strong>Zero dependências</strong> — Funciona em qualquer navegador moderno</li>
        <li><strong>Encapsulamento nativo</strong> — Shadow DOM isola estilos automaticamente</li>
        <li><strong>Reutilizável</strong> — Componentes funcionam em qualquer framework (ou sem framework)</li>
        <li><strong>Mais leve</strong> — Sem bundle de framework, apenas JS vanilla</li>
      </ul>

      <h3>Suporte Atual dos Browsers (2025)</h3>
      <ul>
        <li>✅ Chrome/Edge: Suporte completo desde 2019</li>
        <li>✅ Firefox: Suporte completo desde 2020</li>
        <li>✅ Safari: Suporte completo desde 2021</li>
        <li>⚠️ IE 11: Sem suporte (descontinuado em 2022)</li>
      </ul>

      <h3>Quando Usar (e Quando NÃO Usar) Web Components</h3>
      <p><strong>Use Web Components se:</strong></p>
      <ul>
        <li>Precisa de componentes simples e reutilizáveis</li>
        <li>Quer evitar lock-in de framework</li>
        <li>Trabalha em design systems que precisam funcionar em múltiplos contextos</li>
      </ul>
      <p><strong>Use React/Vue se:</strong></p>
      <ul>
        <li>Precisa de state management complexo</li>
        <li>Aplicação é grande e SPA (Single Page App)</li>
        <li>Precisa de tooling avançado e ecossistema rico</li>
      </ul>

      <h3>Exemplo Real: Web Components em Produção</h3>
      <p>Grandes empresas como Salesforce, Adobe (com seu Spectrum Design System) e Google já usam Web Components em produção. E agora, em 2025, é seguro recomendá-los para novos projetos.</p>

      <p><strong>Conclusão:</strong> Web Components não vai substituir React, mas oferece uma alternativa leve, nativa e padronizada para construir componentes modernos. Vale a pena explorar para seu próximo projeto.</p>
    `
  },
  // ── POST 9: FORZA HORIZON 6 LANÇAMENTO ────
  {
    titulo: "Forza Horizon 6: Tudo Sobre o Jogo no Japão",
    conteudo: "O mais aguardado jogo de corrida do ano chegou! Forza Horizon 6 leva os jogadores ao Japão com 550+ carros, o maior mapa da franquia, Touge Battles e nota 91 no Metacritic. Disponível no Game Pass desde 19 de maio.",
    categoria: "Games",
    data: "19/05/2026",
    imagem: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&h=450&fit=crop&auto=format",
    conteudoCompleto: `
      <p><strong>Forza Horizon 6</strong> finalmente chegou e superou as expectativas. Lançado em 19 de maio de 2026 para Xbox Series X|S, PC e disponível desde o primeiro dia no <strong>Xbox Game Pass</strong>, o jogo recebeu nota <strong>91 no Metacritic</strong>, consagrando-se como o melhor título da franquia até hoje.</p>

      <h3>O Japão como Você Nunca Viu</h3>
      <p>Pela primeira vez na história da franquia, o Festival Horizon desembarca no <strong>Japão</strong>. A Playground Games criou o maior mapa já visto num jogo Horizon, incluindo as ruas densas de <strong>Tóquio</strong>, os passes de montanha nevados dos Alpes japoneses, estradas costeiras e zonas rurais repletas de detalhes autênticos. Para garantir a fidelidade cultural, o estúdio contou com a consultora cultural <strong>Kyoko Yamashita</strong>.</p>

      <h3>Novidades de Gameplay</h3>
      <ul>
        <li><strong>Touge Battles</strong> — Duelos 1v1 em estradas sinuosas de montanha, inspirados na cultura automobilística japonesa</li>
        <li><strong>Goliath de 80 km</strong> — A maior corrida da história da franquia</li>
        <li><strong>Stunt Party</strong> — Novo nome e novas mecânicas do modo cooperativo Forzathon Live</li>
        <li><strong>Battle Royale</strong> — Modo inédito começando com o Honda City 1984</li>
        <li><strong>Legend Island</strong> — Área exclusiva desbloqueada por jogadores no ranking mais alto</li>
        <li><strong>Aftermarket Cars</strong> — Carros de eventos anteriores disponíveis em pontos de venda pelo mapa</li>
        <li><strong>Diário de Coleção</strong> — Inspirado na tradição japonesa de colecionar selos, registra memórias e pontos do mapa explorados</li>
        <li><strong>CoLab</strong> — EventLab atualizado com suporte a multiplayer para criar eventos customizados com amigos</li>
      </ul>

      <h3>A Maior Garagem da Franquia</h3>
      <p>FH6 chega com <strong>550+ veículos</strong> desde o lançamento — o maior número já visto em um Horizon no dia de estreia. Os carros de capa são o <strong>Toyota 2025 GR GT Prototype</strong> e modelos icônicos da cultura JDM. Quem comprar a edição Premium recebe um exclusivo Ferrari J50 pré-tunado.</p>

      <h3>Desempenho Técnico</h3>
      <ul>
        <li><strong>Xbox Series X — Modo Qualidade:</strong> 4K nativo a 30 fps</li>
        <li><strong>Xbox Series X — Modo Performance:</strong> 4K dinâmico a 60 fps</li>
        <li><strong>Xbox Series S — Modo Qualidade:</strong> 1440p a 30 fps</li>
        <li><strong>Xbox Series S — Modo Performance:</strong> 1080p a 60 fps</li>
        <li><strong>PC mínimo:</strong> Intel i5 de 8ª geração, 16 GB RAM, GTX 1650</li>
      </ul>

      <h3>Trilha Sonora Histórica</h3>
      <p>FH6 conta com o <strong>maior número de faixas já visto na série</strong>, distribuídas em 9 estações de rádio que cobrem drum & bass, electropop, synthwave, rock pesado, hip-hop, música clássica moderna e indie alternativo.</p>

      <h3>O Que a Crítica Disse</h3>
      <ul>
        <li><strong>GamesRadar+:</strong> "O melhor Forza Horizon até hoje. Facilmente 100 horas de conteúdo solo de alta qualidade."</li>
        <li><strong>Game Informer:</strong> "Impressiona a cada curva, entregando um dos maiores jogos de corrida desta geração."</li>
        <li><strong>Eurogamer:</strong> "Pega as lições de 14 anos de história e as aplica com muito estilo."</li>
      </ul>

      <p><strong>PS5:</strong> confirmada para o final de 2026, sem data oficial definida. Preço no Brasil: R$ 299 na versão padrão.</p>

      <p><strong>Veredicto:</strong> Se você tem Xbox Game Pass, não há desculpa para não jogar. Forza Horizon 6 é um showcase glorioso do que os jogos de corrida podem ser.</p>
    `
  },
  // ── POST 10: FORZA HORIZON 6 DICAS ────────
  {
    titulo: "Forza Horizon 6: 10 Dicas Para Dominar o Japão",
    conteudo: "Começou no Forza Horizon 6 e não sabe por onde ir? Reunimos as melhores dicas para aproveitar ao máximo a corrida em mundo aberto no Japão — de carros iniciais às Touge Battles e Legend Island.",
    categoria: "Games",
    data: "20/05/2026",
    imagem: "https://images.unsplash.com/photo-1622127088817-a0a53ec2e577?w=800&h=450&fit=crop&auto=format",
    conteudoCompleto: `
      <p>Forza Horizon 6 é enorme. Com o mapa mais denso da franquia e dezenas de modos de jogo, pode ser difícil saber por onde começar. Separamos as <strong>10 dicas essenciais</strong> para você sair na frente no Festival do Japão.</p>

      <h3>1. Explore o Mapa Antes de Correr</h3>
      <p>O Japão de FH6 é incrivelmente denso. Antes de focar em corridas, explore as áreas livremente para desbloquear pontos de influência, descobrir atalhos e preencher o <strong>Diário de Coleção</strong>. Cada ponto descoberto traz recompensas únicas.</p>

      <h3>2. Invista em Carros JDM</h3>
      <p>Os carros japoneses são os verdadeiros protagonistas de FH6. O <strong>Nissan Skyline GT-R (BNR32)</strong>, <strong>Toyota Supra A80</strong> e <strong>Mazda RX-7 FD</strong> têm vantagens especiais nas Touge Battles e eventos culturais do jogo.</p>

      <h3>3. Domine as Touge Battles</h3>
      <p>As batalhas nas montanhas são os eventos mais intensos e recompensadores do jogo. Chave para vencer: <strong>freie antes da curva, acelere na saída</strong>. Carros com tração traseira têm vantagem nas estradas sinuosas.</p>

      <h3>4. Use o Modo Qualidade para Screenshots</h3>
      <p>FH6 é visualmente deslumbrante no Modo Qualidade. O Photo Mode melhorado permite capturar ângulos incríveis com Tóquio iluminada ao fundo. Use filtros cinematográficos para imagens de cinema.</p>

      <h3>5. Aproveite o Aftermarket Cars</h3>
      <p>Carros raros de eventos anteriores estão disponíveis nos pontos de venda espalhados pelo mapa. O estoque é dinâmico e muda regularmente — visite-os com frequência para não perder veículos exclusivos.</p>

      <h3>6. Mire na Legend Island</h3>
      <p>A meta de longo prazo é chegar à <strong>Legend Island</strong>, área exclusiva desbloqueada pelos jogadores no ranking mais alto. Ela oferece um hub especial, eventos únicos e o Goliath de 80 km — a maior corrida da história do Horizon.</p>

      <h3>7. Jogue o Modo CoLab com Amigos</h3>
      <p>O novo CoLab (evolução do EventLab) permite criar corridas personalizadas em qualquer lugar do Japão com suporte multiplayer. Crie desafios impossíveis ou recrie corridas de filmes e anime.</p>

      <h3>8. Não Perca o Stunt Party</h3>
      <p>O antigo Forzathon Live virou <strong>Stunt Party</strong> — eventos cooperativos com mecânicas novas e recompensas exclusivas. Participe regularmente para acumular pontos de Festival e desbloquear carros raros.</p>

      <h3>9. Ajuste a Dificuldade dos Drivatars</h3>
      <p>FH6 tem um sistema de dificuldade granular. Aumentar a dificuldade dos oponentes multiplica o bônus de créditos, acelerando o progresso. Comece em Médio e suba conforme ganha confiança nas pistas.</p>

      <h3>10. Explore de Noite e nas Quatro Estações</h3>
      <p>FH6 traz as <strong>quatro estações</strong> de volta, com neve nos Alpes japoneses no inverno. O jogo é completamente diferente à noite, com Tóquio iluminada e eventos noturnos especiais. A trilha sonora muda de acordo com a estação e hora do dia.</p>

      <p><strong>Bônus:</strong> Se você comprou antes do lançamento, confira seu garagem — o exclusivo Ferrari J50 pré-tunado deve estar esperando por você!</p>
    `
  },
  // ── POST 11: GTA 6 ────────────────────────
  {
    titulo: "GTA 6: Tudo que Sabemos Sobre o Jogo Mais Aguardado da Década",
    conteudo: "GTA 6 chega em 19 de novembro de 2026 para PS5 e Xbox Series X|S. Dois protagonistas, Vice City renovada, gráficos com ray tracing global e a história de Lucia e Jason. Confira o guia completo.",
    categoria: "Games",
    data: "15/05/2026",
    imagem: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=450&fit=crop&auto=format",
    conteudoCompleto: `
      <p>Depois de mais de uma década de espera, o <strong>Grand Theft Auto VI</strong> tem data confirmada: <strong>19 de novembro de 2026</strong>, para PlayStation 5 e Xbox Series X|S. O jogo mais aguardado da história dos videogames passou por dois adiamentos, mas a Rockstar Games garante que o resultado vai valer cada segundo de espera.</p>

      <h3>A História de Lucia e Jason</h3>
      <p>GTA 6 apresenta <strong>Lucia Caminos</strong>, a primeira protagonista feminina da série principal do GTA. Saída da prisão de Leonida (a Florida ficcional da Rockstar), ela se une a <strong>Jason Duval</strong> — ex-militar que trabalhou para traficantes nos Keys — numa parceria que é ao mesmo tempo romântica e criminosa. A narrativa é inspirada no casal Bonnie & Clyde, criminosos lendários dos anos 1930.</p>

      <h3>Vice City Renovada</h3>
      <p>O jogo se passa em <strong>Leonida</strong>, estado fictício baseado na Flórida, tendo como centro a renovada <strong>Vice City</strong> — versão ficcional de Miami que não aparecia na série desde 2002. O mapa promete ser substancialmente maior que o de GTA 5, incluindo zonas como os pântanos dos Everglades, penínsulas costeiras e áreas rurais detalhadas.</p>

      <h3>Tecnologia de Ponta</h3>
      <ul>
        <li><strong>Motor RAGE evoluído</strong> — versão muito mais avançada que a usada em GTA 5 e Red Dead Redemption 2</li>
        <li><strong>Ray Tracing Global de Iluminação (RTGI)</strong> — não é opcional, é um pilar da visão artística do jogo</li>
        <li><strong>Captura em PS5:</strong> 1440p e 30 fps com ray tracing ativo</li>
        <li><strong>PS5 Pro:</strong> suporte ao upscaler PSSR para melhor fidelidade visual</li>
      </ul>

      <h3>Linha do Tempo dos Adiamentos</h3>
      <ul>
        <li><strong>Dezembro 2023:</strong> Primeiro trailer oficial — janela de lançamento "2025"</li>
        <li><strong>Maio 2025:</strong> Segundo trailer + primeiro adiamento para 26 de maio de 2026</li>
        <li><strong>Novembro 2025:</strong> Segundo adiamento para 19 de novembro de 2026</li>
        <li><strong>Fevereiro 2026:</strong> CEO da Take-Two confirma que a data de novembro se mantém</li>
      </ul>

      <h3>Plataformas e PC</h3>
      <p>O lançamento inicial é exclusivo para <strong>PS5 e Xbox Series X|S</strong>. Versão para PC não foi confirmada oficialmente, mas o histórico da série praticamente garante uma chegada posterior — com base nos intervalos anteriores, o final de 2027 ou início de 2028 é a janela mais provável.</p>

      <h3>Por Que o Primeiro Trailer Bateu Recordes</h3>
      <p>O trailer de dezembro de 2023 tornou-se o vídeo de videogames mais visto em 24 horas no YouTube da história, com mais de <strong>90 milhões de visualizações</strong> — ficando atrás apenas de dois videoclipes do BTS em termos de vídeos em geral.</p>

      <p><strong>Curiosidade:</strong> Segundo o jornalista Jason Schreier, nenhuma fonte dentro da Rockstar acreditava que o jogo seria lançado em 2025. A decisão de atrasar foi considerada um "desejo legítimo da gerência de evitar um crunch brutal".</p>

      <p><strong>Previsão:</strong> Com campanha de marketing prevista para começar no verão de 2026, espere novos trailers e revelações de gameplay em breve.</p>
    `
  },
  // ── POST 12: TECNOLOGIA IA 2026 ───────────
  {
    titulo: "IA em 2026: GPT-5, Gemini Ultra 2 e a Guerra dos Modelos",
    conteudo: "O mercado de inteligência artificial entrou em hipervelocidade. OpenAI, Google e Anthropic lançam modelos cada vez mais poderosos em 2026. Veja como essa corrida impacta desenvolvedores e empresas brasileiras.",
    categoria: "Tecnologia",
    data: "14/05/2026",
    imagem: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&h=450&fit=crop&auto=format",
    conteudoCompleto: `
      <p>2026 está provando ser o ano em que a inteligência artificial deixou de ser promessa e se tornou infraestrutura crítica. Com <strong>GPT-5</strong>, <strong>Gemini Ultra 2</strong> e <strong>Claude 4</strong> competindo diretamente, empresas e desenvolvedores estão diante de escolhas que vão definir o próximo ciclo tecnológico.</p>

      <h3>A Corrida dos Modelos</h3>
      <p>Os três grandes players apostam em abordagens distintas:</p>
      <ul>
        <li><strong>OpenAI (GPT-5):</strong> Foco em raciocínio avançado, contexto de 1 milhão de tokens e capacidades multimodais aprimoradas. Preço premium, mas ainda o mais adotado em produção</li>
        <li><strong>Google (Gemini Ultra 2):</strong> Integração nativa com Google Workspace, Android e Search. Vantagem competitiva em contexto extremamente longo (2M+ tokens)</li>
        <li><strong>Anthropic (Claude 4):</strong> Líder em segurança e seguimento de instruções complexas. Favorito de empresas com requisitos regulatórios estritos</li>
        <li><strong>DeepSeek (R2):</strong> Opção open-source de altíssima performance a custo mínimo — ainda a escolha de startups e devs independentes</li>
      </ul>

      <h3>O Impacto no Mercado Brasileiro</h3>
      <p>O Brasil emerge como um dos maiores mercados de IA da América Latina. Empresas como Nubank, iFood e Magalu já integram modelos de IA em fluxos críticos. O mercado de startups de IA brasileiras cresceu 340% em investimentos desde 2024, segundo dados da ABID.</p>

      <h3>Agentes de IA: A Nova Fronteira</h3>
      <p>O termo do ano é <strong>"agentes de IA"</strong> — sistemas que não apenas respondem perguntas, mas executam tarefas autonomamente: navegam na web, escrevem e executam código, gerenciam e-mails e interagem com APIs externas. Empresas como Salesforce, Microsoft e HubSpot já oferecem produtos baseados nesse paradigma.</p>

      <h3>O Que Muda Para Desenvolvedores</h3>
      <ul>
        <li>Habilidade de <strong>prompt engineering</strong> virou diferencial de mercado</li>
        <li>Integração via API de LLMs já é requisito em muitas vagas sênior</li>
        <li>Frameworks como LangChain, LlamaIndex e CrewAI dominam o ecossistema de agentes</li>
        <li>Segurança de IA (AI safety) cresce como especialização técnica</li>
      </ul>

      <h3>Riscos e Debates</h3>
      <p>Com tanto poder concentrado, o debate regulatório se intensifica. A União Europeia implementa o AI Act em fases desde 2025. No Brasil, o marco regulatório de IA ainda está em discussão no Congresso. Questões de direitos autorais, desinformação e viés algorítmico estão no centro dos debates globais.</p>

      <p><strong>Conclusão:</strong> Quem investir agora em habilidades de IA tem uma janela de vantagem competitiva de 2 a 3 anos. O momento é agora.</p>
    `
  },
  // ── POST 13: XBOX GAME PASS ───────────────
  {
    titulo: "Xbox Game Pass em 2026: Vale a Pena Assinar?",
    conteudo: "Com Forza Horizon 6, Gears of War E-Day, Halo: Campaign Evolved e Fable chegando ao Game Pass em 2026, a assinatura da Microsoft nunca foi tão recheada. Analisamos se vale o investimento para jogadores brasileiros.",
    categoria: "Games",
    data: "13/05/2026",
    imagem: "https://images.unsplash.com/photo-1486572788966-cfd3df1f5b42?w=800&h=450&fit=crop&auto=format",
    conteudoCompleto: `
      <p>2026 está sendo o ano mais forte da história do <strong>Xbox Game Pass</strong>. Com uma fila impressionante de exclusivos chegando ao catálogo já no dia de lançamento, a Microsoft finalmente entrega a promessa que fez há anos: transformar o Game Pass na "Netflix dos jogos".</p>

      <h3>O Que Chega ao Game Pass em 2026</h3>
      <ul>
        <li><strong>Forza Horizon 6</strong> (19 de maio) — O maior jogo de corrida da geração, disponível no dia 1</li>
        <li><strong>Gears of War: E-Day</strong> (segundo semestre) — Prequel que explora a origem do conflito com os Locust</li>
        <li><strong>Halo: Campaign Evolved</strong> (segundo semestre) — Reimaginação do clássico original com gráficos modernos</li>
        <li><strong>Fable</strong> (segundo semestre) — Reboot do RPG britânico lendário pela Playground Games</li>
        <li><strong>Indiana Jones e o Grande Círculo</strong> (adicionado em 2025, ainda disponível)</li>
      </ul>

      <h3>Planos e Preços (Brasil — maio 2026)</h3>
      <ul>
        <li><strong>Game Pass Core:</strong> R$ 29,99/mês — Catálogo de jogos + multiplayer online</li>
        <li><strong>Game Pass Standard:</strong> R$ 44,99/mês — Catálogo maior + desconto em jogos</li>
        <li><strong>Game Pass Ultimate:</strong> R$ 59,99/mês — Tudo incluso + EA Play + nuvem + PC</li>
      </ul>

      <h3>Vale Mais Que Comprar os Jogos?</h3>
      <p>Faça a conta: Forza Horizon 6 custa R$ 299. Fable provavelmente R$ 299–349. Gears de E-Day mais R$ 299. Só esses três jogos somam <strong>R$ 900+</strong>. Com o Game Pass Ultimate a R$ 59,99/mês, em 5 meses você acessa todos eles — mais os outros centenas do catálogo.</p>

      <h3>Prós do Game Pass</h3>
      <ul>
        <li>Jogos no dia de lançamento sem custo adicional</li>
        <li>Acesso a centenas de títulos de diferentes gêneros</li>
        <li>Play Anywhere — jogue no console E no PC com uma licença</li>
        <li>Xbox Cloud Gaming — jogue em smartphone, tablet e TV sem hardware potente</li>
        <li>Desconto de 20% em compras de jogos e DLCs</li>
      </ul>

      <h3>Contras do Game Pass</h3>
      <ul>
        <li>Jogos podem sair do catálogo sem aviso prévio</li>
        <li>Você não é dono dos jogos — se cancelar, perde o acesso</li>
        <li>Não disponível para PS5 (óbvio, mas importante)</li>
        <li>Internet rápida necessária para Cloud Gaming</li>
      </ul>

      <p><strong>Veredicto:</strong> Para quem joga regularmente e tem interesse em pelo menos 3–4 exclusivos Xbox por ano, o Game Pass Ultimate é <strong>altamente recomendado</strong>. Com a lineup de 2026, é o melhor momento da história para assinar.</p>
    `
  },
  // ── POST 14: REACT 20 ─────────────────────
  {
    titulo: "React 19 e o Futuro do Desenvolvimento Frontend",
    conteudo: "React 19 trouxe Server Components estáveis, Actions, o novo hook use() e melhorias massivas de performance. Saiba o que mudou e como migrar seus projetos em 2026.",
    categoria: "JavaScript",
    data: "12/05/2026",
    imagem: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=450&fit=crop&auto=format",
    conteudoCompleto: `
      <p>O <strong>React 19</strong>, lançado no final de 2024 e amplamente adotado em 2025–2026, representa a maior mudança na forma de escrever aplicações React desde os hooks em 2019. As novidades não são apenas sintáticas — elas mudam fundamentalmente como você pensa sobre renderização, estado e dados.</p>

      <h3>Server Components: Finalmente Estáveis</h3>
      <p>Depois de anos em desenvolvimento, os <strong>React Server Components (RSC)</strong> chegaram estáveis no React 19. A ideia central: componentes que rodam apenas no servidor, têm acesso direto a bancos de dados e APIs, e enviam apenas HTML para o cliente.</p>
      <pre><code>// Server Component — roda no servidor, zero bundle no cliente
async function UserProfile({ userId }) {
  const user = await db.users.findById(userId); // Acesso direto ao DB
  return &lt;div&gt;{user.name}&lt;/div&gt;;
}</code></pre>

      <h3>O Novo Hook use()</h3>
      <p>O hook <code>use()</code> é uma das adições mais poderosas do React 19. Ele permite "desempacotar" Promises e Context de forma muito mais elegante:</p>
      <pre><code>import { use } from 'react';

function Comments({ commentsPromise }) {
  // React suspende automaticamente até a Promise resolver
  const comments = use(commentsPromise);
  return comments.map(c => &lt;Comment key={c.id} {...c} /&gt;);
}</code></pre>

      <h3>Actions: Formulários Sem Boilerplate</h3>
      <p>As <strong>Actions</strong> simplificam radicalmente o tratamento de formulários, eliminando o padrão repetitivo de useState + handleSubmit:</p>
      <pre><code>function ContactForm() {
  async function sendMessage(formData) {
    'use server'; // Roda no servidor
    await db.messages.create({ text: formData.get('message') });
  }
  
  return (
    &lt;form action={sendMessage}&gt;
      &lt;textarea name="message" /&gt;
      &lt;button type="submit"&gt;Enviar&lt;/button&gt;
    &lt;/form&gt;
  );
}</code></pre>

      <h3>useOptimistic: UX Instantânea</h3>
      <p>O novo <code>useOptimistic</code> permite atualizar a UI imediatamente antes da operação assíncrona completar, eliminando spinners desnecessários para ações simples como likes, favoritos e exclusões.</p>

      <h3>Migração de React 18 para 19</h3>
      <ul>
        <li>A maioria dos projetos migra sem breaking changes</li>
        <li>Remova <code>ReactDOM.render</code> — use <code>createRoot</code> (já necessário no 18)</li>
        <li>String refs foram removidas definitivamente</li>
        <li>Atualize para <code>react@19</code> e <code>react-dom@19</code> juntos</li>
      </ul>

      <h3>Impacto no Ecossistema</h3>
      <p>Next.js 15 e Remix 3 já aproveitam ao máximo os Server Components. Para novos projetos, <strong>Next.js 15 com React 19</strong> é o stack mais recomendado em 2026. Quem usa Vite + React continua bem suportado para aplicações client-side.</p>

      <p><strong>Conclusão:</strong> React 19 não é uma reescrita — é uma evolução madura. As novas primitivas resolvem problemas reais de performance e DX que desenvolvedores enfrentavam há anos.</p>
    `
  },
  // ── POST 15: PYTHON 2026 ──────────────────
  {
    titulo: "Python em 2026: Por Que Continua Sendo a Linguagem Número 1",
    conteudo: "Python domina rankings de linguagens pelo quinto ano consecutivo. Da IA ao desenvolvimento web, passando por automação e ciência de dados, veja por que aprender Python em 2026 ainda é a melhor decisão.",
    categoria: "Tecnologia",
    data: "10/05/2026",
    imagem: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=450&fit=crop&auto=format",
    conteudoCompleto: `
      <p><strong>Python</strong> ocupa o topo do índice TIOBE pelo quinto ano consecutivo e continua sendo a linguagem mais ensinada em universidades, bootcamps e cursos online. Em 2026, com a explosão da IA, o Python se tornou ainda mais indispensável. Mas por quê, e o que aprender nele?</p>

      <h3>Por Que Python Domina a IA?</h3>
      <p>Praticamente todos os principais frameworks de machine learning e deep learning são escritos em Python ou têm Python como interface primária:</p>
      <ul>
        <li><strong>TensorFlow e Keras</strong> — Google</li>
        <li><strong>PyTorch</strong> — Meta (favorito da academia e pesquisa)</li>
        <li><strong>scikit-learn</strong> — ML clássico e rápido de prototipar</li>
        <li><strong>Hugging Face Transformers</strong> — modelos de linguagem de última geração</li>
        <li><strong>LangChain e LlamaIndex</strong> — frameworks para agentes e RAG</li>
      </ul>

      <h3>Python 3.13: Novidades Importantes</h3>
      <ul>
        <li><strong>Free-threaded mode (experimental)</strong> — remoção do GIL para paralelismo real</li>
        <li><strong>JIT Compiler</strong> — melhoria de performance de até 5% em benchmarks reais</li>
        <li><strong>Mensagens de erro aprimoradas</strong> — ainda mais claras para iniciantes</li>
        <li><strong>REPL interativo melhorado</strong> — destaque de sintaxe e multi-linha mais suave</li>
      </ul>

      <h3>Onde Python É Usado em 2026</h3>
      <ul>
        <li><strong>IA e ML:</strong> treinamento de modelos, fine-tuning, pipelines de dados</li>
        <li><strong>Web Backend:</strong> FastAPI (mais popular que Flask em novos projetos), Django para sistemas complexos</li>
        <li><strong>Automação:</strong> scripts, web scraping, automação de planilhas (openpyxl, pandas)</li>
        <li><strong>Ciência de Dados:</strong> pandas, numpy, matplotlib, jupyter</li>
        <li><strong>DevOps:</strong> automação de infraestrutura, scripts de CI/CD</li>
        <li><strong>Segurança:</strong> pentest, análise de malware, forense digital</li>
      </ul>

      <h3>O Que Aprender em Python em 2026 (Roadmap)</h3>
      <ul>
        <li>Fundamentos: variáveis, funções, listas, dicionários, loops</li>
        <li>Orientação a Objetos: classes, herança, polimorfismo</li>
        <li>Bibliotecas essenciais: requests, pandas, numpy</li>
        <li>Frameworks web: FastAPI para APIs rápidas ou Django para sistemas completos</li>
        <li>IA/ML: scikit-learn como porta de entrada, depois PyTorch</li>
        <li>Agentes: LangChain ou CrewAI para automação com LLMs</li>
      </ul>

      <h3>Salários em Python (Brasil — 2026)</h3>
      <ul>
        <li><strong>Júnior:</strong> R$ 3.500 – R$ 6.000/mês</li>
        <li><strong>Pleno:</strong> R$ 7.000 – R$ 12.000/mês</li>
        <li><strong>Sênior:</strong> R$ 14.000 – R$ 25.000/mês</li>
        <li><strong>ML Engineer / Data Scientist:</strong> R$ 15.000 – R$ 35.000/mês</li>
      </ul>

      <p><strong>Conclusão:</strong> Python não está "na moda" — está na base. Enquanto a IA dominar o mercado de tecnologia, Python será a linguagem mais estratégica que você pode aprender.</p>
    `
  }
];

// ── UTILITY FUNCTIONS ──────────────────────
function getViews(index) {
  return parseInt(localStorage.getItem(`post_${index}_visualizacoes`) || "0");
}

function getCategoryColor(cat) {
  const map = {
    HTML:       "#f0a500",
    JavaScript: "#39d353",
    Games:      "#00d4ff",
    Dinheiro:   "#9b59b6",
    Tecnologia: "#ff4757",
  };
  return map[cat] || "#64748b";
}

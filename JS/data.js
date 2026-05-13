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
    imagem: "https://picsum.photos/seed/deepseek/800/450",
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
  // ── POST 5 (NOVO) ─────────────────────
  {
    titulo: "Nintendo Switch 2: O que Sabemos Até Agora",
    conteudo: "A Nintendo confirmou o Switch 2 com lançamento global em junho de 2025. Novo Joy-Con magnético, tela maior, suporte a 4K em dock e Mario Kart World como título de lançamento.",
    categoria: "Games",
    data: "11/05/2025",
    imagem: "https://picsum.photos/seed/switch2/800/450",
    conteudoCompleto: `
      <p>Após anos de especulação, a Nintendo oficialmente anunciou o <strong>Switch 2</strong> com lançamento global previsto para <strong>junho de 2025</strong>. O console promete manter a fórmula híbrida que conquistou 140+ milhões de usuários, mas com melhorias significativas em desempenho, design e recursos.</p>

      <h3>Especificações Confirmadas</h3>
      <ul>
        <li><strong>Tela OLED 7.5"</strong> — Aumento de 0,5 polegadas em relação aos 7" do Switch original</li>
        <li><strong>Processador melhorado</strong> — Estimado em 2-3x mais poderoso que o Switch original</li>
        <li><strong>Suporte 4K em dock</strong> — Primeira vez que um console Nintendo suporta 4K nativo</li>
        <li><strong>Bateria estendida</strong> — ~8 horas de autonomia em modo portátil</li>
        <li><strong>Armazenamento 1TB</strong> — Reduz necessidade de cartuchos físicos (compatível com biblioteca digital)</li>
      </ul>

      <h3>Joy-Con Revolucionário</h3>
      <p>Os novos controles magnéticos trazem inovação: <strong>encaixe magnético redesenhado</strong> para maior estabilidade, novo <strong>botão C</strong> (localizado entre o stick esquerdo e o trigger ZL), e suporte a <strong>mouse virtual</strong> — permitindo controle de cursor em modo docked sem periférico adicional.</p>

      <h3>Preço e Lançamento</h3>
      <ul>
        <li><strong>$449 USD</strong> (modelo com dock e Joy-Cons)</li>
        <li><strong>$399 USD</strong> (modelo digital, sem leitor de cartuchos — Brasil não deve receber)</li>
        <li><strong>Títulos de lançamento:</strong> Mario Kart World (exclusivo), Zelda Echoes of the Past (2026), Pokémon Legends Arceus II (2025)</li>
      </ul>

      <h3>Comparação de Performance</h3>
      <p>O Switch original (2017) rodava em 720p (portátil) e 1080p (docked) a 60 fps. O Switch 2 atinge 1080p portátil e 4K docked, dobrando a taxa de frames em muitos títulos. Comparativamente, fica entre PS4 e PS5 em poder bruto.</p>

      <p><strong>Expectativa do mercado:</strong> Lançamento esgotado nos primeiros meses, com precedência para pré-orders. Nintendo deve continuar suportando o Switch original em paralelo até 2026.</p>
    `
  },
  // ── POST 6 (NOVO) ─────────────────────
  {
    titulo: "TypeScript 5.5 e as Novidades que Todo Dev Precisa Conhecer",
    conteudo: "O TypeScript 5.5 chegou com inferência de tipo para closures, melhorias no isolatedDeclarations e suporte nativo a expressões regulares tipadas — tornando o código mais seguro e a experiência de dev ainda melhor.",
    categoria: "JavaScript",
    data: "12/05/2025",
    imagem: "https://picsum.photos/seed/typescript/800/450",
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
    imagem: "https://picsum.photos/seed/bitcoin/800/450",
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
    imagem: "https://picsum.photos/seed/webcomponents/800/450",
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

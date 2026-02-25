const posts = [
    {
        titulo: "HTML: A Estrutura da Web",
        conteudo: `
        </p> O HTML (HyperText Markup Language) é a linguagem de marcação fundamental da web. Ele é responsável por estruturar o conteúdo das páginas, definindo títulos, parágrafos, listas, links, imagens, tabelas, formulários e muito mais. Toda página web, por trás das aparências estilizadas, tem como base um código HTML.</p>
        </p>Criado nos primórdios da internet, o HTML evoluiu ao longo dos anos e atualmente está em sua versão mais moderna: o HTML5. Essa versão trouxe novas tags e recursos que facilitaram a criação de conteúdos multimídia, formulários mais inteligentes e páginas mais acessíveis e semânticas.</p>
        </p>Diferente de linguagens de programação, o HTML não possui lógica ou comportamentos. Ele apenas marca e organiza o conteúdo, sendo necessário usar CSS para aparência e JavaScript para interações.</p>
        
        <P>A estrutura básica de um documento HTML inclui elementos como:</p>


        <ul>
        <li><strong>&lt;html&gt;<strong>: Define o início e o fim do documento HTML.<li>
        <li><strong>&lt;head&gt;<strong>: Contém informações sobre a página, como título, links para CSS e metadados.<li>
        <li><strong>&lt;Title&gt;<strong>:Define o título exibido na aba do navegador.<li>
        <li><strong>&lt;Body&gt;<strong>: Onde o conteúdo visível da página é colocado (textos, imagens, botões, etc.).<li>
        <li><strong>&lt;h1&gt até &lth6&gt;<strong>: Representam títulos de diferentes níveis.<li>
        <li><strong>&lt;p &gt;<strong>: Representam títulos de diferentes níveis.<li>
        <li><strong>&lt;a &gt;<strong>: Links clicáveis.<li>
        <li><strong>&lt;img &gt;<strong>: Imagens na página.<li>
        <li><strong>&lt;ul&gt; &lt;ol&gt; &lt;li&gt; <strong>:Listas não ordenadas, ordenadas e seus itens.<li>
        <li><strong>&lt;form&gt;<strong>: Formulários interativos.<li>
        <br>

        <p> O HTML5 também introduziu elementos semânticos que melhoram a organização do código e a acessibilidade, como:
        
        <li><strong>&lt;header&gt;<strong>: Cabeçalho da página ou seção.<li>
        <li><strong>&lt;nav&gt;<strong>: Navegação principal.<li>
        <li><strong>&lt;section&gt;<strong>: Uma seção temática de conteúdo.<li>
        <li><strong>&lt;article&gt;<strong>: onteúdo independente e reutilizável, como posts.<li>
        <li><strong>&lt;footer&gt;<strong>: DRodapé da página.<li>
        <ul>
        <br>
        <p>Ao escrever um código HTML bem estruturado, você garante que os mecanismos de busca, leitores de tela e navegadores compreendam melhor o conteúdo do seu site. Por isso, dominar o HTML é o primeiro passo para qualquer desenvolvedor web.<p>
        `,/// usando &lt; &gt; para que não seja interpretado as tags HTML no texto.
        data: new Date().toLocaleDateString(),
        imagem: "imagens/html.png",
        categoria: "HTML",
    
    }, // index 0
    {
        titulo: "Javascript: e suas principais funções",
        conteudo: `
        <p>O JavaScript é uma das linguagens de programação mais importantes e utilizadas no mundo do desenvolvimento web. Criado em 1995, ele surgiu com o objetivo de tornar as páginas da internet mais interativas, saindo do formato estático que era comum na época. Hoje, é impossível falar de desenvolvimento front-end sem falar de JavaScript.</p>
        <p>Ele é executado no navegador do usuário, o que significa que é uma linguagem client-side, mas com o tempo passou a ser usada também no back-end com o Node.js. Seu uso é tão amplo que com ele é possível criar desde efeitos simples até aplicações web completas.</p>
        <p>Abaixo estão listadas as principais funções do JavaScript e como elas atuam nas páginas da web:</p>
        
        <ul>
          <li><strong>Manipulação do DOM:</strong> Acessar e alterar elementos HTML/CSS em tempo real.</li>
          <li><strong>Controle de eventos:</strong> Reagir a cliques, teclas, rolagem etc.</li>
          <li><strong>Validação de formulários:</strong> Verificar dados do usuário antes do envio.</li>
          <li><strong>Atualizações dinâmicas (AJAX):</strong> Buscar dados sem recarregar a página.</li>
          <li><strong>Animações e efeitos visuais:</strong> Criar transições, sliders e interações visuais.</li>
          <li><strong>Programação assíncrona:</strong> Trabalhar com tarefas demoradas via async/await ou Promises.</li>
          <li><strong>Armazenamento local:</strong> Salvar dados com localStorage ou sessionStorage.</li>
          <li><strong>Criação de jogos:</strong> Usar canvas, colisões, lógica interativa.</li>
          <li><strong>Integração com APIs:</strong> Consumir e exibir dados externos.</li>
          <li><strong>Uso com frameworks:</strong> React, Angular e Vue são baseados em JavaScript.</li>
          <li><strong>Controle de tempo:</strong> Executar ações com setTimeout ou setInterval.</li>
          <li><strong>Manipulação de áudio e vídeo:</strong> Reproduzir, pausar e controlar mídia.</li>
          <li><strong>Segurança visual:</strong> Restringir acesso visual a elementos com base no usuário.</li>
          <li><strong>Componentes reutilizáveis:</strong> Criar estruturas modulares e reaproveitáveis com ES6+.</li>
        </ul>
        
        <p>JavaScript é uma linguagem versátil, poderosa e indispensável no desenvolvimento web moderno.</p>
        `,
        data: new Date().toLocaleDateString(),
        imagem: "Imagens/js.png",
        categoria: "JavaScript"
    },// index 1
   {
    titulo: "Os 5 Consoles Mais Vendidos de Todos os Tempos",
    conteudo: `
    <p>O mundo dos videogames já passou por inúmeras gerações, mas alguns consoles conseguiram conquistar uma legião de fãs e bater recordes de vendas. Esses aparelhos marcaram época, revolucionaram o mercado e continuam sendo lembrados — ou jogados — até hoje.</p>

    <p>Confira abaixo os <strong>cinco consoles mais vendidos da história</strong>, com números atualizados até 2025:</p>

    <ul>
      <li><strong>1. PlayStation 2 (Sony)</strong> — <em>155 milhões de unidades</em><br>
      <img src = "imagens/PS2.jpg" alt="PlayStation 2">
      <br> 

      Lançado em 2000, o PS2 é o campeão absoluto. Com uma biblioteca gigantesca, retrocompatibilidade com o PS1, reprodução de DVDs e clássicos como <em>GTA: San Andreas</em>, <em>God of War</em> e <em>Shadow of the Colossus</em>, ele dominou o mercado por anos. No Brasil, foi praticamente uma febre nacional.</li>

      <li><strong>2. Nintendo DS (Nintendo)</strong> — <em>154 milhões de unidades</em><br>
      <img src = "imagens/nintendo DS.png" alt="Nintendo DS">
      <br>

      O portátil de tela dupla da Nintendo, lançado em 2004, conquistou jogadores de todas as idades. Com títulos como <em>Pokémon</em>, <em>New Super Mario Bros.</em> e <em>Brain Age</em>, o DS se destacou por sua jogabilidade inovadora com toque e microfone.</li>

      <li><strong>3. Nintendo Switch (Nintendo)</strong> — <em>140+ milhões de unidades (em crescimento)</em><br>
      <img src = "imagens/nintendo switch.jpg" alt="Nintendo Switch">
      <br>

      Lançado em 2017, o Switch rapidamente se tornou o console mais vendido da Nintendo entre os de mesa. Sua proposta híbrida (portátil + dock) e jogos como <em>Zelda: Breath of the Wild</em> e <em>Animal Crossing</em> garantiram seu sucesso. Ainda está em alta em 2025.</li>

      <li><strong>4. Game Boy / Game Boy Color (Nintendo)</strong> — <em>118 milhões de unidades</em><br>
      <img src = "imagens/gameboy.jpg" alt="Gameboy">
      <br>

      O clássico portátil que marcou os anos 90 com jogos como <em>Tetris</em>, <em>Pokémon Red/Blue</em> e <em>Metroid II</em>. Levou os videogames para todos os lugares — e com pilhas que duravam dias!</li>

      <li><strong>5. PlayStation 4 (Sony)</strong> — <em>117 milhões de unidades</em><br>
      <img src = "imagens/ps4.jpg" alt="PlayStation 4">
      <br>

      Lançado em 2013, o PS4 trouxe exclusivos aclamados como <em>The Last of Us Part II</em>, <em>God of War</em> (2018) e <em>Spider-Man</em>. Marcou a geração com gráficos incríveis e presença forte no digital.</li>
    </ul>

    <p><strong>Menções Honrosas:</strong><br>
    - <em>PlayStation 5</em> — cerca de 60+ milhões de unidades (ainda em venda ativa)<br>
    - <em>Nintendo Wii</em> — 101 milhões de unidades<br>
    - <em>Xbox 360 / PlayStation 3</em> — ultrapassaram 80 milhões cada um</p>

    <p><strong>Conclusão:</strong><br>
    Esses consoles não são apenas líderes em vendas — são símbolos de gerações. Com bibliotecas incríveis e inovações que mudaram a indústria, eles marcaram época. E com os atuais ainda em crescimento, o ranking pode mudar nos próximos anos.</p>
  `,
    data: new Date().toLocaleDateString(),
    imagem: "imagens/consoles.jpg",
    categoria: "Games",
  },// index 2
];

// id pela URL
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

// contador de visualizações dentro da pagina pois não faz sentido ser no proprio blog
const visualizacoesSalvas = localStorage.getItem(`post_${id}_visualizacoes`);
let views = visualizacoesSalvas ? parseInt(visualizacoesSalvas) : 0;
views++;
localStorage.setItem(`post_${id}_visualizacoes`, views);


// renderização do post
const post = posts[id];
const container = document.getElementById("Postpost");

if (post) {
  // Atualiza o titulo da aba
  document.title = `Blog do José - ${post.titulo}`;
    container.innerHTML = `
  <div class="post-card">
    <h1>${post.titulo}</h1>
    <img src="${post.imagem}" alt="Imagem do post">
    <p><strong>Data:</strong> ${post.data}</p>
    <p><strong>Categoria:</strong> ${post.categoria}</p>
    <div>${post.conteudo}</div>
    <p><strong>Visualizações:</strong> ${views}</p>
    <a href="index.html" class="btn-voltar">← Voltar para o blog </a>

  </div>
`;
} else {
    container.innerHTML = `
        <p>Página não encontrada.</p>
        <a href="index.html">Voltar para o blog</a>
    `;
}
/// se post existe, renderiza o conteúdo do post com as visualizações atualizadas. Se não, exibe uma mensagem de erro e um link para voltar ao blog.
const posts = [
    {
     titulo: "HTML e suas funções", 
     conteudo: "HTML: A Estrutura Básica da Web",
     categoria: "HTML",
     data: "05/07/2025",
     imagem:"imagens/HTML.png"
    }, // index 0
    {
    titulo:"Js aprendendo a linguagem",
    conteudo:"Javascript e suas funcionalidades",
    categoria:"JavaScript",
    data: "06/07/2025",
    imagem:"imagens/JS.png"
    }, // index 1
    {
    titulo:"Consoles mais vendidos de todos os tempos",
    conteudo:"Veja uma lista com os 5 consoles mais vendidos de todos os tempos",
    categoria:"Games",
    data:"07/07/2025",
    imagem:"imagens/consoles.jpg",
    },// index 2
    {
    titulo:"Dinheiro com tarefas faceis",
    conteudo:"Ganhe dinheiro facilmente",
    categoria:"Dinheiro",
    data:"09/07/2025",
    imagem:"imagens/dolar.jpg"
    },// index 3
]
const container = document.getElementById("postcard"); // variavel que pega o elemento com o id Posts
const selecionarCategoria = document.getElementById("categoria"); // variavel que pega o elemento com o id categoria da página HTML da seleção de categoria

// Função que cria o card de cada post

function criarPost(post, index) {
    const card = document.createElement("div");
    card.classList.add("card");

    const visualizacoes = localStorage.getItem(`post_${index}_visualizacoes`) || 0;

    card.innerHTML = `
    <div>
    <h2><a href="post.html?id=${index}">${post.titulo}</a></h2>
    <img src="${post.imagem}" alt="Imagem do post">
    <p><strong>data:</strong> ${post.data}</p>
    <p><strong>Categoria:</strong> ${post.categoria}</p>
    <p><strong>Visualizações:</strong> ${visualizacoes}</p>
    <p>${post.conteudo}</p>
    <a href="post.html?id=${index}"> ler mais</a> 
    </div>
    `;

    container.appendChild(card); // funcão que adiciona o HTML do card ao container
}

function renderizarPosts(filtro = "todas") {
    container.innerHTML = ""; // Limpa o conteúdo do container 
    posts.forEach((post, index) => {
        if (filtro === "todas" || post.categoria === filtro) {
            criarPost(post, index);
        }
    }); /// se / senão para filtrar os posts por categoria
}

renderizarPosts(); // Chamada inicial

selecionarCategoria.addEventListener("change", (e) => {
  renderizarPosts(e.target.value);
});
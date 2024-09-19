// Seleciona o botão de envio e o container de feed
const button = document.getElementById("handleSubmit");
const feedContainer = document.getElementById("feed-container");

// Função para carregar os dados do LocalStorage
function loadPosts() {
  // Verifica se há dados armazenados no LocalStorage
  const storedPosts = localStorage.getItem("posts");
  if (storedPosts) {
    // Converte os dados armazenados em um array de objetos
    const posts = JSON.parse(storedPosts);
    // Itera sobre os posts e cria um cartão de postagem para cada um
    posts.forEach((post) => {
      const postCard = document.createElement("div");
      postCard.className = "post-card";

      const postText = document.createElement("p");
      postText.textContent = post.inputText;

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Excluir";
      deleteButton.className = "delete-button";
      deleteButton.dataset.postId = posts.indexOf(post); // armazena o índice do post

      // Adiciona um evento de clique ao botão de exclusão
      deleteButton.addEventListener("click", deletePost);

      postCard.appendChild(postText);
      postCard.appendChild(deleteButton);
      feedContainer.appendChild(postCard);
    });
  }
}

// Carrega os dados ao iniciar a página
loadPosts();

// Adiciona um evento de clique ao botão de envio
button.addEventListener("click", async function (e) {
  e.preventDefault();

  // Obtém o texto do input
  const inputText = document.getElementById("inputText").value;
  const data = { inputText };

  try {
    // Faz uma requisição POST para o servidor
    const response = await fetch("http://localhost:3002/api/store/feed", {
      method: "POST",
      headers: { "Content-Type": "application/json;charset=UTF-8" },
      body: JSON.stringify(data),
    });

    // Converte a resposta em JSON
    const results = await response.json();
    console.log(results);

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Sua postagem foi feita com sucesso",
      showConfirmButton: false,
      timer: 1500
    });

    // Salva o post no LocalStorage
    const storedPosts = localStorage.getItem("posts");
    const posts = storedPosts ? JSON.parse(storedPosts) : [];
    posts.push(data);
    localStorage.setItem("posts", JSON.stringify(posts));

    // Cria um novo cartão de postagem
    const postCard = document.createElement("div");
    postCard.className = "post-card";

    const postText = document.createElement("p");
    postText.textContent = inputText;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Excluir";
    deleteButton.className = "delete-button";
    deleteButton.dataset.postId = posts.length - 1; // armazena o índice do post

    deleteButton.addEventListener("click", deletePost);

    postCard.appendChild(postText);
    postCard.appendChild(deleteButton);
    feedContainer.appendChild(postCard);
  } catch (error) {
    console.error("Error:", error);
    alert("Erro ao fazer o POST!!");
  }
});

// Função para excluir um post
function deletePost(event) {
  // Obtém o índice do post a ser excluído
  const postId = event.target.dataset.postId;
  const storedPosts = localStorage.getItem("posts");
  const posts = JSON.parse(storedPosts);
  posts.splice(postId, 1);
  localStorage.setItem("posts", JSON.stringify(posts));

  // Remove o cartão de postagem da página
  const postCard = event.target.parentNode;
  postCard.remove();
}
const button = document.getElementById("handleSubmit");
const feedContainer = document.getElementById("feed-container");

let botaoExcluir = document.getElementsByClassName("delete-button");

// Função para carregar os dados do LocalStorage
async function loadPosts() {
//  const storedPosts = localStorage.getItem("posts");
 // if (storedPosts) {
  //  const posts = JSON.parse(storedPosts);

  try {
    const response = await fetch("http://localhost:3002/api/get/feed", {
      method: "GET",
      headers: { "Content-Type": "application/json;charset=UTF-8" }
    });

    const results = await response.json();
    console.log(results.data);
    for (const post of results.data) {

      const postCard = document.createElement("div");
      postCard.className = "post-card";

      const postText = document.createElement("p");
      postText.textContent = post.texto;

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Excluir";
      deleteButton.className = "delete-button";
      deleteButton.dataset.postId = post.id; // armazena o índice do post

      deleteButton.addEventListener("click", deletePost);

      postCard.appendChild(postText);
      postCard.appendChild(deleteButton);
      feedContainer.appendChild(postCard);

    }

    /*results.data.forEach((post) => {
      const postCard = document.createElement("div");
      postCard.className = "post-card";

      const postText = document.createElement("p");
      postText.textContent = post.inputText;

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Excluir";
      deleteButton.className = "delete-button";
      deleteButton.dataset.postId = posts.indexOf(post); // armazena o índice do post

      deleteButton.addEventListener("click", deletePost);

      postCard.appendChild(postText);
      postCard.appendChild(deleteButton);
      feedContainer.appendChild(postCard);
  
    });*/

  }catch (error) {
    console.error("Error:", error);
    alert("Erro ao fazer o GET!!");
  }
};

// Carregar os dados ao iniciar a página
loadPosts();

button.addEventListener("click", async function (e) {
  e.preventDefault();

  const inputText = document.getElementById("inputText").value;
  const data = { inputText };

  try {
    const response = await fetch("http://localhost:3002/api/store/feed", {
      method: "POST",
      headers: { "Content-Type": "application/json;charset=UTF-8" },
      body: JSON.stringify(data),
    });

    const results = await response.json();
    console.log(results);

    // Swal.fire aqui
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Sua postagem foi feita com sucesso",
      showConfirmButton: false,
      timer: 1500
    });

    // Salvar o post no LocalStorage
    const storedPosts = localStorage.getItem("posts");
    const posts = storedPosts ? JSON.parse(storedPosts) : [];
    posts.push(data);
    localStorage.setItem("posts", JSON.stringify(posts));

    // CARDS
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

async function deletePost(event) {
  const postId = event.target.dataset.postId;
  try {
    const response = await fetch(`http://localhost:3002/api/feed/${postId}`, {
      method: 'DELETE',
    });
    const data = await response.json();
    console.log('Resposta do servidor:', data);
    if (data.success) {
      console.log('Post excluído com sucesso');
      // Remover o cartão de postagem da página
      const postCard = event.target.parentNode;
      postCard.remove();
    } else {
      console.error('Falha ao excluir o post:', data.message);
    }
  } catch (error) {
    console.error('Erro ao fazer a requisição:', error);
  }
}

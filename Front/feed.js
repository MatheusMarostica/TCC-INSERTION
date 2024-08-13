const button = document.getElementById("handleSubmit");
const feedContainer = document.getElementById("feed-container");

// Função para carregar os dados do LocalStorage
function loadPosts() {
  const storedPosts = localStorage.getItem("posts");
  if (storedPosts) {
    const posts = JSON.parse(storedPosts);
    posts.forEach((post) => {
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
    });
  }
}

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
    if (results.success) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Sua postagem foi feita com sucesso",
          showConfirmButton: false,
          timer: 1500
        });

    } else {
        alert(results.message)
        console.log(results.data)
    }
    {
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
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Erro ao fazer o POST!!");
  }
});

// Função para excluir um post
function deletePost(event) {
  const postId = event.target.dataset.postId;
  const storedPosts = localStorage.getItem("posts");
  const posts = JSON.parse(storedPosts);
  posts.splice(postId, 1);
  localStorage.setItem("posts", JSON.stringify(posts));

  // Remover o cartão de postagem da página
  const postCard = event.target.parentNode;
  postCard.remove();
}
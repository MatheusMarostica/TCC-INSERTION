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

      postCard.appendChild(postText);
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

    const content = await response.json();
    console.log(content);

    if (content.success) {
      alert("Sucesso com o POST!!");

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

      postCard.appendChild(postText);
      feedContainer.appendChild(postCard);
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Erro ao fazer o POST!!");
  }
});
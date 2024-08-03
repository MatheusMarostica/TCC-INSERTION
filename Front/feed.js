const button = document.getElementById("handleSubmit");

button.addEventListener("click", async function (e) {
  e.preventDefault();

  const inputText = document.getElementById("inputText").value;
  const data = { inputText };

  try {
    const response = await fetch("http://localhost:3001/api/store/feed", {
      method: "POST",
      headers: { "Content-Type": "application/json;charset=UTF-8" },
      body: JSON.stringify(data),
    });

    const content = await response.json();
    console.log(content);

    if (content.success) {
      alert("Sucesso com o POST!!");

      // CARDS
      const postCard = document.createElement("div");
      postCard.className = "post-card";

      const postText = document.createElement("p");
      postText.textContent = inputText;

      postCard.appendChild(postText);

      const feedContainer = document.getElementById("feed-container");
      feedContainer.appendChild(postCard);
    }


  } catch (error) {
    console.error("Error:", error);
    alert("Erro ao fazer o POST!!");
  }
});

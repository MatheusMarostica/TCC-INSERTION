const userData = JSON.parse(localStorage.getItem('usuario'));
if (userData) {
  // Use os dados do usuário aqui
  console.log(userData);

  const name = document.getElementById("name")
  const email = document.getElementById("email")

  name.value = userData.nome
  email.value = userData.email

}
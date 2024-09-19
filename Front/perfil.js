// Recupera os dados do usuário armazenados no local storage e converte-os para um objeto JSON
const userData = JSON.parse(localStorage.getItem('usuario'));
console.log(userData); // Imprime os dados do usuário no console

// Define uma função que será executada quando o botão "perfil_enviar" for clicado
document.getElementById('perfil_enviar').onclick = async function(e) {
  // Impede que a página seja recarregada quando o botão for clicado (comportamento padrão do formulário)
  e.preventDefault();

  // Recupera os valores dos campos de formulário
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let senha = document.getElementById("senha").value;
  let id = Number(localStorage.getItem('id_user')); // Recupera o ID do usuário armazenado no local storage

  // Cria um objeto com os dados do usuário
  let data = { name, email, senha, id };

  // Envia uma requisição PUT para a API para atualizar os dados do usuário
  const response = await fetch('http://localhost:3002/api/store/userAtualizar', {
    method: 'PUT',
    headers: { "Content-Type": "application/json;charset=UTF-8" },
    body: JSON.stringify(data) // Converte o objeto de dados para uma string JSON
  });

  // Recupera a resposta da API e converte-a para um objeto JSON
  const results = await response.json();
  console.log(results); // Imprime a resposta da API no console

  // Verifica se a atualização foi bem-sucedida
  if (results.success) {
    // Exibe uma mensagem de sucesso
    Swal.fire({
      title: 'Sucesso!',
      text: 'Dados atualizados com sucesso!',
      icon: 'success',
      confirmButtonText: 'Ok'
    });
  } else {
    // Exibe uma mensagem de erro
    Swal.fire({
      title: 'Erro!',
      text: 'Erro ao atualizar dados!',
      icon: 'error',
      confirmButtonText: 'Ok'
    });
  }
};
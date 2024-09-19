// Função assíncrona para lidar com o envio do formulário de login
async function handleSubmit(event) {
  // Previne o comportamento padrão do formulário (enviar uma requisição GET)
  event.preventDefault();

  // Obtém os valores dos campos de email e senha
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  // Cria um objeto com os dados de login
  const data = {
    email, 
    senha
  };

  // Envia uma requisição POST para o servidor com os dados de login
  const response = await fetch('http://localhost:3002/api/store/login', {
    method: 'POST',
    headers: { "Content-Type": "application/json;charset=UTF-8" },
    body: JSON.stringify(data)
  });

  // Obtém a resposta do servidor em formato JSON
  const results = await response.json();
  console.log(results);

  // Verifica se o login foi bem-sucedido
  if (results.success) {
    // Exibe uma mensagem de sucesso
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Seu login foi feito com sucesso",
      showConfirmButton: false,
      timer: 1500
    }).then((result) => {
      // Redireciona para a página de início após 0 segundos
      if (result.dismiss === Swal.DismissReason.timer) {
        setTimeout(() => {
          // Salva o ID do usuário no LocalStorage
          localStorage.setItem('id_user', results.data[0].id);

          // Redireciona para a página de início
          window.location.href = "inicio.html";
        }, 0); // tempo de espera em milissegundos (0 segundos, pois o timer já foi executado)
      }
    });
  } else {
    // Exibe uma mensagem de erro
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Erro ao fazer login",
      text: results.message,
      showConfirmButton: true
    });
    console.log(results.data)
  }
}
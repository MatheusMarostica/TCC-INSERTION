// Função assíncrona para lidar com o envio do formulário
async function handleSubmit(event) {
  // Previne o comportamento padrão do formulário (enviar uma requisição GET)
  event.preventDefault();

  // Obtém os valores dos campos do formulário
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  const confirmesenha = document.getElementById("confirmesenha").value;

  // Verifica se as senhas coincidem
  if (senha !== confirmesenha) {
    // Se as senhas não coincidem, exibe uma mensagem de erro usando Sweet Alert
    Swal.fire({
      position: "center",
      icon: "error",
      title: "As senhas não coincidem",
      text: "Por favor, tente novamente.",
      showConfirmButton: true
    });
    return;
  }

  // Cria um objeto com os dados do formulário
  const data = {
    nome,
    email,
    senha
  };

  // Envia uma requisição POST para o servidor com os dados do formulário
  const response = await fetch('http://localhost:3002/api/store/user', {
    method: 'POST',
    headers: { "Content-Type": "application/json;charset=UTF-8" },
    body: JSON.stringify(data)
  });

  // Obtém a resposta do servidor em formato JSON
  const results = await response.json();
  console.log(results);

  // Verifica se o cadastro foi bem-sucedido
  if (results.success) {
    // Se o cadastro foi bem-sucedido, exibe uma mensagem de sucesso
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Seus cadastro foi feito com sucesso",
      showConfirmButton: false,
      timer: 1500
    }).then((result) => {
      // Redireciona para a página de login após 0 segundos
      if (result.dismiss === Swal.DismissReason.timer) {
        setTimeout(() => {
          window.location.href = "login.html";
        }, 0);
      }
    });
  } else {
    // Se o cadastro não foi bem-sucedido, exibe uma mensagem de erro
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Erro ao fazer o cadastro",
      text: results.message,
      showConfirmButton: true
    });
    console.log(results.data);
  }
}
const userData = JSON.parse(localStorage.getItem('usuario'));
console.log(userData);

document.getElementById('perfil_enviar').onclick = async function(e) {
  e.preventDefault(); // Impede de recarregar a página de acordo com o padrão do formulário

  let name = document.getElementById("name").value
  let email = document.getElementById("email").value
  let senha = document.getElementById("senha").value;
  let id = Number(localStorage.getItem('id_user'));

  let data = { name, email, senha, id };

  const response = await fetch('http://localhost:3002/api/store/userAtualizar', {
        method: 'PUT',
        headers: { "Content-Type": "application/json;charset=UTF-8" },
        body: JSON.stringify(data)
    })

    const results = await response.json();
    console.log(results);

    if(results.success) {
      Swal.fire({
        title: 'Sucesso!',
        text: 'Dados atualizados com sucesso!',
        icon: 'success',
        confirmButtonText: 'Ok'
      })
    } else {
      Swal.fire({
        title: 'Erro!',
        text: 'Erro ao atualizar dados!',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
    }

}
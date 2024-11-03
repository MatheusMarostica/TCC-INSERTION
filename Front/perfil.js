// perfil.js
document.addEventListener('DOMContentLoaded', async () => {
  const userId = localStorage.getItem('id_user');
  let senhaVisivel = false;

  // Configurar o botão de mostrar/esconder senha
  const toggleButton = document.getElementById('toggle-password');
  const senhaInput = document.getElementById('senha');
  const eyeIcon = document.getElementById('eye-icon');

  toggleButton.addEventListener('click', () => {
      senhaVisivel = !senhaVisivel;
      if (senhaVisivel) {
          senhaInput.type = 'text';
          eyeIcon.src = 'img/eye-open.png';
      } else {
          senhaInput.type = 'password';
          eyeIcon.src = 'img/eye-closed.png';
      }
  });

  try {
      // Buscar dados do usuário
      const response = await fetch(`http://localhost:3002/api/user/${userId}`, {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json'
          }
      });

      const result = await response.json();

      if (result.success) {
          // Preencher os campos com os dados do usuário
          const userData = result.data[0];
          document.getElementById('name').value = userData.nome;
          document.getElementById('email').value = userData.email;
          document.getElementById('senha').value = userData.senha;
      } else {
          console.error('Erro ao buscar dados do usuário');
          Swal.fire({
              icon: 'error',
              title: 'Erro',
              text: 'Não foi possível carregar os dados do usuário'
          });
      }
  } catch (error) {
      console.error('Erro na requisição:', error);
      Swal.fire({
          icon: 'error',
          title: 'Erro',
          text: 'Erro ao conectar com o servidor'
      });
  }

  // Adicionar evento de submit ao formulário
  document.getElementById('perfil_enviar').onclick = async function(e) {
      e.preventDefault();

      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const senha = document.getElementById('senha').value;
      const id = Number(userId);

      // Validações básicas
      if (!name || !email || !senha) {
          Swal.fire({
              icon: 'error',
              title: 'Erro',
              text: 'Por favor, preencha todos os campos'
          });
          return;
      }

      // Validar formato do email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
          Swal.fire({
              icon: 'error',
              title: 'Erro',
              text: 'Por favor, insira um email válido'
          });
          return;
      }

      const data = { name, email, senha, id };

      try {
          const response = await fetch('http://localhost:3002/api/store/userAtualizar', {
              method: 'PUT',
              headers: { "Content-Type": "application/json;charset=UTF-8" },
              body: JSON.stringify(data)
          });

          const results = await response.json();

          if (results.success) {
              Swal.fire({
                  icon: 'success',
                  title: 'Sucesso!',
                  text: 'Dados atualizados com sucesso!',
                  showConfirmButton: true
              }).then((result) => {
                  if (result.isConfirmed) {
                      window.location.href = 'profile.html';
                  }
              });
          } else {
              Swal.fire({
                  icon: 'error',
                  title: 'Erro',
                  text: 'Erro ao atualizar dados!'
              });
          }
      } catch (error) {
          console.error('Erro:', error);
          Swal.fire({
              icon: 'error',
              title: 'Erro',
              text: 'Erro ao conectar com o servidor'
          });
      }
  };
});
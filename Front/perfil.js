// Recupera os dados do usuário do banco de dados
fetch('/api/db_insertion')
  .then(response => response.json())
  .then(data => {
    // Preenche os dados do perfil
    perfilData.nome = data.nome;
    perfilData.email = data.email;
    perfilData.biografia = data.biografia;

    // Preenche a tela de perfil com os dados do usuário
    perfilHeader.querySelector('h2').textContent = `Perfil de ${perfilData.nome}`;
    perfilInfo.querySelector('p:nth-child(1)').textContent = `Nome: ${perfilData.nome}`;
    perfilInfo.querySelector('p:nth-child(2)').textContent = `Email: ${perfilData.email}`;
    perfilInfo.querySelector('p:nth-child(3)').textContent = `Biografia: ${perfilData.biografia}`;
  })
  .catch(error => console.error('Erro ao recuperar dados do usuário:', error));
  // backend.js
app.get('/api/db_insertion', (req, res) => {
    const userId = req.user.id; // Recupera o ID do usuário da sessão
    const userData = getUserDataFromDatabase(userId); // Recupera os dados do usuário do banco de dados
    res.json(userData);
  });
  
  function getUserDataFromDatabase(userId) {
    // Implemente a lógica para recuperar os dados do usuário do banco de dados
    // ...
    return {
      nome: 'João da Silva',
      email: 'joao@example.com',
      biografia: 'Desenvolvedor web e entusiasta de tecnologia.',
    };
  }
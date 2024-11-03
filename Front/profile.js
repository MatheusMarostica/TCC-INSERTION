document.addEventListener('DOMContentLoaded', async () => {
    // Recupera o ID do usuário do localStorage
    const userId = localStorage.getItem('id_user');

    try {
        // Faz uma requisição GET para buscar os dados do usuário
        const response = await fetch(`http://localhost:3002/api/user/${userId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const result = await response.json();

        if (result.success) {
            // Preenche os campos com os dados do usuário
            const userData = result.data[0]; // Assume que retorna um array com um único usuário
            document.getElementById('nome-usuario').textContent = userData.nome;
            document.getElementById('email-usuario').textContent = userData.email;
            document.getElementById('senha-usuario').textContent = '********'; // Por segurança, não exibimos a senha real
        } else {
            console.error('Erro ao buscar dados do usuário');
        }
    } catch (error) {
        console.error('Erro na requisição:', error);
    }
});
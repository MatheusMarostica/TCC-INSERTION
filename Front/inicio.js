// script.js
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('#card');

    cards.forEach(card => {
        card.addEventListener('click', function() {
            let title = card.querySelector('h5').innerText;
            let content;

            // Definindo o conteúdo do popup com base no card clicado
            switch (title) {
                case 'Esportes Coletivos':
                    content = 'Atividades sugeridas: Basquete adaptado, Futebol inclusivo, Vôlei sentado.';
                    break;
                case 'Atividades Recreativas':
                    content = 'Atividades sugeridas: Dança em grupo, Jogos de tabuleiro adaptados.';
                    break;
                case 'Exercícios ao ar livre':
                    content = 'Atividades sugeridas: Caminhadas em grupo, Corridas inclusivas.';
                    break;
                default:
                    content = 'Atividades variadas.';
            }

            // Exibindo o popup com SweetAlert2
            Swal.fire({
                title: title,
                text: content,
                icon: 'info',
                confirmButtonText: 'Fechar'
            });
        });
    });
});
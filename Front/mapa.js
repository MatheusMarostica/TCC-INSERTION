document.addEventListener("DOMContentLoaded", function() {
    var map = L.map('map').setView([-29.75831429389668, -51.15101134694835], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Estilos CSS para os popups
    var popupStyle = `
        <style>
            .popup-title {
                font-weight: bold;
                font-size: 1.2em;
                color: #2c3e50;
            }
            .popup-description {
                font-size: 1em;
                color: #34495e;
            }
            .popup-activities {
                margin-top: 1vh;
                font-style: italic;
                color: #16a085;
            }
        </style>
    `;

        // Função para adicionar marcador do usuário
        function addUserMarker(e) {
            // Criar popup com formulário
            var popupContent = `
                ${popupStyle}
                <div>
                    <input type="text" id="markerTitle" placeholder="Nome do local" style="margin-bottom: 5px; width: 100%;">
                    <textarea id="markerDesc" placeholder="Descrição" style="margin-bottom: 5px; width: 100%;"></textarea>
                    <button onclick="saveMarker()" style="width: 100%; background-color: #2ecc71; color: white; border: none; padding: 5px;">Salvar</button>
                </div>
            `;
    
            var marker = L.marker(e.latlng).addTo(map);
            marker.bindPopup(popupContent).openPopup();
            
            // Armazenar temporariamente o marcador
            window.currentMarker = marker;
        }
    
        // Adicionar evento de clique no mapa
        map.on('click', addUserMarker);
    
        // Função global para salvar o marcador
        window.saveMarker = function() {
            var title = document.getElementById('markerTitle').value;
            var desc = document.getElementById('markerDesc').value;
            
            if (!title || !desc) {
                alert('Por favor, preencha todos os campos');
                return;
            }
    
            var marker = window.currentMarker;
            var userId = localStorage.getItem('id_user');
    
            // Criar conteúdo final do popup
            var finalPopupContent = `
                ${popupStyle}
                <div class='popup-title'>${title}</div>
                <div class='popup-description'>${desc}</div>
            `;
    
            // Atualizar o popup do marcador
            marker.setPopupContent(finalPopupContent);
    
            // Salvar no localStorage
            var markers = JSON.parse(localStorage.getItem('userMarkers') || '[]');
            markers.push({
                lat: marker.getLatLng().lat,
                lng: marker.getLatLng().lng,
                title: title,
                description: desc,
                userId: userId
            });
            localStorage.setItem('userMarkers', JSON.stringify(markers));
    
            // Opcional: Enviar para o backend
            saveMarkerToBackend({
                lat: marker.getLatLng().lat,
                lng: marker.getLatLng().lng,
                title: title,
                description: desc,
                userId: userId
            });
        }
    
        // Função para salvar no backend (opcional)
        async function saveMarkerToBackend(markerData) {
            try {
                const response = await fetch('http://localhost:3002/api/markers', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(markerData)
                });
                const data = await response.json();
                if (data.success) {
                    console.log('Marcador salvo com sucesso!');
                }
            } catch (error) {
                console.error('Erro ao salvar marcador:', error);
            }
        }
    
        // Carregar marcadores salvos do localStorage
        function loadSavedMarkers() {
            const savedMarkers = JSON.parse(localStorage.getItem('userMarkers') || '[]');
            savedMarkers.forEach(markerData => {
                const marker = L.marker([markerData.lat, markerData.lng]).addTo(map);
                const popupContent = `
                    ${popupStyle}
                    <div class='popup-title'>${markerData.title}</div>
                    <div class='popup-description'>${markerData.description}</div>
                `;
                marker.bindPopup(popupContent);
            });
        }
    
        // Carregar marcadores salvos ao iniciar
        loadSavedMarkers();

    // São Leopoldo
    var marker = L.marker([-29.759480, -51.145054]).addTo(map);
    marker.bindPopup(popupStyle + "<div class='popup-title'>Ginasio Municipal</div><div class='popup-description'>Um espaço esportivo para eventos e atividades físicas.</div><div class='popup-activities'>Atividades: basquete, vôlei, e aulas de ginástica.</div>").openPopup();
    
    var marker8 = L.marker([-29.766922, -51.130276]).addTo(map);
    marker8.bindPopup(popupStyle + "<div class='popup-title'>Praça Elis Regina</div><div class='popup-description'>Uma praça com áreas verdes e espaço para eventos culturais.</div><div class='popup-activities'>Atividades: caminhadas, yoga ao ar livre, e piqueniques.</div>").openPopup();
    
    var marker9 = L.marker([-29.780588, -51.155533]).addTo(map);
    marker9.bindPopup(popupStyle + "<div class='popup-title'>Praça Mansueto Bernardi</div><div class='popup-description'>Um local de lazer e convivência para a comunidade.</div><div class='popup-activities'>Atividades: exercícios ao ar livre, jogos de tabuleiro, e encontros comunitários.</div>").openPopup();

    // Novo Hamburgo
    var marker2 = L.marker([-29.725177, -51.132524]).addTo(map);
    marker2.bindPopup(popupStyle + "<div class='popup-title'>Praça Walt Disney</div><div class='popup-description'>Uma praça temática com atrações para crianças e famílias.</div><div class='popup-activities'>Atividades: brincadeiras para crianças, caminhadas, e atividades recreativas.</div>").openPopup();

    // Sapucaia do Sul
    var marker3 = L.marker([-29.836008, -51.148745]).addTo(map);
    marker3.bindPopup(popupStyle + "<div class='popup-title'>Praça da Juventude</div><div class='popup-description'>Um espaço dedicado a atividades esportivas e culturais.</div><div class='popup-activities'>Atividades: futebol, vôlei de praia, e eventos culturais.</div>").openPopup();
    
    var marker4 = L.marker([-29.846106, -51.134586]).addTo(map);
    marker4.bindPopup(popupStyle + "<div class='popup-title'>Praça Vila Verde</div><div class='popup-description'>Um local tranquilo com áreas para piqueniques e relaxamento.</div><div class='popup-activities'>Atividades: piqueniques, leitura ao ar livre, e meditação.</div>").openPopup();
    
    var marker5 = L.marker([-29.827263, -51.156172]).addTo(map);
    marker5.bindPopup(popupStyle + "<div class='popup-title'>Praça da Prefeitura</div><div class='popup-description'>Praça central com eventos cívicos e culturais.</div><div class='popup-activities'>Atividades: eventos esportivos, feiras, e apresentações culturais.</div>").openPopup();

    // Esteio
    var marker6 = L.marker([-29.850422, -51.162979]).addTo(map);
    marker6.bindPopup(popupStyle + "<div class='popup-title'>Praça Coração de Maria</div><div class='popup-description'>Um espaço comunitário com áreas para lazer e eventos.</div><div class='popup-activities'>Atividades: aulas de dança, esportes coletivos, e eventos comunitários.</div>").openPopup();
    
    var marker7 = L.marker([-29.854565, -51.138128]).addTo(map);
    marker7.bindPopup(popupStyle + "<div class='popup-title'>Parque Municipal Galvani Guedes Dorneles</div><div class='popup-description'>Um parque com trilhas e áreas para atividades ao ar livre.</div><div class='popup-activities'>Atividades: caminhadas, corridas, e passeios de bicicleta.</div>").openPopup();

    // Canoas
    var marker8 = L.marker([-29.915154, -51.168153]).addTo(map);
    marker8.bindPopup(popupStyle + "<div class='popup-title'>Parque Getúlio Vargas</div><div class='popup-description'>Um parque com áreas verdes e espaço para eventos.</div><div class='popup-activities'>Atividades: piqueniques, caminhadas, e yoga no parque.</div>").openPopup();
    
    var marker9 = L.marker([-29.936733, -51.178491]).addTo(map);
    marker9.bindPopup(popupStyle + "<div class='popup-title'>Parque Eduardo Gomes</div><div class='popup-description'>Um parque popular para caminhadas e atividades recreativas.</div><div class='popup-activities'>Atividades: caminhadas, corridas, e atividades de lazer em família.</div>").openPopup();

    // Porto Alegre
    var marker10 = L.marker([-30.036423, -51.216133]).addTo(map);
    marker10.bindPopup(popupStyle + "<div class='popup-title'>Parque Redenção</div><div class='popup-description'>Um dos parques mais famosos da cidade, ideal para lazer e eventos.</div><div class='popup-activities'>Atividades: caminhadas, corridas, e eventos culturais ao ar livre.</div>").openPopup();
    
    var marker11 = L.marker([-30.056630, -51.231461]).addTo(map);
    marker11.bindPopup(popupStyle + "<div class='popup-title'>Parque Marinha do Brasil</div><div class='popup-description'>Um parque com lago e áreas para esportes e piqueniques.</div><div class='popup-activities'>Atividades: passeios de barco, ciclismo, e piqueniques em família.</div>").openPopup();
    
    var marker12 = L.marker([-30.025437, -51.157831]).addTo(map);
    marker12.bindPopup(popupStyle + "<div class='popup-title'>Parque Germânia</div><div class='popup-description'>Um parque com trilhas e áreas para atividades ao ar livre.</div><div class='popup-activities'>Atividades: trilhas para caminhada, corridas, e exercícios em grupo.</div>").openPopup();
});
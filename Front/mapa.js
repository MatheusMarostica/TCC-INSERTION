document.addEventListener("DOMContentLoaded", function() {
    var map = L.map('map').setView([-29.75831429389668, -51.15101134694835], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);


    //São Leopoldo
    var marker = L.marker([-29.759480, -51.145054]).addTo(map);
    marker.bindPopup("<b>Ginasio Municipal</b><br>").openPopup();
    var marker8 = L.marker([-29.766922, -51.130276]).addTo(map);
    marker8.bindPopup("<b>Praça Elis Regina</b><br>").openPopup();
    var marker9 = L.marker([-29.780588, -51.155533]).addTo(map);
    marker9.bindPopup("<b>Praça Mansueto Bernardi</b><br>").openPopup();

    //Novo Hamburgo
    var marker2 = L.marker([-29.725177, -51.132524]).addTo(map);
    marker2.bindPopup("<b>Praça Walt Disney</b><br>").openPopup();

    //Sapucaia do Sul
    var marker3 = L.marker([-29.836008, -51.148745]).addTo(map);
    marker3.bindPopup("<b>Praça da Juventude</b><br>").openPopup();
    var marker4 = L.marker([-29.846106, -51.134586]).addTo(map);
    marker4.bindPopup("<b>Praça Vila Verde</b><br>").openPopup();
    var marker5 = L.marker([-29.827263, -51.156172]).addTo(map);
    marker5.bindPopup("<b>Praça da Prefeitura</b><br>").openPopup();

    //Esteio
    var marker6 = L.marker([-29.850422, -51.162979]).addTo(map);
    marker6.bindPopup("<b>Praça Coração de Maria</b><br>").openPopup();
    var marker7 = L.marker([-29.854565, -51.138128]).addTo(map);
    marker7.bindPopup("<b>Parque Municipal Galvani Guedes Dorneles</b><br>").openPopup();

    //Canoas
    var marker8 = L.marker([-29.915154, -51.168153]).addTo(map);
    marker8.bindPopup("<b>Parque Getúlio Vargas</b><br>").openPopup();
    var marker9 = L.marker([-29.936733, -51.178491]).addTo(map);
    marker9.bindPopup("<b>Parque Eduardo Gomes</b><br>").openPopup();

    //Porto Alegre
    var marker10 = L.marker([-30.036423, -51.216133]).addTo(map);
    marker10.bindPopup("<b>Parque Redenção</b><br>").openPopup();
    var marker11 = L.marker([-30.056630, -51.231461]).addTo(map);
    marker11.bindPopup("<b>Parque Marinha do Brasil</b><br>").openPopup();
    var marker12 = L.marker([-30.025437, -51.157831]).addTo(map);
    marker12.bindPopup("<b>Parque Germânia</b><br>").openPopup();
});

/*
document.addEventListener("DOMContentLoaded", function() {
    var map = L.map('map').setView([-29.75831429389668, -51.15101134694835], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Função para calcular e mostrar a distância
    function showDistanceToMarkers(userLatLng) {
        var markers = [
            { lat: -29.759480, lng: -51.145054, name: "Ginasio Municipal" },
            { lat: -29.766922, lng: -51.130276, name: "Praça Elis Regina" },
            { lat: -29.780588, lng: -51.155533, name: "Praça Mansueto Bernardi" },
            { lat: -29.725177, lng: -51.132524, name: "Praça Walt Disney" },
            { lat: -29.836008, lng: -51.148745, name: "Praça da Juventude" },
            { lat: -29.846106, lng: -51.134586, name: "Praça Vila Verde" },
            { lat: -29.827263, lng: -51.156172, name: "Praça da Prefeitura" },
            { lat: -29.850422, lng: -51.162979, name: "Praça Coração de Maria" },
            { lat: -29.854565, lng: -51.138128, name: "Parque Municipal Galvani Guedes Dorneles" }
        ];

        markers.forEach(function(marker) {
            var markerLatLng = L.latLng(marker.lat, marker.lng);
            var distance = userLatLng.distanceTo(markerLatLng).toFixed(2); // distância em metros
            var popupContent = `<b>${marker.name}</b><br>Distância: ${distance} metros`;
            var markerInstance = L.marker(markerLatLng).addTo(map);
            markerInstance.bindPopup(popupContent).openPopup();
        });
    }

    // Obter a localização do usuário
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var userLatLng = L.latLng(position.coords.latitude, position.coords.longitude);
            L.marker(userLatLng).addTo(map).bindPopup("Você está aqui").openPopup();
            map.setView(userLatLng, 13); // Centraliza o mapa na localização do usuário
            showDistanceToMarkers(userLatLng); // Mostra a distância para os marcadores
        }, function() {
            alert("Não foi possível obter a localização do usuário.");
        });
    } else {
        alert("Geolocalização não é suportada por este navegador.");
    }
});
*/
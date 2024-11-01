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

});





    document.addEventListener("DOMContentLoaded", function() {
        var map = L.map('map').setView([-29.75831429389668, -51.15101134694835], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
    });

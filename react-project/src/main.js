document.addEventListener('DOMContentLoaded', function() {
    // Inicializar el mapa
    var map = L.map('map').setView([21.8818, -102.2916], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Función para limpiar los campos
    document.getElementById('clearFields').addEventListener('click', function() {
        document.getElementById('rawTranscription').value = '';
        document.getElementById('emergency').value = '';
        document.getElementById('address').value = '';
        document.getElementById('description').value = '';
    });

    // Ejemplo de cómo añadir un marcador al mapa
    function addMarker(lat, lng, popupContent) {
        L.marker([lat, lng]).addTo(map)
            .bindPopup(popupContent)
            .openPopup();
    }

    // Ejemplo de uso:
    addMarker(21.8818, -102.2916, "Emergencia reportada: Accidente de tráfico");
});
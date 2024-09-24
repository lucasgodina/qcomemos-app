document.addEventListener('DOMContentLoaded', function() {
    // Manejo del formulario para agregar lugar
    document.getElementById("addPlaceForm")?.addEventListener("submit", function(event) {
        let placeName = document.getElementById("placeName").value.trim();
        let placeAddress = document.getElementById("address").value.trim(); // Asegúrate de que el ID sea correcto
        let placeDescription = document.getElementById("description").value.trim(); // Asegúrate de que el ID sea correcto

        if (placeName === "" || placeAddress === "" || placeDescription === "") {
            event.preventDefault();
            alert("Por favor, completa todos los campos obligatorios.");
        }
    });
});

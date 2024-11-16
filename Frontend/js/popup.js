// Abre y cierra los pop-ups
document.querySelectorAll('.settings-section ul li').forEach((button) => {
    button.addEventListener('click', function(event) {
        const popupId = this.getAttribute('onclick').match(/'([^']+)'/)[1]; // Obtiene el ID del popup
        document.getElementById(popupId).style.display = 'block';
    });
});

// Cierra el pop-up cuando se hace clic en el botón de cerrar
document.querySelectorAll('.close').forEach(span => {
    span.addEventListener('click', function() {
        const popup = this.closest('.popup');
        popup.style.display = 'none';
    });
});

// Cierra el pop-up si el usuario hace clic fuera de él
window.addEventListener('click', function(event) {
    const popups = document.querySelectorAll('.popup');
    popups.forEach(popup => {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });
});

// Cierra los pop-ups cuando se presiona la tecla Esc
window.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const popups = document.querySelectorAll('.popup');
        popups.forEach(popup => {
            popup.style.display = 'none';
        });
    }
});

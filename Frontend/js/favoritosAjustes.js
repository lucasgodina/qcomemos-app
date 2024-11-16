document.addEventListener('DOMContentLoaded', function () {
   

    // Manejo de acordeones para ajustes
    document.querySelectorAll('.accordion-button').forEach(acc => {
        acc.addEventListener('click', function() {
            const content = this.nextElementSibling;

            // Cerrar otros acordeones
            document.querySelectorAll('.accordion-content').forEach(otherContent => {
                if (otherContent !== content) {
                    otherContent.style.display = 'none';
                }
            });

            // Alternar el acordeón actual
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        });
    });
});

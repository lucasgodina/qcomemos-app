// Obtener elementos
const modal = document.getElementById("modalElJardin");
const img = document.getElementById("eljardin");
const span = document.getElementsByClassName("close")[0];
const commentBox = document.getElementById("userComment");
const submitComment = document.getElementById("submitComment");
const commentsList = document.getElementById("commentsList");
const exampleReviews = document.getElementById("exampleReviews");

// Reseñas de ejemplo
const reviews = [
    "¡Increíble experiencia! La comida estaba deliciosa.",
    "Un lugar mágico, perfecto para una cena romántica.",
    "El servicio fue excelente, volveré sin duda."
];

// Mostrar reseñas de ejemplo al abrir el modal
function displayExampleReviews() {
    reviews.forEach(review => {
        const reviewElement = document.createElement("p");
        reviewElement.textContent = review;
        exampleReviews.appendChild(reviewElement);
    });
}

// Abrir modal al hacer clic en la imagen de El Jardín
img.onclick = function() {
    modal.style.display = "block";
    displayExampleReviews(); // Mostrar reseñas de ejemplo
}

// Cerrar modal al hacer clic en la "x"
span.onclick = function() {
    modal.style.display = "none";
    exampleReviews.innerHTML = ""; // Limpiar reseñas de ejemplo al cerrar
}

// Cerrar modal si se hace clic fuera de la ventana
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        exampleReviews.innerHTML = ""; // Limpiar reseñas de ejemplo al cerrar
    }
}

// Enviar comentario
submitComment.onclick = function() {
    const userCommentText = commentBox.value;
    if (userCommentText !== "") {
        const newComment = document.createElement("p");
        newComment.textContent = userCommentText;
        commentsList.appendChild(newComment);
        commentBox.value = ""; // Limpiar la caja de comentarios
    }
}
/**
 * Funciones y lógica del frontend
 */

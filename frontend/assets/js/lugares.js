document.addEventListener('DOMContentLoaded', function () {
    // Obtener elementos para El Jardín
    const modalElJardin = document.getElementById("modalElJardin");
    const imgElJardin = document.getElementById("eljardin");
    const spanElJardin = modalElJardin?.querySelector(".close");
    const commentBoxJardin = document.getElementById("userCommentElJardin");
    const submitCommentJardin = document.getElementById("submitCommentElJardin");
    const commentsListJardin = document.getElementById("commentsListElJardin");
    const exampleReviewsJardin = document.getElementById("exampleReviewsElJardin");

    // Obtener elementos para El Bodegón
    const modalElBodegon = document.getElementById("modalElBodegon");
    const imgElBodegon = document.getElementById("elbodegon");
    const spanElBodegon = modalElBodegon?.querySelector(".close");
    const commentBoxBodegon = document.getElementById("userCommentBodegon");
    const submitCommentBodegon = document.getElementById("submitCommentBodegon");
    const commentsListBodegon = document.getElementById("commentsListBodegon");
    const exampleReviewsBodegon = document.getElementById("exampleReviewsBodegon");

    // Obtener las estrellas de calificación
    const ratingStarsJardin = document.querySelectorAll('#modalElJardin .star-rating input');
    const ratingStarsBodegon = document.querySelectorAll('#modalElBodegon .star-rating input');

    // Función para obtener la calificación seleccionada
    function getSelectedRating(ratingStars) {
        let ratingValue = null;
        ratingStars.forEach((input) => {
            if (input.checked) {
                ratingValue = input.value;
            }
        });
        return ratingValue;
    }

    // Abrir el modal de El Jardín
    imgElJardin?.addEventListener("click", function () {
        modalElJardin.style.display = "block";
        displayExampleReviews(reviewsElJardin, exampleReviewsJardin); // Mostrar reseñas precargadas
    });

    // Cerrar el modal de El Jardín
    spanElJardin?.addEventListener("click", function () {
        modalElJardin.style.display = "none";
        clearReviews(exampleReviewsJardin, commentsListJardin);
    });

    // Enviar reseña para El Jardín
    submitCommentJardin?.addEventListener("click", function () {
        const userComment = commentBoxJardin.value;
        const ratingValue = getSelectedRating(ratingStarsJardin);
        if (userComment.trim() === "") {
            alert("Por favor, escribe tu reseña.");
            return;
        }
        if (ratingValue === null) {
            alert("Por favor, selecciona una calificación.");
            return;
        }
        const reviewElement = document.createElement("p");
        reviewElement.textContent = `Tú: ${userComment} (Calificación: ${ratingValue})`;
        commentsListJardin.appendChild(reviewElement);
        commentBoxJardin.value = ""; // Limpiar el cuadro de texto
        resetStars(ratingStarsJardin); // Resetear las estrellas
    });

    // Abrir el modal de El Bodegón
    imgElBodegon?.addEventListener("click", function () {
        modalElBodegon.style.display = "block";
        displayExampleReviews(reviewsElBodegon, exampleReviewsBodegon); // Mostrar reseñas precargadas
    });

    // Cerrar el modal de El Bodegón
    spanElBodegon?.addEventListener("click", function () {
        modalElBodegon.style.display = "none";
        clearReviews(exampleReviewsBodegon, commentsListBodegon);
    });

    // Enviar reseña para El Bodegón
    submitCommentBodegon?.addEventListener("click", function () {
        const userComment = commentBoxBodegon.value;
        const ratingValue = getSelectedRating(ratingStarsBodegon);
        if (userComment.trim() === "") {
            alert("Por favor, escribe tu reseña.");
            return;
        }
        if (ratingValue === null) {
            alert("Por favor, selecciona una calificación.");
            return;
        }
        const reviewElement = document.createElement("p");
        reviewElement.textContent = `Tú: ${userComment} (Calificación: ${ratingValue})`;
        commentsListBodegon.appendChild(reviewElement);
        commentBoxBodegon.value = ""; // Limpiar el cuadro de texto
        resetStars(ratingStarsBodegon); // Resetear las estrellas
    });

    // Cerrar el modal cuando se hace clic fuera de él
    window.onclick = function (event) {
        if (event.target === modalElJardin) {
            modalElJardin.style.display = "none";
            clearReviews(exampleReviewsJardin, commentsListJardin);
        } else if (event.target === modalElBodegon) {
            modalElBodegon.style.display = "none";
            clearReviews(exampleReviewsBodegon, commentsListBodegon);
        }
    };

    // Limpiar reseñas de ejemplo al cerrar el modal
    function clearReviews(exampleReviews, commentsList) {
        exampleReviews.innerHTML = ""; // Limpiar las reseñas
        commentsList.innerHTML = ""; // Limpiar las reseñas enviadas
    }

    // Mostrar reseñas precargadas de forma genérica
    function displayExampleReviews(reviewsArray, exampleReviewsContainer) {
        exampleReviewsContainer.innerHTML = ""; // Limpiar las reseñas anteriores
        reviewsArray.forEach(review => {
            const reviewElement = document.createElement("p");
            reviewElement.textContent = review;
            exampleReviewsContainer.appendChild(reviewElement);
        });
    }

    // Reseñas de ejemplo para El Jardín
    const reviewsElJardin = [
        "Pablo: ¡Increíble experiencia! La comida estaba deliciosa.",
        "Julio: Un lugar mágico, perfecto para una cena romántica.",
    ];

    // Reseñas de ejemplo para El Bodegón
    const reviewsElBodegon = [
        "María: Un ambiente acogedor y comida exquisita.",
        "Carlos: Ideal para salir con amigos, lo recomiendo.",
    ];

    // Añadir eventos de hover para las estrellas
    addStarHoverEvents(ratingStarsJardin);
    addStarHoverEvents(ratingStarsBodegon);

    // Añadir hover en las estrellas
    function addStarHoverEvents(ratingStars) {
        ratingStars.forEach((input, index) => {
            // Resaltar las estrellas al pasar el mouse
            input.addEventListener('mouseover', function () {
                highlightStars(index, ratingStars);
            });

            // Quitar el resaltado de las estrellas al salir del mouse
            input.addEventListener('mouseout', function () {
                resetStars(ratingStars);
            });

            // Seleccionar una estrella (click)
            input.addEventListener('click', function () {
                selectStars(index, ratingStars);
                updateStarsDisplay(ratingStars, index + 1); // Actualizar las estrellas visualmente
            });
        });
    }

    // Función para resaltar las estrellas
    function highlightStars(index, ratingStars) {
        ratingStars.forEach((input, i) => {
            const starIcon = input.nextElementSibling;
            if (i <= index) {
                starIcon.classList.add('hovered');
            }
        });
    }

    // Función para quitar el resaltado de las estrellas
    function resetStars(ratingStars) {
        ratingStars.forEach(input => {
            const starIcon = input.nextElementSibling;
            starIcon.classList.remove('hovered');
        });
    }

    // Función para seleccionar las estrellas permanentemente
    function selectStars(index, ratingStars) {
        ratingStars.forEach((input, i) => {
            const starIcon = input.nextElementSibling;
            if (i <= index) {
                starIcon.classList.add('selected');
            } else {
                starIcon.classList.remove('selected');
            }
        });
    }

    // Actualizar las estrellas visualmente cuando el usuario selecciona una calificación
    function updateStarsDisplay(ratingStars, ratingValue) {
        ratingStars.forEach((input, index) => {
            const starIcon = input.nextElementSibling;
            if (index < ratingValue) {
                starIcon.classList.add('selected');
            } else {
                starIcon.classList.remove('selected');
            }
        });
    }

// Función para agregar a favoritos
    function addToFavorites(placeName, placeAddress, placeImage) {
        const favoritePlaces = JSON.parse(localStorage.getItem('favoritePlaces')) || [];
        const isAlreadyFavorite = favoritePlaces.some(place => place.name === placeName);
        if (isAlreadyFavorite) {
            alert("Este lugar ya está en tu lista de favoritos.");
            return;
        }
        // Agregar lugar a la lista de favoritos
        favoritePlaces.push({ name: placeName, address: placeAddress, image: placeImage });
        localStorage.setItem('favoritePlaces', JSON.stringify(favoritePlaces));
        alert(`${placeName} ha sido agregado a tus favoritos.`);
    }

    // Obtener los botones de "Agregar a favoritos"
    const addToFavoritesButtons = document.querySelectorAll('.add-to-favorites');
    addToFavoritesButtons.forEach(button => {
        button.addEventListener('click', function () {
            const placeCard = this.closest('.place-card'); // Accede a la tarjeta del lugar
            const placeName = placeCard.querySelector('.place-title').innerText;
            const placeAddress = placeCard.querySelector('.place-address').innerText;
            const placeImage = placeCard.querySelector('.place-image').src;

            // Llamar a la función para agregar a favoritos
            addToFavorites(placeName, placeAddress, placeImage);
        });
    });

    // Referencia al botón y modal de favoritos
    const showFavoritesButton = document.getElementById('mis-favoritos');
    const favoritesModal = document.getElementById('favoritesModal');
    const closeModal = favoritesModal.querySelector('.close');
    const favoritesList = document.getElementById('favoritesList');

    function displayFavorites() {
        const favoritePlaces = JSON.parse(localStorage.getItem('favoritePlaces')) || [];
        favoritesList.innerHTML = '';
        if (favoritePlaces.length === 0) {
            favoritesList.innerHTML = '<p>No tienes lugares favoritos aún.</p>';
        } else {
            favoritePlaces.forEach((place, index) => {
                const placeElement = document.createElement('div');
                placeElement.classList.add('favorite-item');
                placeElement.innerHTML = `
                <h3>${place.name}</h3>
                <p>Dirección: ${place.address}</p>
                <img src="${place.image}" alt="${place.name}" style="width: 100px;">
                <button class="remove-favorite" data-index="${index}">Eliminar de favoritos</button>
            `;
                favoritesList.appendChild(placeElement);
            });

            // Funcionalidad para eliminar favoritos
            document.querySelectorAll('.remove-favorite').forEach(button => {
                button.addEventListener('click', function () {
                    const index = this.getAttribute('data-index');
                    removeFavorite(index);
                });
            });
        }
    }

    function removeFavorite(index) {
        let favoritePlaces = JSON.parse(localStorage.getItem('favoritePlaces')) || [];
        favoritePlaces.splice(index, 1);
        localStorage.setItem('favoritePlaces', JSON.stringify(favoritePlaces));
        displayFavorites();
        alert('El lugar ha sido eliminado de tus favoritos.');
    }

    // Mostrar modal de favoritos
    showFavoritesButton.addEventListener('click', function () {
        displayFavorites();
        favoritesModal.style.display = 'block';
    });

    // Cerrar modal de favoritos
    closeModal.addEventListener('click', function () {
        favoritesModal.style.display = 'none';
    });

    // Cerrar modal al hacer clic fuera
    window.addEventListener('click', function (event) {
        if (event.target === favoritesModal) {
            favoritesModal.style.display = 'none';
        }
    });


    // Filtrado
    const filterButtons = document.querySelectorAll('.filter-button');
    const places = document.querySelectorAll('.place-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            const filter = this.textContent.toLowerCase(); // Obtiene el texto del botón

            places.forEach(place => {
                const category = place.getAttribute('data-category');

                // Si se selecciona "Todo" o si el lugar coincide con la categoría seleccionada, se muestra
                if (filter === 'todo' || category === filter) {
                    place.style.display = 'block'; // Muestra el lugar
                } else {
                    place.style.display = 'none';  // Oculta el lugar
                }
            });
        });
    });

});

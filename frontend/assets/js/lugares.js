document.addEventListener('DOMContentLoaded', function () {
    // Obtener elementos para El Jardín y El Bodegón
    const modalElJardin = document.getElementById("modalElJardin");
    const imgElJardin = document.getElementById("eljardin");
    const spanElJardin = modalElJardin?.querySelector(".close");
    const commentBoxJardin = document.getElementById("userCommentElJardin");
    const submitCommentJardin = document.getElementById("submitCommentElJardin");
    const commentsListJardin = document.getElementById("commentsListElJardin");
    const exampleReviewsJardin = document.getElementById("exampleReviewsElJardin");

    const modalElBodegon = document.getElementById("modalElBodegon");
    const imgElBodegon = document.getElementById("elbodegon");
    const spanElBodegon = modalElBodegon?.querySelector(".close");
    const commentBoxBodegon = document.getElementById("userCommentBodegon");
    const submitCommentBodegon = document.getElementById("submitCommentBodegon");
    const commentsListBodegon = document.getElementById("commentsListBodegon");
    const exampleReviewsBodegon = document.getElementById("exampleReviewsBodegon");

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

    // Mostrar modales y manejar reseñas (El Jardín y El Bodegón)
    imgElJardin?.addEventListener("click", function () {
        modalElJardin.style.display = "block";
        displayExampleReviews(reviewsElJardin, exampleReviewsJardin);
    });

    spanElJardin?.addEventListener("click", function () {
        modalElJardin.style.display = "none";
        clearReviews(exampleReviewsJardin, commentsListJardin);
    });

    submitCommentJardin?.addEventListener("click", function () {
        const userComment = commentBoxJardin.value;
        const ratingValue = getSelectedRating(ratingStarsJardin);
        if (userComment.trim() === "" || ratingValue === null) {
            alert("Por favor, escribe tu reseña y selecciona una calificación.");
            return;
        }
        const reviewElement = document.createElement("p");
        reviewElement.textContent = `Tú: ${userComment} (Calificación: ${ratingValue})`;
        commentsListJardin.appendChild(reviewElement);
        commentBoxJardin.value = "";
        resetStars(ratingStarsJardin);
    });

    imgElBodegon?.addEventListener("click", function () {
        modalElBodegon.style.display = "block";
        displayExampleReviews(reviewsElBodegon, exampleReviewsBodegon);
    });

    spanElBodegon?.addEventListener("click", function () {
        modalElBodegon.style.display = "none";
        clearReviews(exampleReviewsBodegon, commentsListBodegon);
    });

    submitCommentBodegon?.addEventListener("click", function () {
        const userComment = commentBoxBodegon.value;
        const ratingValue = getSelectedRating(ratingStarsBodegon);
        if (userComment.trim() === "" || ratingValue === null) {
            alert("Por favor, escribe tu reseña y selecciona una calificación.");
            return;
        }
        const reviewElement = document.createElement("p");
        reviewElement.textContent = `Tú: ${userComment} (Calificación: ${ratingValue})`;
        commentsListBodegon.appendChild(reviewElement);
        commentBoxBodegon.value = "";
        resetStars(ratingStarsBodegon);
    });

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


    // Filtrado de lugares
    const filterButtons = document.querySelectorAll('.filter-button');
    const places = document.querySelectorAll('.place-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            const filter = this.textContent.toLowerCase(); // Obtener el filtro seleccionado
            places.forEach(place => {
                const categories = place.getAttribute('data-category').split(','); // Obtener y dividir las categorías
                // Verificar si el filtro es 'todo' o si está en el array de categorías
                if (filter === 'todo' || categories.includes(filter)) {
                    place.style.display = 'block'; // Mostrar el lugar
                } else {
                    place.style.display = 'none'; // Ocultar el lugar
                }
            });
        });
    });

});

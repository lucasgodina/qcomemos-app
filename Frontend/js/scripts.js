const apiUrl = 'http://localhost:3001/api/';

document
	.getElementById('register-button')
	.addEventListener('click', function () {
		const email = document.getElementById('email').value;
		const password = document.getElementById('password').value;
		const confirm_password = document.getElementById('confirm-password').value;
		const nombre_usuario = document.getElementById('nombre_usuario').value;
		const fecha_nacimiento = document.getElementById('fecha_nacimiento').value;
		const lugar_usuario = document.getElementById('lugar_usuario').value;

		fetch(apiUrl + 'usuario', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
				confirm_password,
				nombre_usuario,
				fecha_nacimiento,
				lugar_usuario,
			}),
		})
			.then((response) => {
				if (!response.ok) {
					// Captura el error y muestra más detalles
					return response.text().then((text) => {
						console.error('Error del servidor:', text);
						throw new Error(
							`Error del servidor: ${response.status} ${response.statusText}`
						);
					});
				}
				return response.json(); // Si la respuesta es válida, se convierte a JSON
			})
			.then((registro) => {
				alert('Registro creado con éxito:', registro);
			})
			.catch((error) => {
				alert('Error al crear registro:', error.message);
			});
	});

document.addEventListener('DOMContentLoaded', function () {
	// Obtener elementos
	const modal = document.getElementById('modalElJardin');
	if (!modal) {
		console.error("Elemento con ID 'modalElJardin' no encontrado.");
		return; // Salir si no se encuentra el elemento
	}

	const img = document.getElementById('eljardin');
	if (!img) {
		console.error("Elemento con ID 'eljardin' no encontrado.");
		return; // Salir si no se encuentra el elemento
	}
	const span = document.getElementsByClassName('close')[0];
	const commentBox = document.getElementById('userComment');
	const submitComment = document.getElementById('submitComment');
	const commentsList = document.getElementById('commentsList');
	const exampleReviews = document.getElementById('exampleReviews');

	// Reseñas de ejemplo
	const reviews = [
		'¡Increíble experiencia! La comida estaba deliciosa.',
		'Un lugar mágico, perfecto para una cena romántica.',
		'El servicio fue excelente, volveré sin duda.',
	];

	// Mostrar reseñas de ejemplo al abrir el modal
	function displayExampleReviews() {
		exampleReviews.innerHTML = ''; // Limpiar reseñas anteriores
		reviews.forEach((review) => {
			const reviewElement = document.createElement('p');
			reviewElement.textContent = review;
			exampleReviews.appendChild(reviewElement);
		});
	}

	// Abrir modal al hacer clic en la imagen de El Jardín
	img.onclick = function () {
		modal.style.display = 'block';
		displayExampleReviews(); // Mostrar reseñas de ejemplo
	};

	// Cerrar modal al hacer clic en la "x"
	if (span) {
		span.onclick = function () {
			modal.style.display = 'none';
			exampleReviews.innerHTML = ''; // Limpiar reseñas de ejemplo al cerrar
		};
	}

	// Cerrar modal si se hace clic fuera de la ventana
	window.onclick = function (event) {
		if (event.target == modal) {
			modal.style.display = 'none';
			exampleReviews.innerHTML = ''; // Limpiar reseñas de ejemplo al cerrar
		}
	};

	// Enviar comentario
	submitComment.onclick = function () {
		const userCommentText = commentBox.value;
		if (userCommentText !== '') {
			const newComment = document.createElement('p');
			newComment.textContent = userCommentText;
			commentsList.appendChild(newComment);
			commentBox.value = ''; // Limpiar la caja de comentarios
		}
	};

	// Manejo del formulario para agregar lugar
	document
		.getElementById('addPlaceForm')
		?.addEventListener('submit', function (event) {
			let placeName = document.getElementById('placeName').value.trim();
			let placeAddress = document.getElementById('placeAddress').value.trim();
			let placeDescription = document
				.getElementById('placeDescription')
				.value.trim();

			if (placeName === '' || placeAddress === '' || placeDescription === '') {
				event.preventDefault();
				alert('Por favor, completa todos los campos obligatorios.');
			}
		});

	// Manejo de acordeones para ajustes
	document.querySelectorAll('.accordion-button').forEach((acc) => {
		acc.addEventListener('click', function () {
			const content = this.nextElementSibling;

			// Cerrar otros acordeones
			document
				.querySelectorAll('.accordion-content')
				.forEach((otherContent) => {
					if (otherContent !== content) {
						otherContent.style.display = 'none';
					}
				});

			// Alternar el acordeón actual
			content.style.display =
				content.style.display === 'block' ? 'none' : 'block';
		});
	});
});

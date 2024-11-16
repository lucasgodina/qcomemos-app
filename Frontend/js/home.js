document.addEventListener('DOMContentLoaded', function () {
    // Simulación de autenticación
    const usuarioAutenticado = localStorage.getItem('usuario'); // Usar `localStorage` para obtener los datos de usuario

    if (usuarioAutenticado) {
        mostrarDatosUsuario(JSON.parse(usuarioAutenticado));
    }
});

// Función para mostrar los datos del usuario
function mostrarDatosUsuario(usuario) {
    const navButtons = document.getElementById('nav-buttons');

    // Limpiar los botones existentes
    navButtons.innerHTML = '';

    // Crear elementos para mostrar el perfil del usuario
    const userInfo = document.createElement('div');
    userInfo.classList.add('user-info');

    const userImage = document.createElement('img');
    userImage.src = usuario.foto || 'imagenes/default-user.png'; // Imagen de perfil por defecto si no tiene foto
    userImage.alt = 'Foto del usuario';
    userImage.classList.add('user-photo');

    const userName = document.createElement('span');
    userName.textContent = usuario.nombre;
    userName.classList.add('user-name');

    // Agregar los elementos al DOM
    userInfo.appendChild(userImage);
    userInfo.appendChild(userName);
    navButtons.appendChild(userInfo);
}

// Función para cerrar sesión
function cerrarSesion() {
    // Eliminar los datos del usuario de localStorage
    localStorage.removeItem('usuario');
    
    // Redirigir al usuario a la página de login
    window.location.href = "login.html"; // Redirigir a la página de login
    // O recargar la página de inicio con: location.reload();
}

// Agregar evento al botón de cerrar sesión
document.getElementById('logout-button').addEventListener('click', cerrarSesion);

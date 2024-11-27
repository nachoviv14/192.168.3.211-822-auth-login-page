// Referencias a los elementos
const button = document.getElementById('conexion-btn');
const videoContainer = document.getElementById('fullscreen-video');
const video = document.getElementById('troll-video');

// Evento de clic en el botón
button.addEventListener('click', () => {
    console.log("Botón presionado"); // Verifica si el evento se detecta
    videoContainer.style.display = 'block'; // Muestra el contenedor
    video.muted = false; // Activa el audio
    video.volume = 1.0;  // Volumen al máximo
    video.play().then(() => {
        console.log("Video en reproducción"); // Verifica si el video se reproduce
    }).catch(err => console.error("Error al reproducir el video:", err));
});

// Oculta el video al terminar
video.addEventListener('ended', () => {
    console.log("Video terminado"); // Verifica si el video termina
    videoContainer.style.display = 'none';
});

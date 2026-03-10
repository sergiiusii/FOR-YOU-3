const boton = document.getElementById('botonSorpresa');
const mensaje = document.getElementById('mensajeOculto');

boton.addEventListener('click', function() {
  // 1. Lanzamos el confeti
  confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 },
    colors: ['#ff4d4d', '#ffcccc', '#ffffff'] // Colores románticos
  });

  // 2. Mostramos el mensaje con un pequeño retraso para la sorpresa
  setTimeout(() => {
    mensaje.style.display = 'block';
    boton.style.display = 'none';
  }, 500);
});
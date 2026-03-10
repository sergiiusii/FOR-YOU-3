const boton = document.getElementById('botonSorpresa');
const mensaje = document.getElementById('mensajeOculto');

boton.addEventListener('click', function() {
  mensaje.style.display = 'block'; 
  boton.style.display = 'none';    
});
// Obtener referencias a los elementos del DOM
const formulario = document.querySelector('form');
const pagina = document.getElementById('pagina');

// Agregar un event listener al formulario para escuchar el evento de envío
formulario.addEventListener('submit', (event) => {
  event.preventDefault(); // Evitar que el formulario se envíe de forma predeterminada

  // Ocultar el formulario
  formulario.style.display = 'none';

  // Mostrar el contenido de la página
  pagina.style.display = 'block';
});


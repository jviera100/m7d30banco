/* Reset de estilos para todos los elementos de CSS */
* {
    margin: 0; /*margen*/
    padding: 0; /*espacio entre elementos*/
    border: 0;    /*borde*/
}
:root /*  - en raiz = html pones colores globales con variable para reutilizar en todo el CSS */ 
{
  --gray: #373a3c;
  --whit-light: #dddddd;
  --black: #000;
  --white: #fff;
  --red: #dc3545;
}
/* Estilos Generales */
body {
    background-color: turquoise; /* Color de fondo del cuerpo */
    color: white; /* Color del texto del cuerpo */
    font-family: Arial, Helvetica, sans-serif; /* Fuente del texto */
    font-weight: 100; /* Grosor de la fuente */
    font-style: italic; /* Estilo de la fuente (cursiva) */
    font-size: 50px; /* Tamaño de fuente */
    margin-left: 800px; /* Margen izquierdo */
    max-width: 1800px; /* Ancho máximo permitido */
    text-align: center; /* Alineación del texto al centro */
    padding: 20px; /* Espaciado interno en el encabezado */   
    max-width: 100%; /* Establecer un ancho máximo */
    overflow-x: hidden; /* Evitar la barra de desplazamiento horizontal */ 
    list-style: none; /* Sin decoración de texto */
    display: inline-block;  /* Muestra los elementos en línea, uno al lado del otro */  
    text-decoration: none; /* Sin decoración de texto */ 
    color: inherit;
    background-color: currentColor;
    border: 0;
    opacity: 1;
}
/* Estilos para las imágenes */
img {
    display: block; /* Configura la visualización de la imagen como bloque para centrarla */
    margin: 0 auto; /* Centra la imagen horizontalmente */
    border-color: var(--white) !important;
    background-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'><path stroke='white' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/></svg>")
    
}
/* Estilo para la sección de Descripción */
.description {
    display: flex; /*alineacion flexible*/
    flex-wrap: wrap; /* Permitir envolver a la siguiente línea */
    align-items: center; /* Centrar verticalmente los elementos */   
    box-sizing: border-box; /* Evitar que el padding afecte el ancho total */
    justify-content: center; /* Centra los elementos horizontalmente */
    color: inherit; /* Heredar el color del texto (debe ser blanco según la configuración general) */
    background-color: var(--white);
    letter-spacing: 0.6px;
}
.carousel-indicators 
{
  position: static !important;
  transform: none;
  transform: translateX(-50%); /* Centra los puntos horizontalmente */
  border-radius: 50%;
  gap: 20px;
  background-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'><path stroke='white' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/></svg>") !important;
  border-color: var(--white) !important;
}
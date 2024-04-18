$(document).ready(function() {
    // Cuando el usuario hace clic en la imagen, se aplica una animación de giro
    $("#capitan-gira").click(function() {
      $(this).css({
        transition : 'transform 1s',
        transform  : 'rotate(360deg)'
      });
      // Después de 1 segundo, la imagen vuelve a su posición original
      setTimeout(() => {
        $(this).css({
          transform  : 'rotate(0deg)'
        });
      }, 1000);
    });
  });
  
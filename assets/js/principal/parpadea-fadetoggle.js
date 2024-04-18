$(document).ready(function() {
    // Función para hacer parpadear un elemento
    $.fn.parpadea = function() {
      $(this).fadeOut(200, function() {
        $(this).fadeIn(200);
      });
    };
  
    // Cuando el mouse pasa sobre la imagen, la imagen parpadea
    $(".header_img").hover(function() {
      $(this).parpadea();
    });
  
    // Cuando el usuario hace clic en la imagen, se aplica una animación de deslizamiento y desvanecimiento
    $(".header_img").click(function() {
      $(this).slideUp(200, function() {
        $(this).slideDown(200, function() {
          $(this).fadeOut(200, function() {
            $(this).fadeIn(200);
          });
        });
      });
    });
  });
  
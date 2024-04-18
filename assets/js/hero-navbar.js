document.addEventListener('DOMContentLoaded', function () {
    let navbarToggler = document.querySelector('.navbar-toggler');
    let navbarMenu = document.querySelector('.navbar-collapse');
  
    navbarToggler.addEventListener('click', function () {
      navbarMenu.classList.toggle('show');
      navbarToggler.classList.toggle('collapsed');
       // usuario hace clic en imagen boton hamburguesa, se aplica animación de giro
      // Agrega la animación de giro solo cuando el menú está colapsado
      if (navbarToggler.classList.contains('collapsed')) {
        $(".navbar-toggler-icon").css({
          transition : 'transform 1s',
          transform  : 'rotate(360deg)',
          backgroundImage: "url('data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(255, 0, 0, 1)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e')" // imagen de hamburguesa
        });
        // Después de 1 segundo, la imagen vuelve a su posición original
        setTimeout(() => {
          $(".navbar-toggler-icon").css({
            transform  : 'rotate(0deg)'
          });
        }, 1000);
      } else { // Cuando el menú está expandido
        $(".navbar-toggler-icon").css({
          backgroundImage: "url('data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(255, 0, 0, 1)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e')" // imagen de X
        });
      }
    });
});

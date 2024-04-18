$(document).ready(function () {
    //codigo de funcion se ejecuta cuando pagina este cargada
   
    // // tarjetas ocultar/mostrar click imagen individualmente
        $(".card-img-top").click(function () {
          $(this).siblings(".card-body").toggle();
        });
              
  
    });
  
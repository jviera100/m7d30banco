$(document).ready(function () {
    //codigo de funcion se ejecuta cuando pagina este cargada
   
    // Tooltip initialization
    
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
    
    
        // Tooltip initialization
        $('[data-bs-toggle="tooltip"]').tooltip();
      
        // Evento click toolpit
         $("#enviarCorreo").click(function () {
            alert("El correo fue enviado correctamente...");
        });
        // Evento click ultimo formulario join
        $(".d-inline-block").click(function () {
            alert("El correo fue enviado correctamente...");
        });          
  
    });
  
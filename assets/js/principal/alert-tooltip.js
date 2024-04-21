$(document).ready(function () {
    //codigo de funcion se ejecuta cuando pagina este cargada
   
    // Tooltip initialization
    
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
    
    
        // Tooltip initialization
        $('[data-bs-toggle="tooltip"]').tooltip();
      
        // Evento click toolpit en grill e imagen girando
         $("#enviarCorreo").click(function () {
            alert("El correo fue enviado correctamente...");
        });
        // Evento click ultimo formulario contact
        $("#boton-form-contact").click(function () {
            alert("Registrado correctamente...");
        });          
  
    });
  
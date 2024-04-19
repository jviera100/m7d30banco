<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1" />    
    <!-- los CDN enlace remoto traen datos estáticos o fijos que no cambian.  -->
    <!-- CDN Bootstrap -->    
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
      crossorigin="anonymous"
    />
    <!-- CDN JQUERY -->
    <script
      src="https://code.jquery.com/jquery-3.7.1.min.js"
      integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo="
      crossorigin="anonymous"
    ></script>
     <!-- CDN kit íconos FontAwesome -->
    <script
     src="https://kit.fontawesome.com/168d9f7fae.js"
     crossorigin="anonymous"
    ></script>
     <!-- CDN fuente letra -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cabin:wght@400;700&display=swap" rel="stylesheet">
     <!-- Metadatos para SEO -->
    <meta name="author" content="Jonathan Viera"> <!-- Nombre del autor del documento -->
    <meta name="description" content="modal"> <!-- Descripción del contenido del sitio -->
    <meta name="keywords" content="modal"> <!-- Palabras clave para motores de búsqueda -->
    <!-- titulo navegador --> 
    <title>:: Animales en investigación ::</title>
    <!-- Enlace local favicon navegador -->
    <link rel="shortcut icon" href="/img/favicon-leon.png" type="favicon.png">
     <!-- Enlace local estilo CSS -->    
    <link rel="stylesheet" href="/css/animal/animal-body.css" />
    <link rel="stylesheet" href="/css/animal/animal-tabla-registro.css" />  
    <link rel="stylesheet" href="/css/principal/footer.css" />   
  </head>

<body>

<!-- tabla registro -->
    <div class="row">
      <div
          class="col-12 card col-sm-7 text-center p-4 bg-warning shadow-lg"
          id="Tabla"
      >
          <h3>Animales en investigación</h3>
          <hr class="my-0 bg-dark w-75 mx-auto" />
          <div
              id="Animales"
              class="my-3 p-3 d-flex align-items-start justify-content-start flex-wrap bg-dark"
          ></div>
      </div>
      <div class="card col-12 col-sm-4 bg-warning text-dark offset-1 shadow-lg">
          <div class="card-body">
              <h5 class="card-title">Registrar animal en:</h5>
              <h6 class="card-subtitle mb-2 text-muted">
                  Ingrese los datos del animal
              </h6>
              <hr />
              <div class="card-text my-3">
                  <div class="form-group">
                      <label for="name">Nombre del animal:</label>
                      <select class="form-control bg-dark text-white" id="name">
                          <option disabled selected>Seleccione un animal</option>
                          <option value="Leon">León</option>
                          <option value="Lobo">Lobo</option>
                          <option value="Oso">Oso</option>
                          <option value="Serpiente">Serpiente</option>
                          <option value="Aguila">Águila</option>
                      </select>              
                  </div>

                  <div class="form-group">
                      <label for="edad">Años de edad estimados:</label>
                      <select class="form-control bg-dark text-white" id="edad">
                          <option disabled selected>Seleccione un rango de años</option>

                          <option value="0 - 1 años">0 - 1 años</option>
                          <option value="1 - 3 años">1 - 3 años</option>
                          <option value="3 - 5 años">3 - 5 años</option>
                          <option value="5 - 8 años">5 - 8 años</option>
                          <option value="8 - 10 años">8 - 10 años</option>
                          <option value="Más de 10 años">Más de 10 años</option>
                      </select>
                  </div>

                  <div class="form-group">
                      <label for="comentarios">Comentarios:</label>
                      <textarea
                          rows="5"
                          class="form-control shadow-lg bg-dark text-white"
                          id="comentarios"
                      ></textarea>
                  </div>

                  <div class="p-5 card bg-dark">
                      <div id="preview">              
                      </div>
                  </div>
              </div>

              <button class="btn btn-light d-block" id="btnRegistrar">Agregar</button>
          </div>
      </div>
    </div>

    <div class="modal" id="myModal">
    <div class="modal-dialog">
      <div class="modal-content">
        <span class="close">&times;</span>
        <div class="modal-body">
          <h2 id="nombreAnimal"></h2>
          <p id="edadAnimal"></p>
          <p id="comentariosAnimal"></p>
          <img id="imagenAnimal" src="" alt="Imagen del animal">
          <audio id="audioAnimal" controls></audio>
        </div>
      </div>
    </div>
    </div>

<!-- FOOTER -->
    
    <section id="footer">
      <footer class="footer expand-lg text-center p-4 ">
        <h3 id="contacto">Contacto</h3>   
      
        <div class="container text-center">
          <div class="row">
            <div class="col">
              <p id="footer"  class="mb-0">JONATHAN VIERA</p>
            </div>
            <div id="footer" class="col">
              <a id="footer"
              href="https://github.com" target="_blank">
              <i class="fa-brands fa-github"></i>
              </a>
              <a id="footer"
              href="https://www.linkedin.com" target="_blank">
              <i class="fa-brands fa-linkedin"></i>
              </a>
              <a id="footer"
              href="https://twitter.com" target="_blank">
              <i class="fa-brands fa-x-twitter"></i>
              </a>
              <a id="footer"
              href="https://facebook.com" target="_blank">
              <i class="fa-brands fa-facebook"></i>
              </a>
              <a id="footer"
              href="https://discord.com" target="_blank">
              <i class="fa-brands fa-discord"></i>
              </a>
              <p class="mb-0">© 2024 Proyecto Integracion para Desafio Latam. Full Stack G64. Todos los derechos reservados.</p>           
            </div>     
          </div>
        </div>             
      </footer>
    </section>
  


<script
    src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
    integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
    crossorigin="anonymous"
></script>
<!-- script bootstrap -->
<script
  src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
  integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
  crossorigin="anonymous"
></script> 
<!-- script canvas -->
<script src=" https://canvasjs.com/assets/script/jquery.canvasjs.min.js "></script>
<!-- script js -->
<script src="/js/animal/animal-autoejecutable.js"></script>
<script src="/js/animal/animal-callback.js"></script>
<script src="/js/animal/animal-error.js"></script>
<script src="/js/animal/animal-promesa.js"></script>
<script type="module" src="/js/animal/animal-tabla-registro.js"></script> <!-- script js, module=ES6 y con modulos -->
   


</body>
</html>

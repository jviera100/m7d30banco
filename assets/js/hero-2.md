// $(document).ready(function () {
//   // Evento click para el botón random
//   $("#randomHeroButton").click(function() {
//       let randomId = Math.floor(Math.random() * 732) + 1; // Genera un ID aleatorio entre 1 y 732
//       $.ajax({
//           url: `https://superheroapi.com/api.php/2619421814940190/${randomId}`,
//           type: 'GET',
//           success: function(respuesta) {
//               // Aquí puedes manejar la respuesta de la API
//               console.log(respuesta); //BOTON RANDOM NO ME RESULTA, SE MUESTRA EN CONSOLA PERO NO EN PAGINA WEB
//           },
//           error: function(error) {
//               alert("No se encontró el héroe con ese ID");
//           },
//       });
//   });
//   $("#randomHeroButton").click(function() {
//     console.log("Botón clickeado");
    
// });


    
      
//     $("#form").on("submit", function (e) { //funcion anonima al principio, despues se llama y se define
//       //controlador de evento se activara cuando se envie formulario del html
//       let number = parseInt($("#idHero").val());
//       //trae valor de id, lo convierte a numero entero y lo almacena en variable
//       //cuando el evento submit envia formulario de bootstrap en el html, se agregan los codigos que siguen abajo para que se limpie el formulario y pueda volver a usar formulario
//       e.preventDefault();            // codigo evita que formulario se envie predeterminadamente y no recargue pagina
//       $("#resultado").html("");      //limpia o borra resultado
//       $("#idHero").val("");          //limpia o borra imput
//       $("#chartContainer").html(""); //limpia o borra grafico
  
//       validar(number);  //llama la funcion validar con variable number. En JavaScript, las funciones pueden ser llamadas antes de que sean definidas debido a un comportamiento llamado “hoisting” o “elevación”. En términos simples, JavaScript “mueve” las declaraciones de las funciones al inicio del script, lo que permite que las funciones sean utilizadas antes de que sean declaradas.
//     });
  
  
//     //crear una funcion para validar el numero
  
//     function validar(num) { //definicion de funcion validar con argumento num
//       let expresion = /^[0-9]+$/;  //expresion regular numerica
//       if (expresion.test(num)) {   //metodo test prueba si argumento num coincide con expresion regular
//     //conectar a la API con solicitud al servidor de AJAX sin recargar pagina
//     // las API se utilizan para obtener datos dinámicos que tu aplicación necesita para realizar alguna función.
//         $.ajax({                         
//           datatype: "json", //tipo datos esperado
//           method: "GET", //metodo solicitud
//           url: `https://superheroapi.com/api.php/2619421814940190/${num}`,
//           //url solicitud y agregar numero ingresado por el usuario
//           success: function (respuesta) {    //Esta función se ejecutará si la solicitud AJAX tiene éxito. La respuesta del servidor se pasa a la función como el argumento "respuesta".
//             if (respuesta.response === "success") {    //Si la respuesta del servidor incluye una propiedad "response" que es igual a "success", entonces el código dentro de este bloque if se ejecutará.
//               //Aquí se está creando una cadena de texto que contiene HTML. Esta cadena se utilizará para mostrar información sobre el superhéroe en la página.
//               let heroe = `                  
//   <h3>Super Heroe Encontrado</h3>
//       <div class="card">
//         <div class="row">
//           <div class="col-md-4">
//             <img src="${respuesta.image.url}" class="card-img" alt="" />
//           </div>
//           <div class="col-md-8">
//             <div class="card-body">
//               <h5 class="card-title">Nombre: ${respuesta.name} </h5>
//               <p class="card-text">
//                 Conexiones:${respuesta.connections["group-affiliation"]}
//               </p>
//               <ul class="list-group">
//                 <li class="list-group-item">
//                   <em>Publicado por </em>: ${respuesta.biography.publisher}
//                 </li>
//                 <li class="list-group-item">
//                   <em>Ocupación: ${respuesta.work.occupation} </em>
//                 </li>
//                 <li class="list-group-item">
//                   <em
//                     >Primera Aparición:
//                     ${respuesta.biography["first-appearance"]}</em
//                   >
//                 </li>
//                 <li class="list-group-item">
//                   <em>Altura: ${respuesta.appearance.height.join(" - ")} </em>
//                 </li>
//                 <li class="list-group-item">
//                   <em>Peso: ${respuesta.appearance.weight.join(" - ")} </em>
//                 </li>
//                 <li class="list-group-item">
//                   <em>Aliases:  ${respuesta.biography.aliases}</em>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
  
  
//           `;
//               $("#resultado").append(heroe); // Esta línea añade la cadena "heroe" al elemento con el ID "resultado". Es decir que resultado mostrara toda la descripcion del heroe que se digito en el codigo de arriba.  
  
//               //Agregamos los valores de las estadisticas
  
//               let datosXY = [];
//               for (let key in respuesta.powerstats) {
//                 datosXY.push({
//                   label: key,
//                   y: parseInt(respuesta.powerstats[key]), //datos de iterar powerstats
//                 });
//               }
//               // Este bucle recorre las estadísticas de poder del superhéroe y las añade a la matriz "datosXY".
//               console.log(datosXY);
  
//               let option = { // Aquí se está creando un objeto que contiene opciones para un gráfico de CanvasJS.
//                 title: {
//                   text: `Estadísticas de Poder para ${respuesta.name}`, //titulo
//                 },
//                 data: [
//                   {
//                     type: "pie",  //tipo grafico
//                     startAngle: 45, //configuraciones para que grafico se muestre
//                     showInLegend: "true",
//                     legendText: "{label}",
//                     indexLabel: "{label} ({y})",
//                     yValueFormatString: "#,##0.#" % "",
//                     dataPoints: datosXY,
//                   },
//                 ],
//               };
  
//               $("#chartContainer").CanvasJSChart(option);
//               // Esta línea crea un gráfico de CanvasJS en el elemento con el ID "chartContainer", utilizando las opciones definidas anteriormente.
//             } else {
//               alert("No se encontro el heroe con ese id"); // Si la respuesta del servidor no incluye una propiedad "response" que es igual a "success", entonces se mostrará una alerta al usuario.
//             }
//           },
  
//           error: function (error) {
//             alert("no se encontro el heroe");// Esta función se ejecutará si la solicitud AJAX falla por alguna razón. En ese caso, se mostrará una alerta al usuario.
//           },
//         });
//       } else {
//         alert("Ingresa un valor numerico"); // Si el valor ingresado por el usuario no coincide con la expresión regular (es decir, no es un número), entonces se mostrará una alerta al usuario.
//       }
//     }
    
//   });
  
//   // https://superheroapi.com/api.php/2619421814940190/search/Batman
//   // const numero = Math.floor(Math.random() * 731) + 1;
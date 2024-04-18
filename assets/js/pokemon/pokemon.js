$(document).ready(function () {
    $("#form").on("submit", function (e) {
      let number = parseInt($("#idHero").val());
      e.preventDefault();
      $("#resultado").html("");
      $("#idHero").val("");
      $("#chartContainer").html("");
      validar(number);
    });
  
    function validar(num) {
      let expresion = /^[0-9]+$/;
      if (expresion.test(num)) {
        $.ajax({
          datatype: "json",
          method: "GET",
          url: `https://pokeapi.co/api/v2/pokemon/${num}`,
          success: function (respuesta) {
            if (respuesta) {
              let habilidades = respuesta.abilities.map(a => a.ability.name).join(', ');
              let movimientos = respuesta.moves.map(m => m.move.name).join(', ');
              let tipos = respuesta.types.map(t => t.type.name).join(', ');
              let items = respuesta.held_items.map(i => i.item.name).join(', ');
  
              // Obtener información sobre la especie y la cadena de evolución en un solo llamado AJAX
              $.ajax({
                datatype: "json",
                method: "GET",
                url: respuesta.species.url,
                success: function (respuestaEspecie) {
                  let descripcion = respuestaEspecie.flavor_text_entries.find(entry => entry.language.name === 'es').flavor_text;
                  let cadenaEvolucionURL = respuestaEspecie.evolution_chain.url;
  
                  // Hacer una solicitud adicional para obtener información sobre la cadena de evolución
                  $.ajax({
                    datatype: "json",
                    method: "GET",
                    url: cadenaEvolucionURL,
                    success: function (respuestaCadena) {
                      let cadenaEvolucion = obtenerCadenaEvolucion(respuestaCadena.chain);
  
                      // Construir el contenido del resultado
                      let pokemon = `
  <h3>Pokémon Encontrado</h3>
  <div class="card">
    <div class="row">
      <div class="col-md-4">
        <img src="${respuesta.sprites.front_default}" class="card-img" alt="" />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">Nombre: ${respuesta.name} </h5>
          <p class="card-text">
            Altura: ${respuesta.height}
          </p>
          <p class="card-text">
            Peso: ${respuesta.weight}
          </p>
          <p class="card-text">
            Habilidades: ${habilidades}
          </p>
          <p class="card-text">
            Movimientos: ${movimientos}
          </p>
          <p class="card-text">
            Tipos: ${tipos}
          </p>
          <p class="card-text">
            Items: ${items}
          </p>
          <p class="card-text">
            Descripción: ${descripcion}
          </p>
          <p class="card-text">
            Cadena de Evolución: ${cadenaEvolucion}
          </p>
        </div>
      </div>
    </div>
  </div>
  `;
                      $("#resultado").append(pokemon);
  
                      // Generar gráfico de estadísticas
                      let datosXY = [];
                      for (let stat of respuesta.stats) {
                        datosXY.push({
                          label: stat.stat.name,
                          y: stat.base_stat,
                        });
                      }
  
                      let option = {
                        title: {
                          text: `Estadísticas de Poder para ${respuesta.name}`,
                        },
                        data: [
                          {
                            type: "pie",
                            startAngle: 45,
                            showInLegend: "true",
                            legendText: "{label}",
                            indexLabel: "{label} ({y})",
                            yValueFormatString: "#,##0.#" % "",
                            dataPoints: datosXY,
                          },
                        ],
                      };
  
                      $("#chartContainer").CanvasJSChart(option);
                    },
                    error: function (error) {
                      alert("No se encontró la cadena de evolución del Pokémon");
                    },
                  });
                },
                error: function (error) {
                  alert("No se encontró información sobre la especie del Pokémon");
                },
              });
            } else {
              alert("No se encontró el Pokémon con ese id");
            }
          },
          error: function (error) {
            alert("No se encontró el Pokémon");
          },
        });
      } else {
        alert("Ingresa un valor numérico");
      }
    }
  
    function obtenerCadenaEvolucion(chain) {
      let cadena = "";
      while (chain) {
        cadena += chain.species.name;
        if (chain.evolves_to.length > 0) {
          cadena += " -> ";
          chain = chain.evolves_to[0];
        } else {
          chain = null;
        }
      }
      return cadena;
    }
  });
  
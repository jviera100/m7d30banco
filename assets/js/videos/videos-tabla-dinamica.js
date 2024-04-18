document.addEventListener('DOMContentLoaded', function() {
    crearTablaInvestigadores();
    agregarEventListeners();
});

function crearTablaInvestigadores() {
    const tiposDeAnimales = ['leon', 'lobo', 'oso', 'serpiente', 'aguila'];

    // Obtener el contenedor de la tabla
    const containerTabla = document.querySelector('#tablaInvestigadores');

    // Crear la tabla
    const tablaInvestigadores = document.createElement('table');
    tablaInvestigadores.id = 'tablaInvestigadores'; // Agregamos un ID para identificar la tabla fácilmente

    // Crear el encabezado de la tabla
    const thead = document.createElement('thead');
    const trHeader = document.createElement('tr');
    const thTipoAnimal = document.createElement('th');
    thTipoAnimal.textContent = 'Animal';
    const thFechaIngreso = document.createElement('th');
    thFechaIngreso.textContent = 'Fecha';
    const thNombreInvestigador = document.createElement('th');
    thNombreInvestigador.textContent = 'Investigador';
    trHeader.appendChild(thTipoAnimal);
    trHeader.appendChild(thFechaIngreso);
    trHeader.appendChild(thNombreInvestigador);
    thead.appendChild(trHeader);

    // Crear el cuerpo de la tabla
    const tbody = document.createElement('tbody');

    // Llenar la tabla con las filas iniciales
    tiposDeAnimales.forEach(tipo => {
        const tr = document.createElement('tr');

        // Columna para el tipo de animal
        const tdTipoAnimal = document.createElement('td');
        tdTipoAnimal.textContent = tipo;
        tr.appendChild(tdTipoAnimal);

        // Estructura Columna para la fecha de ingreso (se puede cambiar el tipo de input según sea necesario)
        const tdFechaIngreso = document.createElement('td');
        const inputFechaIngreso = document.createElement('input');
        inputFechaIngreso.type = 'text';
        inputFechaIngreso.placeholder = 'Ingrese la fecha';
        tdFechaIngreso.appendChild(inputFechaIngreso);
        tr.appendChild(tdFechaIngreso);

        // Estructura Columna para el nombre del investigador (se puede cambiar el tipo de input según sea necesario)
        const tdNombreInvestigador = document.createElement('td');
        const inputNombreInvestigador = document.createElement('input');
        inputNombreInvestigador.type = 'text';
        inputNombreInvestigador.placeholder = 'Ingrese el nombre';
        tdNombreInvestigador.appendChild(inputNombreInvestigador);
        tr.appendChild(tdNombreInvestigador);

        // Agregar la fila al cuerpo de la tabla
        tbody.appendChild(tr);
    });

    // Insertar el encabezado y el cuerpo en la tabla
    tablaInvestigadores.appendChild(thead);
    tablaInvestigadores.appendChild(tbody);

    // Insertar la tabla en el contenedor
    containerTabla.appendChild(tablaInvestigadores);
}

function agregarEventListeners() {
    // Obtener el campo de búsqueda y el filtro desplegable
    const inputBusqueda = document.querySelector('#inputBusqueda');
    const filtroTipoAnimal = document.querySelector('#filtroTipoAnimal');

    // Agregar event listener para la búsqueda
    inputBusqueda.addEventListener('input', function() {
        const textoBusqueda = this.value.trim().toLowerCase();
        filtrarTabla(textoBusqueda, filtroTipoAnimal.value);
    });

    // Agregar event listener para el filtro desplegable
    filtroTipoAnimal.addEventListener('change', function() {
        const textoBusqueda = inputBusqueda.value.trim().toLowerCase();
        filtrarTabla(textoBusqueda, this.value);
    });
}

function filtrarTabla(textoBusqueda, tipoAnimalSeleccionado) {
    const filas = document.querySelectorAll('#tablaInvestigadores tbody tr');

    filas.forEach(fila => {
        const tipoAnimal = fila.querySelector('td:first-child').textContent.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        const tipoAnimalSeleccionadoSinTildes = tipoAnimalSeleccionado.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        const cumpleFiltro = tipoAnimal === tipoAnimalSeleccionadoSinTildes || tipoAnimalSeleccionadoSinTildes === 'todos';
        const cumpleBusqueda = tipoAnimal.includes(textoBusqueda);

        if (cumpleFiltro && cumpleBusqueda) {
            fila.style.display = '';
        } else {
            fila.style.display = 'none';
        }
    });
}

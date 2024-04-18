const setInfoModal = (nombre, balance, id) => {
  console.log("Nombre:", nombre);
  console.log("Balance:", balance);
  console.log("ID:", id);
  $("#nombreEdit").val(nombre);
  $("#balanceEdit").val(balance);
  $("#editButton").attr("onclick", `editUsuario('${id}')`);
  $("#exampleModal").modal("show");
};

const editUsuario = async (id) => {
  const name = $("#nombreEdit").val();
  const balance = $("#balanceEdit").val();
  console.log("Editando usuario con ID:", id);
  console.log("Nuevo nombre:", name);
  console.log("Nuevo balance:", balance);
  try {
    const { data } = await axios.put(
      `http://localhost:3000/usuario?id=${id}`,
      { nombre: name, balance }
    );
    console.log("Respuesta del servidor:", data);
    $("#exampleModal").modal("hide");
    location.reload();
  } catch (error) {
    console.error("Error al editar usuario:", error.stack);
    alert("Algo salió mal..." + error);
  }
};

$("form:first").submit(async (e) => {
  e.preventDefault();
  let nombre = $("form:first input:first").val();
  let balance = Number($("form:first input:nth-child(2)").val());
  console.log("Enviando solicitud para agregar usuario con nombre:", nombre, "y balance:", balance);
  try {
    const response = await fetch("http://localhost:3000/usuario", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre, balance }),
    });
    $("form:first input:first").val("");
    $("form:first input:nth-child(2)").val("");
    location.reload();
  } catch (error) {
    console.error("Error al agregar usuario:", error.stack);
    alert("Algo salió mal..." + error);
  }
});

$("form:last").submit(async (e) => {
  e.preventDefault();
  let emisor = $("form:last select:first").val();
  let receptor = $("form:last select:last").val();
  let monto = $("#monto").val();
  if (!monto || !emisor || !receptor) {
    alert("Debe seleccionar un emisor, receptor y monto a transferir");
    return false;
  }
  console.log("Enviando solicitud de transferencia con emisor:", emisor, ", receptor:", receptor, "y monto:", monto);
  try {
    const response = await fetch("http://localhost:3000/transferencia", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ emisor, receptor, monto }),
    });
    const data = await response.json();
    location.reload();
  } catch (error) {
    console.error("Error al realizar transferencia:", error.stack);
    alert("Algo salió mal..." + error);
  }
});

const getUsuarios = async () => {
  const response = await fetch("http://localhost:3000/usuarios");
  let data = await response.json();
  $(".usuarios").html("");

  $.each(data, (i, c) => {
    $(".usuarios").append(`
            <tr>
              <td>${c.nombre}</td>
              <td>${c.balance}</td>
              <td>
                <button
                  class="btn btn-outline-warning mr-2"
                  data-toggle="modal"
                  data-target="#exampleModal"
                  onclick="setInfoModal('${c.nombre}', '${c.balance}', '${c.id}')"
                >
                  Editar</button
                ><button class="btn btn-outline-danger" onclick="eliminarUsuario('${c.id}')">Eliminar</button>
              </td>
            </tr>
       `);

    $("#emisor").append(`<option value="${c.nombre}">${c.nombre}</option>`);
    $("#receptor").append(`<option value="${c.nombre}">${c.nombre}</option>`);
  });
};

const eliminarUsuario = async (id) => {
  console.log("Eliminando usuario con ID:", id);
  try {
    const response = await fetch(`http://localhost:3000/usuario?id=${id}`, {
      method: "DELETE",
    });
    console.log("Respuesta del servidor:", response);
    alert("Usuario eliminado");
    getUsuarios();
  } catch (error) {
    console.error("Error al eliminar usuario:", error.stack);
    alert("Algo salió mal..." + error);
  }
};

const getTransferencias = async () => {
  console.log("Obteniendo transferencias...");
  try {
    const { data } = await axios.get("http://localhost:3000/transferencias");
    console.log("Datos de transferencias:", data);
    $(".transferencias").html("");
//DATA CAPTURA COMO OBJETO, NO USAR INDICES----------------------------------------------------------------
    data.forEach((t) => {
      $(".transferencias").append(`
     <tr>     
       <td> ${formatDate(t.fecha)} </td>
       <td> ${t.emisor} </td>
       <td> ${t.receptor} </td>
       <td> ${t.monto} </td>       
     </tr>
   `);
    });
  } catch (error) {
    console.error("Error al obtener transferencias:", error.stack);
    alert("Algo salió mal al obtener las transferencias. Consulta los registros para más detalles.");
  }
};

getUsuarios();
getTransferencias();

const formatDate = (date) => {
  const dateFormat = moment(date).format("L");
  const timeFormat = moment(date).format("LTS");
  return `${dateFormat} ${timeFormat}`;
};
formatDate();

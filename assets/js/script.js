const setInfoModal = (nombre, balance, id) => {
  $("#nombreEdit").val(nombre);
  $("#balanceEdit").val(balance);
  $("#editButton").attr("onclick", `editUsuario('${id}')`);
};

const editUsuario = async (id) => {
  const name = $("#nombreEdit").val();
  const balance = $("#balanceEdit").val();
  try {
    const { data } = await axios.put(`http://localhost:3000/actualizarData/${id}`, {
      nombre: name,
      balance: balance,
    });
    $("#exampleModal").modal("hide");
    location.reload();
  } catch (e) {
    alert("Algo salió mal..." + e);
  }
};

$("#formNuevoUsuario").submit(async (e) => {
  e.preventDefault();
  let nombre = $("#nombreNuevoUsuario").val();
  let balance = Number($("#balanceNuevoUsuario").val());
  try {
    const response = await axios.post("http://localhost:3000/registrarData", {
      nombre: nombre,
      balance: balance,
    });
    $("#nombreNuevoUsuario").val("");
    $("#balanceNuevoUsuario").val("");
    location.reload();
  } catch (e) {
    alert("Algo salió mal ..." + e);
  }
});

$("#formTransferencia").submit(async (e) => {
  e.preventDefault();
  let emisor = $("#emisor").val();
  let receptor = $("#receptor").val();
  let monto = $("#montoTransferencia").val();
  if (!monto || !emisor || !receptor) {
    alert("Debe seleccionar un emisor, receptor y monto a transferir");
    return false;
  }
  try {
    const response = await axios.post("http://localhost:3000/realizarTransferencia", {
      emisor: emisor,
      receptor: receptor,
      monto: monto,
    });
    location.reload();
  } catch (e) {
    console.log(e);
    alert("Algo salió mal..." + e);
  }
});

const getUsuarios = async () => {
  try {
    const response = await axios.get("http://localhost:3000/obtenerData");
    let data = response.data;
    $("#tablaUsuarios").html("");

    data.forEach((c) => {
      $("#tablaUsuarios").append(`
            <tr>
              <td>${c.nombre}</td>
              <td>${c.balance}</td>
              <td>
                <button
                  class="btn btn-warning mr-2"
                  data-toggle="modal"
                  data-target="#exampleModal"
                  onclick="setInfoModal('${c.nombre}', '${c.balance}', '${c.id}')"
                >
                  Editar</button
                ><button class="btn btn-danger" onclick="eliminarUsuario('${c.id}')">Eliminar</button>
              </td>
            </tr>
       `);

      $("#emisor").append(`<option value="${c.nombre}">${c.nombre}</option>`);
      $("#receptor").append(`<option value="${c.nombre}">${c.nombre}</option>`);
    });
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
  }
};

const eliminarUsuario = async (id) => {
  try {
    const response = await axios.delete(`http://localhost:3000/eliminarData/${id}`);
    getUsuarios();
  } catch (error) {
    console.error("Error al eliminar usuario:", error);
  }
};

const getTransferencias = async () => {
  try {
    const response = await axios.get("http://localhost:3000/obtenerTransferencias");
    let data = response.data;
    $("#tablaTransferencias").html("");

    data.forEach((t) => {
      $("#tablaTransferencias").append(`
     <tr>
       <td>${formatDate(t.fecha)}</td>
       <td>${t.emisor}</td>
       <td>${t.receptor}</td>
       <td>${t.monto}</td>
     </tr>
   `);
    });
  } catch (error) {
    console.error("Error al obtener transferencias:", error);
  }
};

getUsuarios();
getTransferencias();

const formatDate = (date) => {
  const dateFormat = moment(date).format("L");
  const timeFormat = moment(date).format("LTS");
  return `${dateFormat} ${timeFormat}`;
};

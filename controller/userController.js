import {
  addUserQuery,
  getUserQuery,
  editUserQuery,
  deleteUserQuery,
    addTranferQuery,
    getTransferQuery
} from "../queries/consultas.js";
import path from "path";
const __dirname = import.meta.dirname;

const home = (req, res) => {
  res.sendFile(path.join(__dirname, "../views/index.html"));
};
const addUser = async (req, res) => {
  try {
    const { nombre, balance } = req.body; //req.body permite que backend recibe datos formato javascript
     // Agregar la línea para verificar el tipo de dato de monto
    console.log("Tipo de dato de balance:", typeof balance);
    console.log("Datos recibidos para agregar usuario:", nombre, balance);
    console.log("Datos recibidos:", req.body);
    if (!nombre || isNaN(balance)) {
      throw new Error("Formato de datos incorrecto.");
    }
    const datos = [nombre, balance];
    const newUser = await addUserQuery(datos);
    res.status(200).send(newUserusers);
  } catch (error) {
    console.error("Error al agregar usuario:", error.stack);
    res.status(500).send(error.message);
  }
};

const getUser = async (req, res) => {
  try {    
    const users = await getUserQuery();
    res.status(200).send(users);
  } catch (error) {
    console.error("Error al obtener usuarios:", error.stack);
    res.status(500).send(error.message);
  }
};

const editUser = async (req, res) => {
  console.log("body", req.body);
  try {
    console.log("Datos recibidos para editar usuario:", req.body);
    const { id } = req.query;
    const { nombre, balance } = req.body;
    if (!id || !nombre || isNaN(balance)) {
      throw new Error("Formato de datos incorrecto.");
    }
    const datos = [nombre, balance, id];
    const editUser = await editUserQuery(datos);
    res.status(200).send(editUser);
  } catch (error) {
    console.error("Error al editar usuario:", error.stack);
    res.status(500).send(error.message);
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.query;
    console.log("ID de usuario a eliminar:", id);
    const deleteUser = await deleteUserQuery(id);
    res.status(200).send(deleteUser);
  } catch (error) {
    console.error("Error al eliminar usuario:", error.stack);
    res.status(500).send(error.message);
  }
};

const addTranfer = async (req, res, next) => {
  try {
    console.log("Datos recibidos para agregar transferencia:", req.body);
    console.log("body", req.body);
    /*  console.log('query', req.query);
        console.log('params', req.params); */
    const { emisor, receptor, monto } = req.body; //req.body permite que backend recibe datos formato javascript
    // Conversión del monto a un número
    const montoNum = parseFloat(monto);
     // Agregar la línea para verificar el tipo de dato de monto
    console.log("Tipo de dato de monto:", typeof monto);
    console.log("emisor:", emisor);
    console.log("receptor:", receptor);
    console.log("monto:", montoNum);
    if (!emisor || !receptor || isNaN(montoNum)) {
      throw new Error("Formato de datos incorrecto.");
    }
    const datos = { emisor, receptor, monto: montoNum }; // Usamos montoNum en lugar de monto    
    console.log(datos);
    const result = await addTranferQuery(datos);
    res.status(200).send(result);
  } catch (error) {
    next(error);    
    console.error("Error al agregar transferencia:", error.stack);
    res.status(500).send(error.message);
  }
};
const getTranfer = async (req, res) => {
  try {
    const result = await getTransferQuery();    
    res.status(200).json(result);
  } catch (error) {
    console.error("Error al obtener transferencias:", error.stack);
    res.status(500).send(error.message);
  }
}
export { home, addUser, getUser, editUser, deleteUser, addTranfer, getTranfer };

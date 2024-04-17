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
    const { nombre, balance } = req.body;
    const datos = [nombre, balance];
    const newUser = await addUserQuery(datos);
    res.status(200).send(newUserusers);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getUser = async (req, res) => {
  try {
    const users = await getUserQuery();
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const editUser = async (req, res) => {
  try {
    const { id } = req.query;
    const { nombre, balance } = req.body;

    const datos = [nombre, balance, id];
    const editUser = await editUserQuery(datos);
    res.status(200).send(editUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.query;

    const deleteUser = await deleteUserQuery(id);
    res.status(200).send(deleteUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const addTranfer = async (req, res) => {
  try {
    console.log("body", req.body);
    /*  console.log('query', req.query);
        console.log('params', req.params); */
    const datos = req.body;
    console.log(datos);

    const result = await addTranferQuery(datos);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getTranfer = async (req, res) => {
  try {
    const result = await getTransferQuery();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export { home, addUser, getUser, editUser, deleteUser, addTranfer, getTranfer };

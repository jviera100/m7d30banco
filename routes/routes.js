import { Router } from "express"; //importamos express
const router = Router();

import { addUser, getUser, editUser, deleteUser, addTranfer, getTranfer } from "../controller/userController.js"; 

router.post("/usuario", addUser)
router.get("/usuarios", getUser)
router.put('/usuario', editUser)
router.delete('/usuario', deleteUser)
router.post('/transferencia', addTranfer)
router.get('/transferencias', getTranfer)

export default router
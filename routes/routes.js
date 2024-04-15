import { Router } from "express"; //importamos express
const router = Router();

import {registrarData, obtenerDataPorFiltro, obtenerData, actualizarData, eliminarData, realizarTransferencia, obtenerTransferencias} from "../controllers/queriesDbPool.js";

// Rutas para usuarios
router.post("/registrarData", registrarData);
router.get("/obtenerDataPorFiltro/:id", obtenerDataPorFiltro);
router.get("/obtenerData", obtenerData);
router.put("/actualizarData/:id", actualizarData);
router.delete("/eliminarData/:id", eliminarData);

// Rutas para transferencias
router.post("/realizarTransferencia", realizarTransferencia);
router.get("/obtenerTransferencias", obtenerTransferencias);

export default router;

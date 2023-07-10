import { Router } from "express";
import { borrarProducto, crearProducto, editarProducto, obtenerProducto, obtenerProductoId } from "../controllers/producto.controllers";

const router = Router();

router.route('/productos').get(obtenerProducto).post(crearProducto)
router.route('/productos/:id').delete(borrarProducto).put(editarProducto).get(obtenerProductoId);
//rutas
export default router;


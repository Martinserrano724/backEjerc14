import { Router } from "express";
import { borrarProducto, crearProducto, editarProducto, obtenerProducto, obtenerProductoId } from "../controllers/producto.controllers";
import { check } from "express-validator";

const router = Router();

router.route('/productos').get(obtenerProducto).post([check("nombreProducto").notEmpty().withMessage('el nombre es un dato obligatorio')],crearProducto)
router.route('/productos/:id').delete(borrarProducto).put(editarProducto).get(obtenerProductoId);
//rutas
export default router;


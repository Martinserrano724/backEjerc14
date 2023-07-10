import { Router } from "express";
import {
  borrarProducto,
  crearProducto,
  editarProducto,
  obtenerProducto,
  obtenerProductoId,
} from "../controllers/producto.controllers";
import { check } from "express-validator";

const router = Router();

router
  .route("/productos")
  .get(obtenerProducto)
  .post(
    [
    check("nombreProducto")
        .notEmpty()
        .withMessage("el nombre es un dato obligatorio")
        .isLength({min: 2,max: 100})
        .withMessage("el nombre del producto debe contener entre 2 y 100 caracteres"),
    check("cantidadPlatos")
        .notEmpty()
        .withMessage("la cantidad Platos es un dato obligatorio")
        .custom((value)=>{
            if(value >=1 && value<=100)
            {
                return true
            }
            else{
                throw new Error("la cantidad Platos debe contener entre 1 y 100 caracteres")
            }
        })
        .isNumeric()
        .withMessage("la cantidad Platos debe ser de tipo number "),
    check("imagen")
        .notEmpty()
        .withMessage("la imagen es un dato obligatorio")
        .matches(/^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|png|svg|jpeg)$/)
        .isString()
        .withMessage("la imagen debe ser un string que contenga numeros y letras "),
    check("procesoPreracion")
        .notEmpty()
        .withMessage("el procesoPreraciones un dato obligatorio")
        .isString()
        .withMessage(" el procesoPreracion debe ser un string que contenga numeros y letras "),
    check("ingrediente")
        .notEmpty()
        .withMessage("los ingrediente es un dato obligatorio")
        .isString()
        .withMessage("los ingrediente debe ser un string que contenga numeros y letras "),
    ],
    
    crearProducto
  );
router
  .route("/productos/:id")
  .delete(borrarProducto)
  .put(editarProducto)
  .get(obtenerProductoId);
//rutas
export default router;

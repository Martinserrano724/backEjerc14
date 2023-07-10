import { Router } from "express";
import {
  obtenerUsuario,
  crearUsuario,
} from "../controllers/usuario.controllers";
import { check } from "express-validator";

const router = Router();

router
  .route("/usuarios")
  .get(obtenerUsuario)
  .post(
    [
      check("nombreUsuario")
        .notEmpty()
        .withMessage("el nombre es un dato obligatorio")
        .isLength({min: 2,max: 100})
        .withMessage("el nombre del usuario debe contener entre 2 y 100 caracteres"),
    check("password")
        .notEmpty()
        .withMessage("la contraseña es un dato obligatorio")
        .isLength({min: 8,max: 20})
        .withMessage("el password del usuario debe contener entre 8 y 20 caracteres")
        .isString()
        .withMessage("el password debe ser un string que contenga numeros y letras "),
    check("email")
        .notEmpty()
        .withMessage("el email es un dato obligatorio")
        .isLength({max: 300})
        .withMessage("el email del usuario debe contener como maximo 300 caracteres")
        .isString()
        .withMessage("el email debe ser un string que contenga numeros y letras "),
    ],
      
    crearUsuario
  );

//rutas
export default router;

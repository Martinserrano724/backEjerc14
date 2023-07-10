import { validationResult } from "express-validator";
import Usuario from "../models/usuario";

export const obtenerUsuario = async (req, res) => {
    try {
      //nos encargamos de obtener los valores de la base de datos devolvera un array vacio
      const usuarioGuardado = await Usuario.find();
      res.status(200).json(usuarioGuardado);
    } catch (error) {
      res.status(404).json({
        mensaje: "error a buscar los Usuario",
      });
      console.log(error);
    }
  };
  export const crearUsuario = async (req, res) => {
    try {
      // trabajar con el resultado de las validaciones
      const errors = validationResult(req);
      //errors.isEmpty()//devuelve true si esta vacio
      if (!errors.isEmpty()) {
        return res.status(400).json({ errores: errors.array() });
      }
      const UsuarioNuevo = new Usuario(req.body);
      await UsuarioNuevo.save(); // nos sirve para guardar el producto en la base
      res.status(201).json({
        mensaje: "el usuario esta creado con exito",
      });
    } catch (error) {
      console.log(error);
      res.status(404).json({
        mensaje: "error al crear los usuario",
      });
    }
  };
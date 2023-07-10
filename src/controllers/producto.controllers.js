import { validationResult } from "express-validator";
import Producto from "../models/producto";

export const obtenerProducto = async (req, res) => {
  try {
    //nos encargamos de obtener los valores de la base de datos devolvera un array vacio
    const productosGuardado = await Producto.find();
    res.status(200).json(productosGuardado);
  } catch (error) {
    res.status(404).json({
      mensaje: "error a buscar los productos",
    });
    console.log(error);
  }
};
export const crearProducto = async (req, res) => {
  try {
    // trabajar con el resultado de las validaciones
    const errors = validationResult(req);
    //errors.isEmpty()//devuelve true si esta vacio
    if (!errors.isEmpty()) {
      return res.status(400).json({ errores: errors.array() });
    }
    const productoNuevo = new Producto(req.body);
    await productoNuevo.save(); // nos sirve para guardar el producto en la base
    res.status(201).json({
      mensaje: "el producto esta creado con exito",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "error al crear los productos",
    });
  }
};
export const borrarProducto = async (req, res) => {
  try {
    // buscar el id del front y borrar
    // console.log(req.params.id);// devuelve el parametro q pasamos como id
    await Producto.findByIdAndDelete(req.params.id);
    res.status(200).json({
      mensaje: "el producto fue eliminado",
    });
  } catch (error) {
    res.status(404).json({
      mensaje: "error en eliminar el producto",
    });
    console.log(error);
  }
};
export const editarProducto = async (req, res) => {
  try {
    // extraer id del request y el body
    await Producto.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json(
    {
      mensaje: "el producto fue editado",
    });
  } catch (error) {
    res.status(404).json(
    {
      mensaje: "error en editar el producto",
    });
    console.log(error);
  }
};
export const obtenerProductoId = async (req, res) => {
  try {
    //nos encargamos de obtener los valores de la base de datos devolvera un array vacio
    const productosGuardado = await Producto.findById(req.params.id);
    res.status(200).json(productosGuardado);
  } catch (error) {
    res.status(404).json({
      mensaje: "error al buscar producto por id ",
    });
    console.log(error);
  }
};

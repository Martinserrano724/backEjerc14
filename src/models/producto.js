import { Schema ,model } from "mongoose";
const productoSchema = new Schema({
    nombreProducto: {
        type: String,
        minLength:2,
        maxLength:100,
        unique:true,
        required:true

    },
    cantidadPlatos:{
        type: Number,
        min: 1,
        max:100,
        required: true
    },
    imagen:{
        type: String,
        required: true
    },
    procesoPreracion:{
        type:String,
        required:true
    },
    ingrediente:{
        type:String,
        required:true
    },
})

const Producto = model('producto',productoSchema)
export default Producto;
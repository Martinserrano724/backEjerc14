import { Schema ,model } from "mongoose";
const usaurioSchema = new Schema({
    nombreUsuario: {
        type: String,
        minLength:2,
        maxLength:100,
        unique:true,
        required:true

    },
    email: {
        type: String,
        maxLength:300,
        unique:true,
        required:true

    },
    password: {
        type: String,
        minLength:8,
        maxLength:20,
        unique:true,
        required:true

    },
    
})

const usuario = model('usuario',usaurioSchema)
export default usuario;
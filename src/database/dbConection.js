import {connect} from 'mongoose' // nos sirve para hacer una conecion
import { MONGODB_URI } from '../config'
(async() => {

    try {
        const db=await connect(MONGODB_URI,{family:4});
        console.log(`DB conectada en ${db.connection.name}`)
    } catch (error) {
        console.log(error);
    }
})() // funcion autoconbocada 
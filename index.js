import  express  from "express"; 
import cors from 'cors';
import morgan from "morgan";
import * as dotenv from 'dotenv'
import './src/database/dbConection'
import productoRouter from './src/routes/producto.routes'
import usuarioRouter from './src/routes/usario.routes'

dotenv.config(); // con esto puedo leer variables de entorno
// configurar puerto
// crear una instancia 
const app = express();
app.set("port", process.env.PORT || 4000);
app.listen(app.get("port"), ()=>console.log('estoy en el puerto' + app.get("port"))
);
// middlewares: funciones que ejecutarn alguna tarea antes de llegar alas rutas
app.use(cors()) // permite las conexiones remotas
app.use(express.json());//permite interpretar el formato json
app.use(express.urlencoded({extended: true}));//permite en el obj request los sting y arrays
app.use(morgan('dev'));

//rutas
app.use("/apireceta", productoRouter)
app.use("/apireceta", usuarioRouter)
// http://localhost:4000/apiReceta/productos




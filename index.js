import  express  from "express"; 
// configurar puerto
// crear una instancia 

const app = express();
app.set("port", process.env.PORT || 4000);
app.listen(app.get("port"), ()=>console.log('estoy en el puerto' + app.get("port"))
);


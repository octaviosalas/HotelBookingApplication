import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import connectDataBase from "./database/connectdb.js"
import hotelsRoutes from "./routes/hotels.routes.js"
import userRoutes from "./routes/users.routes.js"
import { agregarHoteles } from "./controllers/hotels.controllers.js"



const app = express()
const port = 4000

app.use(express.json())
app.use(express.text())
app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json({type:"*/*"}))
app.use(express.urlencoded({extended:true}))

app.use(hotelsRoutes)
app.use(userRoutes)



app.get('/', (req, res) => {
    res.send('Bienvenidos a tu Servidor de Articulos MERN!!!!!!!!')
  })
  
app.listen(port, () => {
    console.log(`El servidor esta funcionando correctamente en el puerto ${port} ✔✔`)
   connectDataBase()
    
   
  })

  
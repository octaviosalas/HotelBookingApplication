import express from "express"
import bodyParser from "body-parser"
import connectDataBase from "./database/connectdb.js"



const app = express()
const port = 4000

app.use(express.json())
app.use(express.text())

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json({type:"*/*"}))
app.use(express.urlencoded({extended:true}))



app.get('/', (req, res) => {
    res.send('Bienvenidos a tu Servidor de Articulos MERN!!!!!!!!')
  })
  
app.listen(port, () => {
    console.log(`El servidor esta funcionando correctamente en el puerto ${port} ✔✔`)
   connectDataBase()
   
  })

  
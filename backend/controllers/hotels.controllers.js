import Hotels from "../models/hotels.js"

/*export const agregarHoteles = async (req, res) => { try { const info =  await Hotels.find();console.log(info)} catch (error) console.log(error)}*/


export const getHotels = (req, res) => { 
     Hotels.find()
           .then((hotels) => {
                     res.send(hotels);
            })
           .catch((err) => {
                     console.log(err);
                     res.status(500).send("Error al obtener los hoteles");
             });
}
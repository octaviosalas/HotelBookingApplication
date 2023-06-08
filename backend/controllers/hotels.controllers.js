import Hotels from "../models/hotels.js"

/*export const agregarHoteles = async (req, res) => { try { const info =  await Hotels.isertMany();console.log(info)} catch (error) console.log(error)}*/


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

export const getHotelsById = async (req, res) => { 

    const {id} = req.params
    console.log(req.params)

   Hotels.find({id: id})
         .then((hotel) => { 
            res.json(hotel)
         })
         .catch((err) => { 
            console.log(err)
         })
   
}
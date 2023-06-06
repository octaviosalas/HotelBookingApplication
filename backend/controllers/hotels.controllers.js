import Hotels from "../models/hotels.js"


export const agregarHoteles = async (req, res) => { 
  

    try {
      

      
      const info =  await Hotels.find();
      console.log(info)
       
    } catch (error) {
         console.log(error)
    }
}
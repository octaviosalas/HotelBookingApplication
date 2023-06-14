import Hotels from "../models/hotels.js"
import Favourites from "../models/favouriteHotels.js"
import Reserves from "../models/reserves.js"


export const agregarHoteles = async (req, res) => {
   const hoteles = [
     {
       id: 16,
       name: "Sordeum Maximium",
       country: "Francia",
       city: "Paris",
       bedrooms: 161,
       adress: "Av Eifffel 1762",
       servicies: [ "Gym", "Pool", "Concerts", "PlayRoom", "TennisCourt", "all meals included", "beach", "massage therapist", "Basketball court", "open bar on drinks from 10 to 3"],
       averagePrice: "116",
       img: ["https://media.revistagq.com/photos/5ca5ef48e4ce21bde6b0159f/16:9/pass/hoteles_5_estrellas_2019_7182.jpg", "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/0a/76/7c/hotel-prestigieux-parisien.jpg?w=1200&h=-1&s=1", "https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/367343751.jpg?k=d4d67226e7663fe92ae34da5c68e92e2f27453f381df662e847884205ef0828b&o=", "https://hips.hearstapps.com/elle-es/assets/16/40/four-seasons-hotel-toronto-at-yorkville.jpg", "https://www.peninsula.com/-/media/images/the-peninsula-hotels/group-offer/rppr-garden-suite-1-1074.jpg?mw=987&hash=5E07EAF0340CDD799B889A2C78A6DE3A", "https://static.hosteltur.com/app/public/uploads/img/articles/2015/02/01/L_5b14fa96e78e8_shutterstock_luxuryhotel.jpg"],
       telephone: 68329523525,
       stars: 5,
       continent: "europa",
       puntuaction: 9,
       email: "ordeum Maximium@hotelfrance.com"
     },
     {
      id: 17,
      name: "Louris Hotel",
      country: "Portugal",
      city: "Lisboa",
      bedrooms: 41,
      adress: "Dshboard 182",
      servicies: [ "Gym", "Pool", "Concerts", "PlayRoom", "TennisCourt", "all meals included", "beach", "massage therapist", "Basketball court", "open bar on drinks from 10 to 3"],
      averagePrice: "65",
      img: ["https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/5f/51/b1/pestana-porto-a-brasileira.jpg?w=1200&h=-1&s=1", "https://media-cdn.tripadvisor.com/media/photo-s/29/1c/27/02/pool.jpg", "https://cdn.forbes.com.mx/2016/11/wbmexico0715-four-seasons-punta-mita-e1478672924342.jpg", "https://www.kayak.es/rimg/himg/e7/ef/9c/expediav2-125317-3de756-536899.jpg?width=1366&height=768&crop=true", "https://www.tonobagno.com/wp-content/uploads/2017/01/ba%C3%B1os-modernos-para-hoteles.-hotel-ohla-barcelona_.jpg", "https://www.ahstatic.com/photos/8932_ho_00_p_1024x768.jpg"],
      telephone: 893652398569,
      stars: 4,
      continent: "europa",
      puntuaction: 7,
      email: "lorishotels@hotellouris.com"
    }
   ];
   
 
   try {
     const info = await Hotels.insertMany(hoteles);
     console.log(info);
     res.status(200).json({ message: 'Hoteles agregados correctamente' });
   } catch (error) {
     console.log(error);
     res.status(500).json({ message: 'Error al agregar hoteles' });
   }
 };





 
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

export const saveHotelByFavourite = async (req, res) => { 
    const {id, userId, name, country, city, adress, servicies, img, averagePrice, telephone, email, stars} = req.body
    console.log(req.body)

    try {
        const newFav = new Favourites ({ 
          id: id,
          userId: userId,
          name: name,
          country: country, 
          city: city,
          adress: adress,
          servicies: servicies, 
          img: img,
          averagePrice: averagePrice,
          telephone: telephone,
          email: email,
          stars: stars
        })
        await newFav.save()
        res.json({message: "Saved in Favourites"})
    } catch (err) {
       console.log(err)
       res.send(err)
    }
}


export const getFavourites = async (req, res) => { 
      const {userId} = req.params
     try {
        const searchFavourites = await Favourites.find({userId: userId}) 
        res.send(searchFavourites)
     } catch (error) {
        console.log(error)
     }
} 

export const deleteFavorite = async (req, res) => { 
       try {    
            const hotelToBeDeleted = (req.body.id)
            await Favourites.findByIdAndDelete(hotelToBeDeleted);
            res.send("Producto Eliminado de la seccion de Favoritos")
       } catch (error) {
           console.log(error)
     }
}

export const reciveReserves = async (req, res) => { 

    const {hotelId, userId, userName,  name, checkIn, checkOut, amountPeople , totalPrice} = req.body

    try {
        const newReservToBeSaved = new Reserves( { 
            hotelId: hotelId,
            userId: userId,
            userName: userName,
            name: name,
            checkIn: checkIn,
            checkOut: checkOut,
            amountPeople: amountPeople,
            totalPrice: totalPrice
        })  
        await newReservToBeSaved.save()
        res.json({message: "The reserv has been saved successfully ✔"})
        console.log("The reserv has been saved successfully ✔")
    } catch (error) {
        console.log(error)
        res.send(error)
    }
    
}

export const getReserves = async (req, res) => { 
   
     const {userId} = req.params
     try {
       const searchReserves = await Reserves.find({userId: userId})
       res.send(searchReserves)
     } catch (error) {
        console.log(error)
     }   


}
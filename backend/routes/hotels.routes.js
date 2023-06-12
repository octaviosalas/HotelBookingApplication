import express from "express"
const hotelsRoutes = express.Router()
import {getHotels, getHotelsById, saveHotelByFavourite, getFavourites, deleteFavorite} from "../controllers/hotels.controllers.js"

hotelsRoutes.get("/getHotels", getHotels)
hotelsRoutes.get("/getHotelsById/:id", getHotelsById)
hotelsRoutes.post("/favouritesHotels", saveHotelByFavourite)
hotelsRoutes.get("/getFavouritesHotelsOfUser/:userId", getFavourites)
hotelsRoutes.post("/deleteHotelOfFavorite", deleteFavorite)

export default hotelsRoutes
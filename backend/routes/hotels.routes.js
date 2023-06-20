import express from "express"
const hotelsRoutes = express.Router()
import {getHotels, getHotelsById, saveHotelByFavourite, getFavourites, deleteFavorite, getReserves, reciveReserves, deleteReserv, saveOpinion, getOpinions} from "../controllers/hotels.controllers.js"

hotelsRoutes.get("/getHotels", getHotels)
hotelsRoutes.get("/getHotelsById/:id", getHotelsById)
hotelsRoutes.post("/favouritesHotels", saveHotelByFavourite)
hotelsRoutes.get("/getFavouritesHotelsOfUser/:userId", getFavourites)
hotelsRoutes.post("/deleteHotelOfFavorite", deleteFavorite)
hotelsRoutes.post("/reserves", reciveReserves)
hotelsRoutes.get("/getReserves/:userId", getReserves)
hotelsRoutes.post("/deleteReserve/:userId", deleteReserv)
hotelsRoutes.post("/saveMyOpinion", saveOpinion)
hotelsRoutes.get("/showOpinions/:id", getOpinions)

export default hotelsRoutes
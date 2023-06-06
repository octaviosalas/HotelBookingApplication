import express from "express"
const hotelsRoutes = express.Router()
import {getHotels, getHotelsById} from "../controllers/hotels.controllers.js"

hotelsRoutes.get("/getHotels", getHotels)
hotelsRoutes.get("/getHotelsById/:id", getHotelsById)

export default hotelsRoutes
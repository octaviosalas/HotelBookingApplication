import express from "express"
const hotelsRoutes = express.Router()
import {getHotels} from "../controllers/hotels.controllers.js"

hotelsRoutes.get("/getHotels", getHotels)

export default hotelsRoutes
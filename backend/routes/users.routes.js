import express from "express"
const userRoutes = express.Router()
import { register, login, getUserById } from "../controllers/user.controllers.js"

userRoutes.post("/registerUser", register)

userRoutes.post("/loginUser", login)

userRoutes.get("/getUserById/:id", getUserById)

export default userRoutes;
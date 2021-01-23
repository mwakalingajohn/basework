import express from "express"
import Controller from "./controller"
import { registrationValidator } from "./validation"

const authRouter = express.Router({ strict: false })
const controller = new Controller()

authRouter.post("/register", registrationValidator(), controller.register)

export default authRouter
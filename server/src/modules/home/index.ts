import express from "express"
import Controller from "./controller"

const homeRouter = express.Router({ strict: false })
const controller = new Controller()

homeRouter.get("/", controller.index)

export default homeRouter
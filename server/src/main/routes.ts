import { r } from "../library/helpers"
import authRouter from "../modules/authentication"
import homeRouter from "../modules/home"

const appRoutes: any[] = [
    r("/", homeRouter),
    r("auth", authRouter)
]

const prefix = "/api"

export { prefix, appRoutes }
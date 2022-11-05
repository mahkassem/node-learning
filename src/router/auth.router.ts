import { Router } from "express"
import { loginHandler, registerHandler } from "../controllers/auth.controller"

const authRouter = Router()

authRouter.post(
    '/register', // ? URI
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    registerHandler // ? Controller
)

authRouter.post(
    '/login', // ? URI
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    loginHandler // ? Controller
)

export default authRouter
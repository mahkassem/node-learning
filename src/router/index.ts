import { Router } from "express"
import authRouter from "./auth.router"
import filesRouter from './files.router'
import studentsRouter from './students.router'

const router = Router()

router.use("/files", filesRouter)
router.use("/students", studentsRouter)
router.use("/auth", authRouter)

export default router
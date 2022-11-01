import {Router} from "express"
import fileRouter from "./file.router"
import studentRouter from "./student.router"

const router = Router()

router.use("/student", studentRouter)
router.use("/file", fileRouter)

export default router
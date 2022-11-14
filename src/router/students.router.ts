import { Router } from "express"
import { createStudentHandler, getAllStudents, getStudentById, getStudentWithUserById } from "../controllers/students.controller"
import { authGuard } from "../services/auth.service"

const studentsRouter = Router()

studentsRouter.get(
    '/',
    authGuard,
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    getAllStudents
)

studentsRouter.post(
    '/',
    authGuard,
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    createStudentHandler
)

studentsRouter.get(
    '/:id',
    authGuard,
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    getStudentById
)

studentsRouter.get(
    '/with-user/:id',
    authGuard,
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    getStudentWithUserById
)

export default studentsRouter
import { Router } from "express"
import { getFileByNameHandler, updateFileByNameHandler, uploadFileHandler } from "../controllers/files.controller"
import { authGuard } from "../services/auth.service"
import { getFileByNameValidator, updateFileByNameValidator } from "../validators/files.validator"

const filesRouter = Router()

filesRouter.get(
    '/:name', // ? URI
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    authGuard, // ! Auth guard
    getFileByNameValidator, // ! Validator
    getFileByNameHandler // * Handler
)

filesRouter.put(
    '/:name', // ? URI
    updateFileByNameValidator, // ! Validator
    updateFileByNameHandler // * Handler
)

filesRouter.post(
    '/upload',  // ? UR
    uploadFileHandler // * Handler
);

export default filesRouter
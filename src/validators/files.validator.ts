import { Request, Response, NextFunction } from "express"
import path from 'path'
import log from "../utils/logger"
import { fileExists } from "./shared.validator"

const basePath = path.join(__dirname, '..', '..', 'storage')

const getFileByNameValidator = (req: Request, res: Response, next: NextFunction): any => {
    const { name } = req.params
    if (!fileExists(path.join(basePath, name))) {
        log(`File ${name} not found`)
        return res.status(404).send('File not found')
    }

    next()
}

const updateFileByNameValidator = (req: Request, res: Response, next: NextFunction): any => {
    const { name } = req.params
    if (!fileExists(path.join(basePath, name)))
        return res.status(404).send('File not found')

    const { content } = req.body
    if (content === undefined)
        return res.status(400).send('content is required')

    next()
}
export { getFileByNameValidator, updateFileByNameValidator }
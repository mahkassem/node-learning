import { Request, Response } from "express"
import { getFileByNameService, updateFileByNameService } from "../services/files.service"
import log from "../utils/logger"

const getFileByNameHandler = (req: Request, res: Response): any => {
    try {
        const { name } = req.params
        const file = getFileByNameService(name)
        return res.send(file)
    } catch (error) {
        // log error to file
        log(error as string)
        return res.status(500).send("Internal Server Error")
    }
}

const updateFileByNameHandler = (req: Request, res: Response): any => {
    try {
        const { name } = req.params
        const { content } = req.body
        updateFileByNameService(name, content)
        return res.send('File updated successfully')
    } catch (error) {
        // log error to file
        log(error as string)
        return res.status(500).send("Internal Server Error")
    }
}

export { getFileByNameHandler, updateFileByNameHandler }
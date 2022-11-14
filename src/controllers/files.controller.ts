import { Request, Response } from "express"
import { UploadedFile } from "express-fileupload"
import { updateFileByNameService, uploadFileService } from "../services/files.service"
import log from "../utils/logger"
import { join } from "path"

const getFileByNameHandler = (req: Request, res: Response): any => {
    try {
        const { name } = req.params
        // const file = getFileByNameService(name)
        return res.sendFile(join(__dirname, '..', '..', 'storage', name))
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

const uploadFileHandler = async (req: Request, res: Response): Promise<any> => {
    try {
        const { file } = req.files as { file: UploadedFile }
        const path = await uploadFileService(file)
        return res.send(path)
    } catch (error) {
        // log error to file
        log(error as string)
        return res.status(500).send("Internal Server Error")
    }
}

export { getFileByNameHandler, updateFileByNameHandler, uploadFileHandler }
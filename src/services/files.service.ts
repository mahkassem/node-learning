import { UploadedFile } from 'express-fileupload'
import fs from 'fs'
import { join } from 'path'

const getFileByNameService = (name: string): Buffer => {
    const basePath = join(__dirname, '..', '..', 'storage')
    return fs.readFileSync(join(basePath, name))
}

const updateFileByNameService = (name: string, content: string): void => {
    const basePath = join(__dirname, '..', '..', 'storage')
    fs.writeFileSync(join(basePath, name), content)
}

const uploadFileService = async (file: UploadedFile, options?: { name?: string, dir?: string }): Promise<string> => {
    const name = options?.name ?? file.name
    const dir = options?.dir ?? 'storage'
    const basePath = join(__dirname, '..', '..', dir, name)
    await file.mv(basePath)
    return name
}

export { getFileByNameService, updateFileByNameService, uploadFileService }
import fs from 'fs'
import path from 'path'

const getFileByNameService = (name: string): Buffer => {
    const basePath = path.join(__dirname, '..', '..', 'storage')
    return fs.readFileSync(path.join(basePath, name))
}

const updateFileByNameService = (name: string, content: string): void => {
    const basePath = path.join(__dirname, '..', '..', 'storage')
    fs.writeFileSync(path.join(basePath, name), content)
}

export { getFileByNameService, updateFileByNameService }
import fs from 'fs'

const fileExists = (path: string): boolean => {
    return fs.existsSync(path)
}
export { fileExists }
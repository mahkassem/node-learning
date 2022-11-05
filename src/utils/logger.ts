import fs from 'fs'
import path from 'path'

const loggerPath = path.join(__dirname, '..', '..', 'storage', 'logs.txt')

const log = (message: string): void => {
    // add new line to the end of the current logs.txt file
    const currentDate = new Date().toDateString()
    fs.appendFileSync(loggerPath, `${currentDate} :: ${message} \n`)
}

export default log
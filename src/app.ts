import express, { json, urlencoded } from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import router from './router'
import listEndpoints from 'express-list-endpoints'
import fileUpload from 'express-fileupload'
import env from './utils/helpers/env.helper'

const app = express()
const port = 3000

app.use(
    cors(),
    json(),
    urlencoded({ extended: true }),
    helmet(),
    morgan(env('ENV') === 'dev' ? 'dev' : 'prod'),
)

app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/',
    limits: { fileSize: 1 * 1024 * 1024 },
    debug: env('ENV') === 'dev',
    abortOnLimit: true,
    responseOnLimit: 'File size limit has been reached'
}))

app.get('/', (req, res) => {
    return res.send(listEndpoints(app))
})

app.use("/api", router)

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})

export default app
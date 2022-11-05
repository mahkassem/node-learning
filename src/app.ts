import express, { json } from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import router from './router'
import listEndpoints from 'express-list-endpoints'

const app = express()
const port = 3000

app.use(
    cors(),
    json(),
    helmet(),
    morgan('dev')
)

app.get('/', (req, res) => {
    return res.send(listEndpoints(app))
})

app.use("/api", router)

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})

export default app
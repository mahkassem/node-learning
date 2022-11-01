import express, { Application, json } from "express";
import router from "./router";

const app: Application = express()
const port = 3000

app.use(json())

app.use(router)

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
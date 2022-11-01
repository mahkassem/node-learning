import { Router } from "express"
import fs from "fs"
import path from "path"

const fileRouter = Router()

fileRouter.get("/:file_name", (req, res) => {
    try {
        const fileName = req.params.file_name
        const storagePath = path.join(__dirname, "..", "..", "storage")
        const file = fs.readFileSync(`${storagePath}/${fileName}`, "utf-8")
        res.send(file)
    } catch (error) {
        res.status(404).send("File not found")
    }
})

fileRouter.put("/:file_name", (req, res) => {
    try {
        const fileName = req.params.file_name
        const storagePath = path.join(__dirname, "..", "..", "storage")
        const content = req.body.content
        fs.writeFileSync(`${storagePath}/${fileName}`, content, "utf-8")
        res.send("File updated")
    } catch (error: unknown) {
        res.status(400).send(error)
    }
})

export default fileRouter
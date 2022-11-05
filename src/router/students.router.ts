import { Router, Request, Response, NextFunction } from "express"

const studentsRouter = Router()

studentsRouter.get('/',
    (req: Request, res: Response, next: NextFunction) => {
        const { id } = req.query
        if (id === undefined)
            return res.status(400).send('id is required')
        next()
    },
    (req: Request, res: Response) => {
        const { id } = req.query as { id: string }
        res.send(`Hello World! ${id} from studentsRouter`)
    }
)

export default studentsRouter
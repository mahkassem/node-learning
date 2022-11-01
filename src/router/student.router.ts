import { Router } from "express";

const studentRouter = Router();

studentRouter.get("/", (req, res) => {
    res.send("Hello World!")
})

export default studentRouter;
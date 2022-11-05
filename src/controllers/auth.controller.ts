import { Request, Response } from "express"
import AuthService from "../services/auth.service"

const _authService = new AuthService();

const registerHandler = async (req: Request, res: Response): Promise<void> => {
    try {
        const user = req.body;

        const registeredUser = await _authService.register(user);

        res.status(201).json(registeredUser);
    } catch (error: any) {
        res.status(500).json({ message: error?.message });
    }
}

const loginHandler = async (req: Request, res: Response): Promise<void> => {
    try {
        const user = req.body;

        const loggedUser = await _authService.login(user);

        res.status(200).json(loggedUser);
    } catch (error: any) {
        res.status(500).json({ message: error?.message });
    }
}

export { registerHandler, loginHandler }
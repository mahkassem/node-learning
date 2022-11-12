import { Request, Response, RequestHandler } from "express"
import AuthService from "../services/auth.service";
import StudentsServices from "../services/students.service"
import UsersService from "../services/users.service";

const _studentService = new StudentsServices();
const _authService = new AuthService();
const _usersService = new UsersService();

const createStudentHandler = (async (req: Request, res: Response): Promise<void> => {

    try {
        const { user, student } = req.body;
        const plainPassword = user.password as string;
        const createdUser = await _authService.register(user);
        student.user_id = createdUser.id as number;
        const createdStudent = await _studentService.createStudent(student);
        createdUser.password = plainPassword;
        res.status(200).json({ user: createdUser, student: createdStudent });
    } catch (error: any) {
        res.status(500).send(error.message)
    }

}) as RequestHandler;

const getStudentById = (async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params as unknown as { id: number };
        const student = await _studentService.getStudentById(id)
        const user = await _usersService.getUserById(student.user_id);
        res.status(200).json({ user, student });
    } catch (error: any) {
        res.status(500).send(error.message)
    }
}) as RequestHandler;

const getStudentWithUserById = (async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params as unknown as { id: number };
        const student = await _studentService.getStudentWithUserById(id)
        res.status(200).json(student);
    } catch (error: any) {
        res.status(500).send(error.message)
    }
}) as RequestHandler;

// const getAllStudents= async (req:Request,res:Response):Promise<void>=>{
//    try {
//     const allStudents=await __studentService.getAllStudents()
//     res.json(allStudents).status(200)
//    } catch (error:any) {
//     res.status(500).send("error?.message")
//    }

// }


export { createStudentHandler, getStudentById, getStudentWithUserById }
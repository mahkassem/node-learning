import { Request, Response, RequestHandler } from "express"
import { Student } from "../entities/students.entity";
import { User } from "../entities/users.entity";
import AuthService from "../services/auth.service";
import { sendMail } from "../services/mail.service";
import StudentsServices from "../services/students.service"
import UsersService from "../services/users.service";
import { PaginationOptions } from "../utils/data/pagination-options.interface";

const _studentService = new StudentsServices();
const _authService = new AuthService();
const _usersService = new UsersService();

const createStudentHandler = (async (req: Request, res: Response): Promise<void> => {

    try {
        const { user, student } = req.body as { user: User, student: Student };
        // const { avatar } = req.files as { avatar: UploadedFile };
        // const filePath = await uploadFileService(avatar);
        // student.avatar = filePath;
        const plainPassword = user.password as string;
        const createdUser = await _authService.register(user);
        student.user_id = createdUser.id as number;
        const createdStudent = await _studentService.createStudent(student);
        createdUser.password = plainPassword;
        // send mail to user
        void sendMail({
            name: createdUser.name,
            email: createdUser.username,
            subject: 'Welcome to School',
            message: `Welcome to School, your account has been created successfully, use this email as username: ${createdUser.username}, and this is your password: ${plainPassword}`
        })
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

const getAllStudents = async (req: Request, res: Response): Promise<void> => {
    try {
        const paginationOptions = req.query as unknown as PaginationOptions;
        const allStudents = await _studentService.getAllStudents(paginationOptions)
        res.send(allStudents)
    } catch (error: any) {
        res.status(500).send("error?.message")
    }

}


export { createStudentHandler, getStudentById, getAllStudents, getStudentWithUserById }
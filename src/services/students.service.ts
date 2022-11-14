import StudentsEntity, { Student } from "../entities/students.entity";
import { PaginationOptions } from "../utils/data/pagination-options.interface";

const _studentsEntity = new StudentsEntity();

class StudentsService {
    async createStudent(student: Student): Promise<Student> {
        const createdStudent = await _studentsEntity.createStudent(student);
        return createdStudent;
    }

    async getStudentById(id: number): Promise<Student> {
        const student = await _studentsEntity.getStudentById(id);
        return student;
    }

    async getStudentWithUserById(id: number): Promise<any> {
        const student = await _studentsEntity.getStudentWithUserById(id);
        return student;
    }

    async getAllStudents(options?: PaginationOptions): Promise<Student[]> {
        const students = await _studentsEntity.getAllStudents(options);
        return students;
    }
}

export default StudentsService;
import StudentsEntity, { Student } from "../entities/students.entity";

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

    async getAllStudents(): Promise<Student[]> {
        const students = await _studentsEntity.getAllStudents();
        return students;
    }

    async getStudentWithUserById(id: number): Promise<any> {
        const student = await _studentsEntity.getStudentWithUserById(id);
        return student;
    }
}

export default StudentsService;
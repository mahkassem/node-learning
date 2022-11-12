/* eslint-disable @typescript-eslint/naming-convention */
import db from '../providers/database.provider';

interface Student {
    id: number;
    user_id: number;
    grade: string;
    classroom: string;
    created_at: Date;
}

class StudentsEntity {
    async createStudent(student: Student): Promise<Student> {
        const { user_id, grade, classroom } = student;
        const { rows } = await db.query(
            'INSERT INTO students (user_id, grade, classroom) VALUES ($1, $2, $3) RETURNING *',
            [user_id, grade, classroom]
        );
        return rows[0];
    }

    async getStudentById(id: number): Promise<Student> {
        const { rows } = await db.query('SELECT * FROM students WHERE id = $1', [id]);
        return rows[0];
    }

    async getAllStudents(): Promise<Student[]> {
        const { rows } = await db.query('SELECT * FROM students');
        return rows;
    }

    async getStudentWithUserById(id: number): Promise<any> {
        const { rows } = await db.query(
            'SELECT s.*, u.* FROM students AS s INNER JOIN users as u ON s.user_id = u.id WHERE s.id = $1',
            [id]
        );
        return rows[0];
    }
}


export { Student };
export default StudentsEntity;
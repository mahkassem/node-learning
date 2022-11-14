/* eslint-disable @typescript-eslint/naming-convention */
import db from '../providers/database.provider';
import { PaginationOptions } from '../utils/data/pagination-options.interface';

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

    // perPage = 25,  page = 37
    // SELECT * FROM students LIMIT 15 OFFSET ?;

    async getAllStudents(options?: PaginationOptions): Promise<Student[]> {
        const { page, perPage } = options as PaginationOptions;
        let query = `SELECT * FROM students`;
        if (page !== undefined) {
            query += ` LIMIT ${perPage ?? 5} OFFSET ${perPage ?? 5 * (page - 1)}`;
        }
        const { rows } = await db.query(query);
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
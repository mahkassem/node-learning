import StudentManager, { Student } from "../modules/student.manager"
let student: StudentManager
let studentData: Student

describe('Student Manager Class', () => {
    beforeAll(() => {
        studentData = {
            name: 'John Doe',
            age: 20,
            hobbies: [
                { name: 'Reading', description: 'Reading books' },
            ]
        }
        student = new StudentManager(studentData)
    })

    it('It should set/get name', () => {
        student.setStudentName('John Doe 2')
        expect(student.getStudentName()).toBe('John Doe 2')
    })

    it('It should set/get age', () => {
        student.setStudentAge(21)
        expect(student.getStudentAge()).toBe(21)
    })
})
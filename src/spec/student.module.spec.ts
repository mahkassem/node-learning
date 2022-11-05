import StudentManager, { Student } from "../modules/student-manager.module"
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
        student.setName('John Doe 2')
        expect(student.getName()).toBe('John Doe 2')
    })

    it('It should set/get age', () => {
        student.setAge(21)
        expect(student.getAge()).toBe(21)
    })
})
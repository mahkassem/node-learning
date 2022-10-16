interface Student {
    name: string
    age: number
    hobbies?: Hobby[]
}

interface Hobby {
    name: string
    description: string
}

interface IStudentManager {
    getStudentName(): string
    setStudentName(name: string): void
    getStudentAge(): number
    setStudentAge(age: number): void
    getStudentHobbies(): Hobby[]
    setStudentHobbies(hobbies: Hobby[]): void
}

class StudentManager implements IStudentManager {
    private student: Student

    constructor(student: Student) {
        this.student = student
    }

    getStudentName(): string {
        return this.student.name
    }

    setStudentName(name: string): void {
        this.student.name = name
    }

    getStudentAge(): number {
        return this.student.age
    }

    setStudentAge(age: number): void {
        this.student.age = age
    }

    getStudentHobbies(): Hobby[] {
        return this.student.hobbies || []
    }

    setStudentHobbies(hobbies: Hobby[]): void {
        this.student.hobbies = hobbies
    }
}

export { Student, Hobby }
export default StudentManager
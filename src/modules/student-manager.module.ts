interface Student {
    name: string
    age: number
    hobbies: Hobby[]
}

interface Hobby {
    name: string
    description: string
}

interface IStudentManager {
    getName: () => string
    getAge: () => number
    getHobby: (index: number) => Hobby
    getAllHobbies: () => Hobby[]
    setName: (name: string) => void
    setAge: (age: number) => void
    addHobby: (hobby: Hobby) => void
}

class StudentManager implements IStudentManager {
    private student: Student

    constructor(student: Student) {
        this.student = student
    }

    /**
     * @description Get the name of the student
     * @returns {string} student name
     */
    getName(): string {
        return this.student.name
    }

    /**
     * @description Get the age of the student
     * @returns {number} student age
     */
    getAge(): number {
        return this.student.age
    }

    /**
     * @description Get the hobby of the student
     * @param {number} index - The index of the hobby
     * @returns {Hobby} student hobby
     * @throws {Error} If the index is out of range
     */
    getHobby(index: number): Hobby {
        const length = this.student.hobbies?.length ?? - 1
        if (length < 0) {
            throw new Error('Index out of range')
        }
        return this.student.hobbies[index]
    }

    /**
     * @description Get all hobbies of the student
     * @returns {Hobby[]} student hobbies
     */
    getAllHobbies(): Hobby[] {
        return this.student.hobbies ?? []
    }

    /**
     * @description Set the name of the student
     * @param {string} name - The name of the student
     * @returns {void}
     */
    setName(name: string): void {
        this.student.name = name
    }

    /**
     * @description Set the age of the student
     * @param {number} age - The age of the student
     * @returns {void}
     */
    setAge(age: number): void {
        this.student.age = age
    }

    /**
     * @description Add a hobby to the student
     * @param {Hobby} hobby - The hobby of the student
     * @returns {void}
     */
    addHobby(hobby: Hobby): void {
        this.student.hobbies.push(hobby)
    }

}

export { IStudentManager, Student, Hobby }
export default StudentManager
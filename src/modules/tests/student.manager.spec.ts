import StudentManager, { Student } from "../student.manager";
const studentAData: Student = {
    name: "Mahmoud Ahmed",
    age: 25,
    hobbies: [
        { name: "Programming", description: "I love programming" },
        { name: "Reading", description: "I love reading" },
    ]
}
let studentA: StudentManager

describe("Student Manager Class", () => {
    beforeAll(() => {
        studentA = new StudentManager(studentAData);
    })

    it("Shoud change name", () => {
        studentA.setStudentName("Mahmoud Ahmed Mahmoud");
        expect(studentA.getStudentName()).toBe("Mahmoud Ahmed Mahmoud");
    })

    it("Shoud change age", () => {
        studentA.setStudentAge(26);
        expect(studentA.getStudentAge()).toBe(26);
    })
})
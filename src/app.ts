import StudentManger from './modules/student.manager'
const StudentA = new StudentManger({
  name: 'Mahmoud Ahmed',
  age: 25,
  hobbies: [
    { name: 'Programming', description: 'I love programming' },
    { name: 'Reading', description: 'I love reading' },
  ]
})

StudentA.setStudentName('Mahmoud Ahmed Mahmoud')

const StudentFirstHobbyDescription = StudentA.getStudentName()

console.log(StudentFirstHobbyDescription)
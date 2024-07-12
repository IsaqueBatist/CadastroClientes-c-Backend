$("#inputphone3").mask('(00) 00000-0000')
let alunos = [
  {
    id: 1,
    name: 'Pedro Antonio',
    email: 'pedro@gmail.com',
    phone: '(15) 99999-9999',
    course: 1,
    period: 'Tarde',
  }
]


const courses = [
  {id: 1, course: 'Java'},
  {id: 2, course: 'Python'},
  {id: 3, course: 'TypeScript'},
  {id: 4, course: 'Angular'},
  {id: 5, course: 'React'}
]

function loadStudents(studentsArray){
  studentsArray.map((student) => putStudents(student))
}

function putStudents(student) {
  const body = document.getElementById('bodytabel')
  const {course} = courses[student.course]

    body.innerHTML+=`
    <tr>
      <th scope="row">${student.id}</th>
      <td>${student.name}</td>
      <td class="d-none d-md-table-cell">${student.email}</td>
      <td class="d-none d-md-table-cell">${student.phone}</td>
      <td class="d-none d-md-table-cell">${course}</td>
      <td class="d-none d-md-table-cell">${student.period}</td>
    </tr>
    `
}
const form = document.getElementById('registerForm')

form.addEventListener("submit", function(event) {
  event.preventDefault()
  
  let newAluno = {
    id: alunos.length + 1,
    name: document.getElementById('inputName3').value,
    email: document.getElementById('inputEmail3').value,
    phone: document.getElementById('inputphone3').value,
    course: document.getElementById('languages').value,
    period: document.querySelector('input[name=exampleRadios]:checked').value
  }
  alunos.push(newAluno)
  putStudents(newAluno)
  form.reset()
})

loadStudents(alunos)
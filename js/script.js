$("#inputphone3").mask('(00) 00000-0000')
let alunos = []
const courses = []
const form = document.getElementById('registerForm')

function loadStudents(studentsArray){
  studentsArray.map((student) => putStudents(student))
}
async function getStudents(){
  const {data} = await axios.get("http://localhost:8080/students")
  console.log(data)
}
async function getCourses(){
  const {data} = await axios.get("http://localhost:8080/courses")
  data.map((c) => document.getElementById('languages').innerHTML += `<option value=${c.id}>${c.name}</option>`)
}
getCourses()
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
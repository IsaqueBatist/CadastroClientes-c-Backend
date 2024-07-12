$("#inputphone3").mask('(00) 00000-0000')
let courses = []
const form = document.getElementById('registerForm')

async function getStudents(){
  const {data} = await axios.get("http://localhost:8080/students")
  await getCourses()
  data.map((student) => putStudent(student))
}
async function getCourses(){
  const {data} = await axios.get("http://localhost:8080/courses")
  courses = data
  courses.map((c) => document.getElementById('languages').innerHTML += `<option value=${c.id}>${c.name}</option>`)
}
function putStudent(student) {
  const body = document.getElementById('bodytabel')
  const {name} = courses[student.idCourse-1]
  
  body.innerHTML+=`
  <tr>
  <th scope="row">${student.id}</th>
  <td>${student.name}</td>
      <td class="d-none d-md-table-cell">${student.email}</td>
      <td class="d-none d-md-table-cell">${student.phone}</td>
      <td class="d-none d-md-table-cell">${name}</td>
      <td class="d-none d-md-table-cell">${student.turn}</td>
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

getStudents()
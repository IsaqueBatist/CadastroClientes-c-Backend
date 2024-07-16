$("#inputphone3").mask('(00) 00000-0000')
let courses = []
let students = [
  {
    id: 1,
    name: 'Isaque Barbosa',
    email: 'isaque@gmail.com',
    phone: '(11)96999-9999',
    idCourse: 2,
    turn: 'Manhã'
  },
  {
    id: 2,
    name: 'Carlos Almeida',
    email: 'carlos@gmail.com',
    phone: '(11)55555-9999',
    idCourse: 1,
    turn: 'Noite'
  },
  {
    id: 3,
    name: 'Pedrão',
    email: 'soled_by_pedro@gmail.com',
    phone: '(11)12345-6789',
    idCourse: 2,
    turn: 'Tarde'
  }
]
const form = document.getElementById('registerForm')


async function getStudents() {
  try {
    const { data } = await axios.get("http://localhost:8080/students")
    if (courses.length == 0) {
      await getCourse()
    }
    students = students.concat(data)
    students.map((student) => putStudent(student))
  } catch (error) {
    students.map((student) => putStudent(student))
    console.error(error);
  }
}
async function getCourse() {
  try {
    const { data } = await axios.get("http://localhost:8080/courses")
    courses = data
    courses.map((c) => document.getElementById('languages').innerHTML += `<option value=${c.id}>${c.name}</option>`)
  } catch (error) {
    console.error(error);
  }
}
function putStudent(student) {
  const body = document.getElementById('bodytabel')
  const { name } = courses[student.idCourse - 1]

  body.innerHTML += `
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

form.addEventListener("submit", function (event) {
  event.preventDefault()
  document.getElementById('bodytabel').innerHTML = ''

  let newAluno = {
    name: document.getElementById('inputName3').value,
    email: document.getElementById('inputEmail3').value,
    phone: document.getElementById('inputphone3').value,
    idCourse: document.getElementById('languages').value,
    turn: document.querySelector('input[name=exampleRadios]:checked').value
  }
  axios.post('http://localhost:8080/students', newAluno)
  getStudents()
  form.reset()
  location.reload()
})

getStudents()
let prevStudents = localStorage.getItem("students");
let students = prevStudents ? JSON.parse(prevStudents) : [];

function signUp() {
  let name = document.getElementById("signUpName").value;
  let password = document.getElementById("signUpPassword").value;

  if (name && password) {
    let student = { name, password };
    students.push(student);
    localStorage.setItem("students", JSON.stringify(students));
    alert("Signed Up Successfully pleace login");
    window.location.href = "login.html";
  } else {
    alert("Please fill all fields.");
  }
}

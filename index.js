let currentUser = localStorage.getItem("currentUser");
const welcomeMessage = document.getElementById("welcomeMessage");

if (currentUser) {
  welcomeMessage.innerText = `Welcome, ${currentUser}!`;
} else {
  alert("Mister please login first...");
  window.location.href = "login.html";
}
function logout() {
    localStorage.removeItem("currentUser");
    alert("User logged out successfully");
    window.location.href = "login.html";
  }
  
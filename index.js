let currentUser = localStorage.getItem("currentUser");
const welcomeMessage = document.getElementById("welcomeMessage");

if (currentUser) {
  welcomeMessage.innerText = `Welcome, ${currentUser}!`;
} else {
  alert("No user loged in. Redirecting to Login.");
  window.location.href = "login.html";
}
function logout() {
    localStorage.removeItem("currentUser");
    alert("User logged out successfully");
    window.location.href = "login.html";
  }
  
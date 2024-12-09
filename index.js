let currentUser = localStorage.getItem("currentUser");
const welcomeMessage = document.getElementById("welcomeMessage");

if (currentUser) {
  welcomeMessage.innerText = `Welcome, ${currentUser}!`;
} else {
  alert("Sir, please signup first then login...");
  window.location.href = "signup.html";
}
function logout() {
    localStorage.removeItem("currentUser");
    alert("User logged out successfully");
    window.location.href = "login.html";
  }
  
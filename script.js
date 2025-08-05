const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const submitBtn = document.getElementById("submit");
const existingBtn = document.getElementById("existing");
const form = document.getElementById("loginForm");

// Show existing user button if credentials are saved
const savedUsername = localStorage.getItem("username");
const savedPassword = localStorage.getItem("password");

if (savedUsername && savedPassword) {
  existingBtn.style.display = "inline-block";
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  alert(`Logged in as ${username}`);

  if (checkbox.checked) {
    // Save credentials in localStorage
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    existingBtn.style.display = "inline-block";
  } else {
    // Clear credentials from localStorage
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    existingBtn.style.display = "none";
  }
});

existingBtn.addEventListener("click", function () {
  const storedUsername = localStorage.getItem("username");
  if (storedUsername) {
    alert(`Logged in as ${storedUsername}`);
  }
});

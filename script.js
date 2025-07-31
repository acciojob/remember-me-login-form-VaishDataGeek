//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("loginForm");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const checkbox = document.getElementById("checkbox");
  const existingBtn = document.getElementById("existing");

  // Show "Login as existing user" button if credentials exist
  const savedUsername = localStorage.getItem("username");
  const savedPassword = localStorage.getItem("password");
  if (savedUsername && savedPassword) {
    existingBtn.style.display = "inline-block";
  }

  // Submit event
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const username = usernameInput.value;
    const password = passwordInput.value;

    alert(`Logged in as ${username}`);

    if (checkbox.checked) {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
    } else {
      localStorage.removeItem("username");
      localStorage.removeItem("password");
    }

    existingBtn.style.display = checkbox.checked ? "inline-block" : "none";
  });

  // Existing user login
  existingBtn.addEventListener("click", function () {
    alert(`Logged in as ${savedUsername}`);
  });
});

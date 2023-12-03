function toggleForm(form) {
  var loginForm = document.getElementById("login-form");
  var signupForm = document.getElementById("signup-form");
  var loginToggle = document.getElementById("login-toggle");
  var signupToggle = document.getElementById("signup-toggle");

  if (form === "login") {
    loginForm.style.display = "block";
    signupForm.style.display = "none";
    loginToggle.disabled = true;
    signupToggle.disabled = false;
  } else {
    loginForm.style.display = "none";
    signupForm.style.display = "block";
    loginToggle.disabled = false;
    signupToggle.disabled = true;
  }
}

var users = {
  test1: "Asdf1234!",
  test2: "Qwer0987@",
};

function handleEnter(event, action) {
  if (event.key === "Enter") {
    action(event);
  }
}

function login(event) {
  event.preventDefault();

  var username = document.getElementById("username").value.trim();
  var password = document.getElementById("password").value.trim();

  var usernameError = document.getElementById("username-error");
  var passwordError = document.getElementById("password-error");
  usernameError.style.display = "none";
  passwordError.style.display = "none";

  if (!username) {
    usernameError.textContent = "Please enter username";
    usernameError.style.display = "block";
    return;
  }
  if (!password) {
    passwordError.textContent = "Please enter password";
    passwordError.style.display = "block";
    return;
  }

  if (users.hasOwnProperty(username)) {
    if (users[username] === password) {
      window.location.href = "index_logged_in.html";
    } else {
      passwordError.textContent = "Password is invalid";
      passwordError.style.display = "block";
    }
  } else {
    usernameError.textContent = "Username is invalid";
    usernameError.style.display = "block";
  }
}

function signup(event) {
  event.preventDefault();
  console.log("Signup function called");

  var username = document.getElementById("signup-username").value.trim();
  var password = document.getElementById("signup-password").value.trim();
  var reenterPassword = document
    .getElementById("signup-reenter-password")
    .value.trim();
  var usernameError = document.getElementById("signup-username-error");
  var passwordError = document.getElementById("signup-password-error");
  var reenterPasswordError = document.getElementById(
    "signup-reenter-password-error"
  ); // New error element for re-enter password
  var isPasswordEmpty = !password || !reenterPassword;

  // Clear any previous errors
  usernameError.style.display = "none";
  passwordError.style.display = "none";
  reenterPasswordError.style.display = "none"; // Hide previous errors if any
  console.log("here");
  // Check if username is empty
  if (!username) {
    console.log("here 2");
    usernameError.textContent = "Please enter username";
    usernameError.style.display = "block";
    return;
  }
  console.log("here 3");
  // Check if the password is empty
  if (isPasswordEmpty) {
    console.log("here 4");
    // Handle password empty error
    passwordError.textContent = "Please enter password";
    passwordError.style.display = "block";
    return;
  }
  console.log("here 5");
  // Check password complexity requirements
  var passwordPattern =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!passwordPattern.test(password)) {
    passwordError.textContent =
      "Password must be at least 8 characters long, contain one uppercase letter, one number, and one special character (@$!%*?&)";
    passwordError.style.display = "block";
    return;
  }

  // Check if passwords match
  if (password !== reenterPassword) {
    console.log("here 6");
    // Handle password mismatch error
    reenterPasswordError.textContent = "Passwords don't match";
    reenterPasswordError.style.display = "block";
    return;
  }
  console.log("here 7");

  // Check if the username is already taken
  if (users.hasOwnProperty(username)) {
    usernameError.textContent = "Username already taken";
    usernameError.style.display = "block";
    return;
  }
  
  users[username] = password;
  localStorage.setItem("users", JSON.stringify(users));
  window.location.href = "index_logged_in.html";
  // Clear the form (or redirect the user, show a success message, etc.)
  document.getElementById("signup-username").value = "";
  document.getElementById("signup-password").value = "";
  document.getElementById("signup-reenter-password").value = "";
}

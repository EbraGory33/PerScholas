let errorDisplay = document.getElementById("errorDisplay");

let regform = document.getElementById("registration");
let loginForm = document.getElementById("login");

regform.addEventListener("submit", function (event) {
  event.preventDefault();
  const username = regform.elements["username"].value.trim();
  const email = regform.elements["email"].value.trim();
  console.log(email);

  const password = regform.elements["password"].value;
  const passwordCheck = regform.elements["passwordCheck"].value;
  const terms = regform.elements["terms"].checked;
  // Validate The Form
  if (ValidateUsername(username) !== null) {
    errorDisplay.textContent = ValidateUsername(username);
    errorDisplay.style.display = "block";
  } else if (ValidateEmail(email) !== null) {
    errorDisplay.textContent = ValidateEmail(email);
    errorDisplay.style.display = "block";
  } else if (ValidatePassword(password, passwordCheck) !== null) {
    errorDisplay.textContent = ValidatePassword(password, passwordCheck);
    errorDisplay.style.display = "block";
  } else {
    console.log("success");
  }
});

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();
});

// --------------- Helper Functions

function ValidateUsername(username) {
  let usernameRegex = /^[A-Za-z0-9]+$/;
  if (username === "") {
    return "Username must not be blank";
  } else if (username.length < 4) {
    return "Username must have more than 4 characters";
  } else if (new Set(username).size < 2) {
    return "Username must have more than 2 unique characters";
  } else if (!usernameRegex.test(username)) {
    return "Username must not include special characters";
  } else {
    return null;
  }
}
function ValidateEmail(email) {
  let emailRegex = /\w+@example.com/;
  if (emailRegex.test(email)) {
    return 'must not be from the domain "example.com."';
    // return "Must provide a valid email";
  } else {
    return null;
  }
}
function ValidatePassword(password, passwordCheck) {
  if (password.length < 12) {
    return "Passwords must be at least 12 characters long.";
  }else if ()
  return null;
}

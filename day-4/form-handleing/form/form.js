function validateForm() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Regular expressions for validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

  // Validation for email
  if (!emailRegex.test(email)) {
    document.getElementById("emailError").innerHTML = "Invalid email format";
    return false;
  } else {
    document.getElementById("emailError").innerHTML = "";
  }

  // Validation for password
  if (!passwordRegex.test(password)) {
    document.getElementById("passwordError").innerHTML =
      "Invalid password format";
    return false;
  } else {
    document.getElementById("passwordError").innerHTML = "";
  }

  // Form is valid, submit the form
  return true;
}

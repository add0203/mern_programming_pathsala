// Function to validate form inputs
const validateForm = (event) => {
  event.preventDefault(); // Prevent default form submission

  // Get form input values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Regular expressions for validation
  const nameRegex = /^[a-zA-Z\s]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

  // Validate name
  if (!nameRegex.test(name)) {
    document.getElementById("nameError").textContent = "Invalid name format";
    return;
  } else {
    document.getElementById("nameError").textContent = "";
  }

  // Validate email
  if (!emailRegex.test(email)) {
    document.getElementById("emailError").textContent = "Invalid email format";
    return;
  } else {
    document.getElementById("emailError").textContent = "";
  }

  // Validate password
  if (!passwordRegex.test(password)) {
    document.getElementById("passwordError").textContent =
      "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number";
    return;
  } else {
    document.getElementById("passwordError").textContent = "";
  }

  // If all validations pass, submit the form
  document.getElementById("myForm").submit();
};

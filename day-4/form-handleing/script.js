// onkeyup = "firstNameChange(event)";

// const firstNameChange = (e) => {
//   //   console.log(e.target.value);
//   //   const val = e.target.value;
//   //   if (val.length > 32) {
//   //   }
// };

const submitForm = (e) => {
  //   console.log(e.value);
  e.preventDefault(); // Prevent default form submission
  // Get form input values
  const name = document.getElementById("name").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document
    .getElementById("confirmPassword")
    .value.trim();

  const nameRegex = /^[a-zA-Z\s]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  // "^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"
  //   console.log(typeof(Array.isArray[e.target]));
  const t = e.target;

  // object
  const res = {
    hobbies: [],
  };

  //   for (const i of t) {

  for (let i = 0; i < t.length; i++) {
    const ty = t[i].type;

    if (ty != "submit") {
      const nm = t[i].name;
      const vl = t[i].value;

      if (ty == "checkbox" && t[i].checked) {
        res.hobbies.push(vl);
      }
      if (ty != "checkbox") {
        if (ty != "text" && !nameRegex.test(name)) {
          document.getElementById("nameError").textContent =
            "Invalid name format";
          return;
        } else {
          res[nm] = vl;
          document.getElementById("nameError").textContent = "";
        }
        if (ty != "text" && !nameRegex.test(lastName)) {
          document.getElementById("lastNameError").textContent =
            "Invalid  last name format";
          return;
        } else {
          res[nm] = vl;
          document.getElementById("lastNameError").textContent = "";
        }

        // Validate email
        if (ty != "email" && !emailRegex.test(email)) {
          document.getElementById("emailError").textContent =
            "Invalid email format";
          return;
        } else {
          res[nm] = vl;
          document.getElementById("emailError").textContent = "";
        }

        // Validate password
        if (ty != "password" &&
          !passwordRegex.test(password) &&
          !passwordRegex.test(confirmPassword) &&
          confirmPassword == password &&
         
        ) {
          document.getElementById("passwordError").textContent =
            "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number";
          return;
        } else {
          res[nm] = vl;
          document.getElementById("passwordError").textContent = "";
        }
        // res[nm] = vl;
      }
      if (
        ty != "checkbox" &&
        ty != "name" &&
        ty != "email" &&
        ty != "password" &&
        ty != "lastName"
      ) {
        res[nm] = vl;
      }
    }
  }
  console.log(res);
};

const validateForm = (event) => {
  event.preventDefault(); // Prevent default form submission

  // Get form input values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmpassword = document
    .getElementById("confirmPassword")
    .value.trim();

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
  if (!passwordRegex.test(password) && confirmpassword == password) {
    document.getElementById("passwordError").textContent =
      "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number";
    return;
  } else {
    document.getElementById("passwordError").textContent = "";
  }

  // If all validations pass, submit the form
  document.getElementById("myForm").submit();
};

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
        res[nm] = vl;
      }
    }
  }
  console.log(res);
};

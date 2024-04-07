function onbutton() {
  document.getElementById("bulb").src = "on.png";
}
function offbutton() {
  document.getElementById("bulb").src = "off.png";
}

let image = document.getElementById("bulb");
let state = false;
function onoffbutton() {
  if (state == false) {
    image.src = "on.png";
    state = true;
  } else {
    image.src = "off.png";
    state = false;
  }
}

let nombre = prompt("Introduce tu nombre");

if (nombre === null || nombre === "null") {
  nombre = "";
}
window.alert(`Bienvenid@ a la PTU feliz, ${nombre}`);
function newColor() {
  var simbolos, color;
  simbolos = "0123456789ABCDEF";
  color = "#";

  for (var i = 0; i < 6; i++) {
    color = color + simbolos[Math.floor(Math.random() * 16)];
  }
  document.body.style.background = color;
}

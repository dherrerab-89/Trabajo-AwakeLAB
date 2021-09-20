function valida_envia() {
  const Nombre = document.getElementById("Nombre");
  const email = document.getElementById("inputEmail4");

  if (Nombre.value.length == 0) {
    alert("Ingresa tu nombre para comentar");
    Nombre.focus();
  } else if (email.value.length == 0) {
    alert("Ingresa un correo válido");
    email.focus();
  } else {
    alert("Gracias por inscribirte en la PTUfeliz");
  }
}

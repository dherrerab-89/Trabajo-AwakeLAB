function valida_envia() {

  const Nombre = document.getElementById("Nombre");
  const email = document.getElementById("inputEmail4");

  if (Nombre.value.length == 0) {
    alert("Tiene que escribir su nombre");
    Nombre.focus();
  } else if (email.value.length == 0) {
    alert("Ingrese un correo válido");
    email.focus();
  }

  else {
    alert("Muchas gracias por enviar el formulario");
  }
}

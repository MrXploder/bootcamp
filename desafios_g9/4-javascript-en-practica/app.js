/**
 * Ejercicio original resuelto en clases, escrito de la manera mas verbosa posible
 */
const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function (event) {
  /**
   * Como estamos "interceptando" un "submit" nativo del navegador, debemos "cancelarlo" para poder ejercer nuestra propia validacion
   */
  event.preventDefault();
  /////////////////////////////////////

  const onlyLetters = /([A-Za-z])/g;
  const inputNombre = document.getElementById("nombre");
  const inputAsunto = document.getElementById("asunto");
  const inputMensaje = document.getElementById("mensaje");

  const errorNombre = document.getElementById("errorNombre");
  const errorAsunto = document.getElementById("errorAsunto");
  const errorMensaje = document.getElementById("errorMensaje");

  const successResultado = document.getElementById("resultado");

  let validNombre = false;
  let validAsunto = false;
  let validMensaje = false;

  if (onlyLetters.test(inputNombre.value)) {
    validNombre = true;
    errorNombre.innerHTML = "";
  } else {
    errorNombre.innerHTML = "El campo nombre no es valido";
  }

  if (onlyLetters.test(inputAsunto.value)) {
    validAsunto = true;
    errorAsunto.innerHTML = "";
  } else {
    errorAsunto.innerHTML = "El campo asunto no es valido";
  }

  if (onlyLetters.test(inputMensaje.value)) {
    validMensaje = true;
    errorMensaje.innerHTML = "";
  } else {
    errorMensaje.innerHTML = "El campo mensaje no es valido";
  }

  if (validNombre && validAsunto && validMensaje) {
    successResultado.innerHTML = "Exito";
  } else {
    successResultado.innerHTML = "";
  }
});

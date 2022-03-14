let botonSubmit = document.getElementById("botonSubmit");

botonSubmit.addEventListener("click", function () {
  let nombreCompleto = document.getElementById("nombre-completo");
  let asunto = document.getElementById("asunto");
  let mensaje = document.getElementById("mensaje");

  let nombreCompletoErrorItem = document.querySelector(
    ".input-group #nombre-completo + .error-group .error-item"
  );
  let asuntoErrorItem = document.querySelector(
    ".input-group #asunto + .error-group .error-item"
  );
  let mensajeErrorItem = document.querySelector(
    ".input-group #mensaje + .error-group .error-item"
  );

  let mensajeExito = document.getElementById("mensaje-exito");

  if (nombreCompleto.value === "") {
    nombreCompletoErrorItem.style.visibility = "visible";
  } else {
    nombreCompletoErrorItem.style.visibility = "hidden";
  }

  if (asunto.value === "") {
    asuntoErrorItem.style.visibility = "visible";
  } else {
    asuntoErrorItem.style.visibility = "hidden";
  }

  if (mensaje.value === "") {
    mensajeErrorItem.style.visibility = "visible";
  } else {
    mensajeErrorItem.style.visibility = "hidden";
  }

  if (
    nombreCompleto.value !== "" &&
    asunto.value !== "" &&
    mensaje.value !== ""
  ) {
    mensajeExito.style.visibility = "visible";
  } else {
    mensajeExito.style.visibility = "hidden";
  }



  // fetch("https://mibackend.com/sendemail", {
  //   method: "POST",
  //   body: JSON.stringify()
  // })
});

//////////

// let formulario = document.getElementById("formulario")
// formulario.addEventListener("submit", function (event) {
//   event.preventDefault();

//   console.log("formulario tradicional")
// })

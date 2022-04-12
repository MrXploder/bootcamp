function sumar(a, b) {
  return a + b;
}

sumar(1, 1);
sumar(2, 3);

function decirHola(persona) {
  console.log(`Hola soy ${persona.nombre}`);
}

const persona = {
  nombre: "Luis",
};

decirHola(persona);

//-----------------------/
function mostrarModal() {}
//----------------------/
function imprimirEnConsola() {
  console.log("Termine");
}
//-----------------------/
function redirijirAlHome() {}
//----------------------/

function contarHastaX(x, queMostrar = "consola") {
  for (let i = 1; i <= x; i++) {
    console.log(i);
  }

  if (queMostrar === "modal") {
    mostrarModal();
  } else if (queMostrar === "consola") {
    imprimirEnConsola();
  }
}

function contarHastaY(y, cb) {
  for (let i = 1; i <= y; i++) {
    console.log(i);
  }
  cb();
}

// contarHastaX(10, "consola")
contarHastaY(10, imprimirEnConsola);

//--------------------------------------

function llamarApi(cuandoLeVayaBien, cuandoLeVayaMal) {
  // simular llamada a internet
  // transformar los datos
  const respuesta = Boolean(Math.round(Math.random()));


  if (respuesta === true) {
    // le fue bien
    cuandoLeVayaBien()
  } else {
    // le fue mal
    cuandoLeVayaMal()
  }
}

llamarApi(function () {
  console.log("Me fue bien")
}, function () {
  console.error("Me fue mal")
})

function exito() {}
function fracaso() {}

llamarApi(exito, fracaso)
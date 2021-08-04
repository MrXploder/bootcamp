//////////////////////
/**
 * declarar una funcion
 */

function pasoUno() {}

function pasoDos() {}

///////////////
/**
 * invocar una funcion
 */

pasoUno();
pasoDos();

const persona = {};
const personita = persona;

//////////////////

/**
 * ciudadano de primera categoria
 */
const stepOne = pasoUno;

/////////////////

setTimeout(function () {
  console.log("hola");
}, 1000);

function log() {
  console.log("hola");
}

setTimeout(log, 1000);

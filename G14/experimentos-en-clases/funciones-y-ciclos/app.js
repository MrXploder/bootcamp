var pepito; //undefined

/**
 * x ;; f(x) = 2x ;; y
 * 1 ;; f(1) = 2 * 1 ;; 2
 * 2 ;; f(2) = 2 * 2 ;; 4
 * 3
 * 4
 * 5
 */
/**
 * () = parentesis
 * [] = corchetes
 * {} = llaves
 */

/**
 * (x) = parametros de la funcion
 */

// declarar una funcion
function obtenerValorDeY(x) {
  return 2 * x;
}

// llamar o invocar una funcion
var y1 = obtenerValorDeY(1); //2
var y2 = obtenerValorDeY(2); //4
var y3 = obtenerValorDeY(3); //6
var y4 = obtenerValorDeY(4); //8
var y5 = obtenerValorDeY(5); //10

////////////////////////////////////////

var primerNombre = "Carolina";
var primerApellido = "Collao";

function sumaDeNombres(nombre, apellido) {
  // return nombre + " " + apellido;
  return `${nombre} ${apellido}`;
}

var nombreCompleto = sumaDeNombres(primerNombre, primerApellido);
var nombreEsteban = sumaDeNombres("Esteban", "Hormazabal");

console.log({ nombreCompleto, nombreEsteban });

//////////////////////////////

// declaramos una funcion llamada hacerSalchicha
function hacerSalchicha(ingrediente) {
  return "salchicha de " + ingrediente;
}

// llamamos a la funcion con los valores que queramos
var salchichaDePavo = hacerSalchicha("pavo, cebolla y oregano");
var salchichaBinaria = hacerSalchicha("1 y 0");
var salchichaConNombre = hacerSalchicha(nombreEsteban);

console.log({ salchichaDePavo, salchichaBinaria, salchichaConNombre });

//////////////////////
// funciones de tipo void

function llamarPorTelefono(numero) {
  console.log("Llamando a +56 " + numero + " ...");
}

llamarPorTelefono("934123772");
llamarPorTelefono(934123772);

llamarPorTelefono("Dracula ");

//////////////////////////////////////////////////////

/**
 *
 * @param {*} edad {
 * 0 - recien nacido;
 * > 0 y < 4 - infante;
 * > 4 y < 11 - prepubertad;
 * > 11 y < 18 - pubertad;
 * > 18 y < 45 adulto joven;
 * > 40 adulto
 * }
 */
function cicloVital(edad) {
  if (edad === 0) {
    return "recien nacido";
  } else if (edad > 0 && edad < 4) {
    return "infante";
  } else if (edad >= 4 && edad < 11) {
    return "prepubertad";
  } else if (edad >= 11 && edad < 18) {
    return "adolescente";
  } else if (edad >= 18 && edad < 40) {
    return "adulto joven";
  } else if (edad >= 40) {
    return "adulto";
  }
}

var miCicloVital = cicloVital(30);

console.log("Mi ciclo vital es: " + miCicloVital)

/////////////////////////////////////////////////////////


var afuera = true;

function miCasa() {
  console.log({ afuera })
  var afuera = false;
}

// hoisting
function miCasa() {
  var afuera;
  console.log({ afuera })
  afuera = false;
}

miCasa();



pepito = "pagadoble";


const miVariablesConstantes = "";
let miVariableLocalSinHoisting = "";



////////////////////////////////////////

for (var contador = 1; contador < 10; contador = contador + 1) {
  setTimeout(function () {
    console.log(contador)
  }, 1000)
}

for (let contador = 1; contador < 10; contador = contador + 1) {
  setTimeout(function () {
    console.log(contador)
  }, 1000)
}

/////////////////////////////////////

let nombre = "Luis";
nombre = "Carolina";
nombre = "Matias";

const asignatura = "G14";
asignatura = "G9";



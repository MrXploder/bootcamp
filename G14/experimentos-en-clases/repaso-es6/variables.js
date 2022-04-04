/**
 * Primitivos
 */

//String
let comillasDobles = "Hugo";
let comillasSimples = "Paco";
let backticks = `Luis`;
const nombre = "Hugo";
let edad = "30";

//Numeros
let pretensionesDeRenta = 3000;

//Flotantes
const PI = 3.14;

// Separadores numericos
const valorDeLaCasa = 100_000_000;

// Booleanos
const isDog = true;
const isCat = false;

//--------------------/

/**
 * Objetos
 */

/**
 * ( ) = parentesis
 * [ ] = corchetes
 * { } = llaves
 */

/**
 * Esto esta bien, todos los elementos del arreglo son del mismo tipo
 */
const enterosDecimales = [1, 2, 3, 4, 5];
const nombresEstudiantes = ["Criss", "Andrea", `Karina`];

/**
 * Esto es considerado por muchos, como una mala practica
 * Porque, porque en JS vanila, no hay forma de identificar cual campo
 * es que cosa
 */

//Tuple
const datosPersonales = ["Carolina", "Collao", 20, "12.345.678-9"];
// const nombre = datosPersonales[0];
// const apellido = datosPersonales[1];

//Destructuring de Array
const [nombreCuenta, apellidoCuenta, ...restoDeDatosPersonales] = datosPersonales;

//Objeto
const datosDeLaCuenta = {
  nombre: "Carolina",
  apellido: "Collao",
  edad: 20,
  rut: "12.345.678-9",
  "es-estudiante": true
}
// Dot notation
datosDeLaCuenta.nombre

// bracket notation
datosDeLaCuenta["es-estudiante"]
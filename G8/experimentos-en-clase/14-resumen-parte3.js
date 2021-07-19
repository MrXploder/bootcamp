/**
 * ()
 * []
 * {}
 */
const resultados = [];

const edades = [18, 29, 40];
const nombres = ["Luis", "Betsi", "Maribel"];
// const afirmaciones = [true, false, false, true];

nombres[1]; // "Betsi"

///////////////////////////////////////////////////

const persona1 = {
  nombre: "Luis",
  apellido: "Arancibia",
  edad: 29,
};

const persona2 = {
  nombre: "Betsi",
  apellido: "Salas",
  edad: 35,
};

persona1.nombre; // "Luis"
persona2.apellido; // "Salas"

//////////////////////////////////////////////////

const personas = [
  {
    nombre: "Luis",
    apellido: "Arancibia",
    edad: 29,
  },
  {
    nombre: "Betsi",
    apellido: "Salas",
    edad: 35,
  },
];

personas[0].edad; // 29

//////////////////////////////////////////////////

// String
// String.prototype.charAt
// Number
// Boolean

// Array
// Array.prototype.forEach
// Object

personas.forEach(function (persona, indice, personas) {
  console.log(persona);
});

personas.length;

"Luis".charAt(0); //"L"

(0.5).toFixed();

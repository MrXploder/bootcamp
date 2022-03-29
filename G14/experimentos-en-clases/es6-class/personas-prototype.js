function Persona(nombre, edad, raza, rut) {
  this.nombre = nombre;
  this.edad = edad;
  this.raza = raza;
  this.rut = rut;
}

Persona.prototype.saludar = function () {
  console.log("hola como estas?")
}

const Luis = new Persona("Luis", 30, "Arabe", "17.808.998-6");


// ["Luis", "Cristina"].map()

// Array.prototype.pepitoPagaDoble = function () {
//   console.log("hola mundo")
// }

// ["Luis"].pepitoPagaDoble();
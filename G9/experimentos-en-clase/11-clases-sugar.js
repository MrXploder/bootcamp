// function Persona(nombre, apellido, rut) {
//   this.nombre = nombre;
//   this.apellido = apellido;

//   var _rut = rut;

//   Object.defineProperty(this, "rut", {
//     enumerable: true,
//     get: function () {
//       return _rut
//     },
//     set: function (nuevoRut) {
//       _rut = nuevoRut
//     },
//   });

//   Object.defineProperty(this, "nombreCompleto", {
//     enumerable: true,
//     get: function () {
//       return `${this.nombre} ${this.apellido}`;
//     },
//     set: function (nuevoNombre) {
//       //
//     },
//   });
// }

// Persona.prototype.saludar = function () {
//   console.log(`Hola como estas? mi nombre es ${this.nombre} ${this.apellido}`);
// };

//////////////////////////////////////////////

/**
 * Propiedades: las variables de dentro de la clase
 * Metodos: las funciones de dentro de la clase
 * Accessors: GET y SET
 *
 * Miembros => Propiedades, Metodos y Accessors
 */
class Persona {
  #rut;

  constructor(nombre, apellido, rut) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.#rut = rut;
  }

  get nombreCompleto() {
    return `${this.nombre} ${this.apellido}`;
  }

  // Luis Arancibia => ["Luis", "Arancibia"]
  set nombreCompleto(nuevoNombreCompleto) {
    const [nuevoNombre, nuevoApellido] = nuevoNombreCompleto.split(" ");
    this.nombre = nuevoNombre;
    this.apellido = nuevoApellido;
  }

  saludar() {
    console.log(
      `Hola como estas? mi nombre es ${this.nombre} ${this.apellido}`
    );
  }
}

/////////////////////////////////////////////////////
const Luchito = new Persona("Luis", "Arancibia");
const Pablito = new Persona("Pablo", "Neyra");

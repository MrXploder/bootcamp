const persona = {
  nombre: "Luis",
  apellido: "Arancibia",
  edad: 29,
  get nombreCompleto() {
    return `${this.nombre} ${this.apellido}`;
  },
  set nombreCompleto(nuevoNombreCompleto) {
    const [nuevoNombre, nuevoApellido] = nuevoNombreCompleto.split(" ");
    this.nombre = nuevoNombre;
    this.apellido = nuevoApellido;
  },
  nombreCompleto() {
    return `${this.nombre} ${this.apellido}`;
  },
  cambiarNombreCompleto(nuevoNombreCompleto) {
    const [nuevoNombre, nuevoApellido] = nuevoNombreCompleto.split(" ");
    this.nombre = nuevoNombre;
    this.apellido = nuevoApellido;
  },
  saludar: function () {
    console.log(`Hola, mi nombre es ${this.nombre}`);
  },
};

persona.nombreCompleto;

persona.nombreCompleto = "Angela Vidal";

persona.nombreCompleto();
persona.cambiarNombreCompleto("Angela Vidal");
let algo = "Hoola";

console.log(algo);

function CrearPersona(nombre, apellido, edad) {
  Object.defineProperty(this, "edad", {
    value: edad,
  });

  var _nombre = nombre;
  var _apellido = apellido;

  Object.defineProperty(this, "nombre", {
    value: _nombre,
  });

  Object.defineProperty(this, "apellido", {
    value: _apellido,
  });

  Object.defineProperty(this, "nombreCompleto", {
    get: function () {
      return `${_nombre} ${_apellido}`;
    },
    set: function (nuevoNombreCompleto) {
      const [nuevoNombre, nuevoApellido] = nuevoNombreCompleto.split(" ");
      _nombre = nuevoNombre;
      _apellido = nuevoApellido;
    },
  });

  /**
   * Esta forma es igual de valida
   * pero el metodo se crea por cada nueva instancia
   */
  // this.nombreCompleto = () => {
  //   return `${this.nombre} ${this.apellido}`;
  // };
}

/**
 *
 * Al usar prototype se reutiliza y se comparte la misma accion entre
 * todas las instancias
 */
CrearPersona.prototype.nombreCompleto = function () {
  return `${this.nombre} ${this.apellido}`;
};

const PersonaLuis = new CrearPersona("Luis", "Arancibia", 29);

PersonaLuis.apellido = "Fernandez";

PersonaLuis.nombreCompleto();

console.log(
  PersonaLuis.nombreCompleto(),
  PersonaLuis.nombre,
  PersonaLuis.apellido
);

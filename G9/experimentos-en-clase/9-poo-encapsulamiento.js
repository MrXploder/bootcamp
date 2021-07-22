const Session = {
  role: "Admin", //"User"
};

// class Persona {
//   #sexo;

//   constructor(nombre, apellido, sexo) {
//     this.#sexo = sexo;
//   }
// }

function Persona(nombre, apellido, sexo) {
  this.nombre = nombre;
  this.apellido = apellido;
  // this._sexo = sexo;

  var _sexo = sexo;
  Object.defineProperty(this, "sexo", {
    get: function () {
      if (Session.role === "Admin") {
        return _sexo;
      } else {
        throw "No tienes los privilegios necesarios para leer esta variable";
      }
    },
    set: function (value) {
      _sexo = value;
    },
  });
}

function Hombre(nombre, apellido) {
  return new Persona(nombre, apellido, "hombre");
}

const Luis = new Persona("Luis", "Arancibia", "hombre");
const Luca = new Hombre("Luca", "Biotti");

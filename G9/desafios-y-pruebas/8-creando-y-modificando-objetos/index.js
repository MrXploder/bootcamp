function Consultorio(nombre, pacientes) {
  this.nombre = nombre;
  this.pacientes = pacientes;
}

Consultorio.prototype.todosLosPacientes = function () {
  console.log(JSON.parse(JSON.stringify(this.pacientes)));
};

Consultorio.prototype.buscarPaciente = function (nombrePacienteABuscar) {
  var indice = -1;

  for (var i = 0; i < this.pacientes.length; i++) {
    if (this.pacientes[i].nombre == nombrePacienteABuscar) {
      indice = i;
    }
  }

  if (indice >= 0) {
    console.log(
      "Paciente encontrado, sus datos son: ",
      JSON.parse(JSON.stringify(this.pacientes[indice]))
    );
  } else {
    console.log("Paciente no encontrado, intenta con otro nombre");
  }
};

function Paciente(nombre, edad, rut, diagnostico) {
  /**
   * En esta parte tambien podemos hacer "this._nombre = nombre"
   * El problema de hacer eso es que igual podriamos acceder a "_nombre" desde fuera.
   * La idea es que solo podamos acceder a aquellas propiedades que
   * declaremos de manera explicita.
   *
   * TODAS las propiedades que agreguemos al `this` son publicas, lo que
   * quiere decir que se pueden acceder desde cualquier instancia.
   */
  var _nombre = nombre;
  var _edad = edad;
  var _rut = rut;
  var _diagnostico = diagnostico;

  Object.defineProperty(this, "nombre", {
    enumerable: true,
    get: function () {
      return _nombre;
    },
    set: function (nuevoNombre) {
      _nombre = nuevoNombre;
    },
  });

  Object.defineProperty(this, "edad", {
    enumerable: true,
    get: function () {
      return _edad;
    },
    set: function (nuevoEdad) {
      _edad = nuevoEdad;
    },
  });

  Object.defineProperty(this, "rut", {
    enumerable: true,
    get: function () {
      return _rut;
    },
    set: function (nuevoRut) {
      _rut = nuevoRut;
    },
  });

  Object.defineProperty(this, "diagnostico", {
    enumerable: true,
    get: function () {
      return _diagnostico;
    },
    set: function (nuevoDiagnostico) {
      _diagnostico = nuevoDiagnostico;
    },
  });
}

/////////////////////////////////////////////////
const PacienteRobertoHurtado = new Paciente(
  "Roberto",
  30,
  "1.222.333-4",
  "Demasiada sensualidad" // 1313
);

const PacienteCarolinaSanchez = new Paciente(
  "Carolina",
  30,
  "1.222.333-4",
  "Resfrio"
);

const ConsultorioJuanBautista = new Consultorio("Juan Bautista", [
  PacienteCarolinaSanchez,
  PacienteRobertoHurtado,
]);

/////////////////////////////////////////////////////////////////

ConsultorioJuanBautista.todosLosPacientes();
ConsultorioJuanBautista.buscarPaciente("Roberto");
ConsultorioJuanBautista.buscarPaciente("Carolina");
ConsultorioJuanBautista.buscarPaciente("Angela");

console.log(PacienteCarolinaSanchez[0]);

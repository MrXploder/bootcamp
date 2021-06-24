(function () {
  function Consultorio(name, patients, rut) {
    this.name = name;
    this._rut = rut;
    this.patients = patients;
  }

  Consultorio.prototype.getName = function () {
    return this.name;
  };

  const Frike = new Consultorio("Frike", [], "1-0");

  Frike._rut = "0-1";

  Frike.getName();
  Frike.setName("Gustavo");

  Frike.name;
  Frike.name = "Gustavo";

  Consultorio.prototype.findAll = function () {
    return this.patients;
  };

  Consultorio.prototype.getName = function () {};

  Consultorio.prototype.setName = function (value) {};

  function Paciente(name, age, rut, diagnostic) {
    this.age = age;
    this.rut = rut;
    this.diagnostic = diagnostic;

    Object.defineProperty(this, "name", {
      get: function () {
        if (this.permissions === "Admin") {
          return this._name;
        } else {
          throw new Error("ud no tiene los permisos suficientes");
        }
      },
      set: function (value) {
        this._name = value;
      },
      value: name,
    });
  }

  var Betsi = new Paciente("Betsi", 35, "1-0", "sana sana potito de rana");
  var Almendra = new Paciente(
    "Almendra",
    20,
    "1-0",
    "sana sana potito de rana"
  );

  var ConsultorioDeHuanhuali = new Consultorio("Huanhuali", [Betsi, Almendra]);

  var findedPatient = ConsultorioDeHuanhuali.findPatient("Betsi");
  var allPatients = ConsultorioDeHuanhuali.findAll();
})();

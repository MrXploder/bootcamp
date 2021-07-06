"use strict";

(function () {
  class Propietario {
    constructor(nombre, direccion, telefono) {
      this.propietario = nombre;
      this.direccion = direccion;
      this.telefono = telefono;
    }

    datosPropietario() {
      return `El nombre del propietario es ${this.propietario}, su direccion es: ${this.direccion} y su telefono es ${this.telefono}`;
    }
  }

  class Animal extends Propietario {
    constructor(
      tipo,
      nombrePropietario,
      direccionPropietario,
      telefonoPropietario
    ) {
      super(nombrePropietario, direccionPropietario, telefonoPropietario);

      this.tipo = tipo;
    }

    getTipo() {
      return `El tipo de animal es un: ${this.tipo}`;
    }
  }

  class Mascota extends Animal {
    constructor(
      nombre,
      enfermedad,
      tipoAnimal,
      nombrePropietario,
      direccionPropietario,
      telefonoPropietario
    ) {
      super(
        tipoAnimal,
        nombrePropietario,
        direccionPropietario,
        telefonoPropietario
      );

      this._nombre = nombre;
      this._enfermedad = enfermedad;
    }

    get nombre() {
      return this._nombre;
    }

    set nombre(nuevoNombre) {
      this._nombre = nuevoNombre;
    }

    get enfermedad() {
      return this._enfermedad;
    }

    set enfermedad(nuevoEnfermedad) {
      this._enfermedad = nuevoEnfermedad;
    }
  }

  ////////////////////////////////////////////////////////

  const formularioElement = document.getElementById("formulario");

  formularioElement.addEventListener("submit", function (event) {
    event.preventDefault();
    ////////////////////////////

    const propietarioElement = document.querySelector("#propietario");
    const telefonoElement = document.querySelector("#telefono");
    const direccionElement = document.querySelector("#direccion");
    const nombreMascotaElement = document.querySelector("#nombreMascota");
    const tipoMascotaElement = document.querySelector("#tipo");
    const enfermedadElement = document.querySelector("#enfermedad");

    const mascota = new Mascota(
      nombreMascotaElement.value,
      enfermedadElement.value,
      tipoMascotaElement.value,
      propietarioElement.value,
      direccionElement.value,
      telefonoElement.value
    );

    function enviarResultado(mascota) {
      const resultadoElement = document.querySelector("#resultado");
      resultadoElement.innerHTML = `
            <ul>
              <li>${mascota.datosPropietario()}</li>
              <li>${mascota.getTipo()}, mientras que el nombre de la mascota es: ${
        mascota.nombre
      } y la enfermedad es: ${mascota.enfermedad}</li>
            </ul>
          `;
    }

    switch (tipoMascotaElement.value) {
      case "perro":
        {
          const Perro = mascota;
          enviarResultado(Perro);
        }
        break;

      case "gato":
        {
          const Gato = mascota;
          enviarResultado(Gato);
        }
        break;

      case "conejo":
        {
          const Conejo = mascota;
          enviarResultado(Conejo);
        }
        break;

      default:
        console.error("Te fuiste en la vola ");
    }
  });
})();

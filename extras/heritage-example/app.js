"use strict";

// class Vehiculo {
//   constructor(tipo) {
//     this.tipo = tipo;
//   }

//   logTipo() {
//     console.log(this.tipo);
//   }
// }

// class Auto extends Vehiculo {
//   constructor(color) {
//     super("auto");

//     this.color = color;
//   }

//   cambiarColor(nuevoColor) {
//     if (typeof nuevoColor !== "string") {
//       console.warn(`NuevoColor no es de tipo texto`);
//     } else {
//       this.color = nuevoColor;
//     }
//   }
// }

// class Moto extends Vehiculo {
//   constructor(color) {
//     super("moto");

//     this.#color = color;
//   }

// }

// const vehiculo = new Vehiculo("auto");
// const miAuto = new Auto("negro");
// const miMoto = new Moto("negro")

class Mamifero {
  constructor(cantidadDePatas, tienePelaje = true) {
    this.#cantidadDePatas = cantidadDePatas;
    this.#tienePelaje = tienePelaje;
  }

  cambiarPelaje(tienePelaje) {
    this.#tienePelaje = tienePelaje;
  }
}

class Perrito extends Mamifero {
  constructor(nombre, apellido, tienePelaje) {
    super(4, tienePelaje);
    this.#nombre = nombre;
    this.#apellido = apellido;
  }

  get nombreCompleto() {
    return `${this.#nombre} ${this.#apellido}`;
  }

  set nombreCompleto(nuevoNombreCompleto) {
    let nombreSeparado = nuevoNombreCompleto.split(" ");
    this.#nombre = nombreSeparado[0];
    this.#apellido = nombreSeparado[1];
  }
}

class Gatito extends Mamifero {
  constructor(nombre, apellido, cantidadDePatas) {
    super(cantidadDePatas, true);
    this.#nombre = nombre;
    this.#apellido = apellido;
  }
}

const Django = new Perrito("Django", "Tamara", true);
const Cookie = new Perrito("Pucky", "Riquelme", true);
const Huachimingo = new Mamifero(4, false);
// A.value + B.value = 2;

Django.cambiarPelaje(true);
Cookie.cambiarPelaje(true);
Huachimingo.cambiarPelaje(true);

const Ryu = new Gatito("Ryu", "Campeny", 4);

////////////////////////////////////////////////////////
function Perrito(nombre) {
  this.nombre = nombre;

  this.diGuau = () => {
    console.log("guau guau");
  };
}

Perrito.prototype.haceGuau = function () {
  console.log("guau");
};

const Canela = new Perrito("canela");
const Django = new Perrito("Django");

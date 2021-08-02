"use strict";

class Juego {
  #balas;
  #vidas;

  constructor(vidas, balas) {
    this.#balas = balas;
    this.#vidas = vidas;
  }

  disparar() {
    console.log("metodo disparar no implementado");
  }
}

class Tanques extends Juego {
  constructor(traccion, balas) {
    super(3, balas);
    this.traccion = traccion;
  }

  disparar() {
    console.log("pumpum");
  }
}

class Aviones extends Juego {
  constructor(propulsion, balas) {
    super(1, balas);
    this.propulsion = propulsion;
  }

  disparar() {
    console.log("bambam");
  }
}

const tanque = new Tanques("4x4", 1000);
const avion = new Aviones("chorro", 2000);

tanque.disparar();
avion.disparar();

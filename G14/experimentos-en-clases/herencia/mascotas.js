//Math.random


class Mascota {
  constructor(chip) {
    this.chip = chip;
  }
}

class Perro extends Mascota {
  constructor(nombre) {
    // this = new Mascota(Math.random)
    super(Math.random())
    this.nombre = nombre
  }

  ladrar() {
    console.log("Guau!")
  }
}

class Gato extends Mascota {
  constructor(nombre) {
    super(Math.random())
    this.nombre = nombre;
  }

  maullar() {
    console.log("Miau!")
  }
}

const Canela = new Perro("Canela")
const Olivia = new Gato("Olivia")


Canela.ladrar();
Olivia.miau();

Canela.chip;
Olivia.chip;
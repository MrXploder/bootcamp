/**
 * En JS solo existe la herencia simple
 *
 * Una clase hija solo puede tener un padre
 */
class Vehiculo {
  constructor(cantidadDeRuedas, tipoDeDesplazamiento, cantidadDePasajeros) {
    this.cantidadDeRuedas = cantidadDeRuedas;
    this.tipoDeDesplazamiento = tipoDeDesplazamiento;
    this.cantidadDePasajeros = cantidadDePasajeros;

    this.motor = {};
  }

  avanzar() {
    console.log("No se puede avanzar....");
  }
}

class Moto extends Vehiculo {
  constructor() {
    super(2, "terrestre", 1);
  }

  avanzar() {
    console.log("Brum brum!...");
  }
}

class Microbus extends Vehiculo {
  constructor() {
    super(4, "terrestre", 40);
  }

  avanzar() {
    console.log("Grum grum!");
  }
}

class Automovil extends Vehiculo {
  constructor() {
    super(4, "terrestre", 4);
  }

  avanzar() {
    console.log("Rum rum!");
  }
}

class Bicicleta extends Vehiculo {
  constructor() {
    super(2, "terrestre", 1);
  }

  avanzar() {
    console.log("Hum hum!");
  }
}

class Lancha extends Vehiculo {
  constructor() {
    super(0, "acuatico", 0);
  }

  avanzar() {
    console.log("Zum zum!");
  }
}

//---------

const miMoto = new Moto();
const miMicro = new Microbus();
const miAuto = new Automovil();
const miBici = new Bicicleta();
const miLancha = new Lancha();

miMoto.avanzar();
miMicro.avanzar();
miAuto.avanzar();
miBici.avanzar();
miLancha.avanzar();

// class Auto {
//   constructor(cantidadDeRuedas, cantidadDeAsientos, cantidadDePuertas) {
//     this.cantidadDeRuedas = cantidadDeRuedas;
//     this.cantidadDeAsientos = cantidadDeAsientos;
//     this.cantidadDePuertas = cantidadDePuertas;
//   }

//   encender() {
//     console.log("brum brum")
//   }
// }

// class Moto {
//   constructor(cantidadDeRuedas, cantidadDeAsientos, cantidadDePuertas) {
//     this.cantidadDeRuedas = cantidadDeRuedas;
//     this.cantidadDeAsientos = cantidadDeAsientos;
//     this.cantidadDePuertas = cantidadDePuertas;
//   }

//   encender() {
//     console.log("rum rum")
//   }
// }

// class Micro {
//   constructor(cantidadDeRuedas, cantidadDeAsientos, cantidadDePuertas) {
//     this.cantidadDeRuedas = cantidadDeRuedas;
//     this.cantidadDeAsientos = cantidadDeAsientos;
//     this.cantidadDePuertas = cantidadDePuertas;
//   }

//   encender() {
//     console.log("track track")
//   }
// }

////////////////////////

class Vehiculo {
  constructor(cantidadDeRuedas, cantidadDeAsientos, cantidadDePuertas) {
    this.cantidadDeRuedas = cantidadDeRuedas;
    this.cantidadDeAsientos = cantidadDeAsientos;
    this.cantidadDePuertas = cantidadDePuertas;
  }

  encender() {
    console.log("el metodo encender aun no esta implementado");
  }
}

class Auto extends Vehiculo {
  constructor(
    cantidadDeAsientos,
    cantidadDePuertas,
    cantidadDeVentanas,
    tieneRadio
  ) {
    super(4, cantidadDeAsientos, cantidadDePuertas);

    this.cantidadDeVentanas = cantidadDeVentanas;
    this.tieneRadio = tieneRadio;
  }

  encender() {
    console.log("brum brum");
  }
}

class Micro extends Vehiculo {
  constructor(cantidadDeAsientos) {
    super(6, cantidadDeAsientos, 2);
  }
}

class Moto extends Vehiculo {
  constructor() {
    super(2, 1, 0);
  }
}

const MiAuto = new Auto(7, 5, 4, true);
const MiMoto = new Moto();
const MiMicro = new Micro();

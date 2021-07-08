class Vehiculo {
  constructor(vidas, balas) {
    this.balas = balas;
    this.vidas = vidas;
  }

  disparar() {
    return "bam bam";
  }

  static esVehiculo(valor) {
    /**
     * valo es una instancia de Vehiculo => true|false
     */
    return valor instanceof Vehiculo;
  }
}

class Tanque extends Vehiculo {
  constructor(traccion, balas) {
    super(3, balas);
    this.traccion = traccion;
  }

  /** a travez de lo que es el polimorfismo
   * modificamos la implementracion original
   */
  disparar() {
    return "pum pum";
  }
}

class Avion extends Vehiculo {
  constructor(propulsion, balas) {
    super(1, balas);
    this.propulsion = propulsion;
  }

  /** a travez de lo que es el polimorfismo
   * modificamos la implementracion original
   */
  disparar() {
    return "piu piu";
  }
}

class Stealth extends Avion {
  constructor() {
    super("silencionsa", 5);
  }
}

const panzer = new Tanque("4x4", 1000);
const caza4001 = new Avion("chorro", 10);

console.log(panzer.disparar());
console.log(caza4001.disparar());

class Panzer extends Tanque {
  constructor() {
    super("completa", 10);
  }

  getInstance() {
    if (!this.instance) {
      this.instance = new Panzer();
    }
    return this.instance;
  }
}

const panzer2 = Panzer.getInstance();
const panzer3 = Panzer.getInstance();

/// Juego => Avion => Stealth

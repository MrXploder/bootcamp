class Mamiferos {
  constructor(
    cantidadDePatas,
    tipoDeDesplazamiento,
    velocidadDeDesplazamiento,
  ) {
    this.cantidadDePatas = cantidadDePatas;
    this.tipoDeDesplazamiento = tipoDeDesplazamiento;
    this.velocidadDeDesplazamiento = velocidadDeDesplazamiento;
  }

  // Imperativo - Altamente fragil
  // get habitat() {
  //   const nombreDeLaClase = this.constructor.name;

  //   if (nombreDeLaClase === "Vaca") {
  //     return "granja"
  //   } else if (nombreDeLaClase === "Ballena") {
  //     return "oceano"
  //   } else if (nombreDeLaClase === "Leon") {
  //     return "jungla"
  //   }
  // }
}

class Vaca extends Mamiferos {
  constructor(nombre) {
    super(4, "terrestre", "lento");
    this.nombre = nombre;
  }
}

class Leon extends Mamiferos {
  constructor() {
    super(4, "terrestre", "rapido");
  }
}

class Ballena extends Mamiferos {
  constructor() {
    super(0, "acuatico", "rapida");
  }
}

const miBallenita = new Ballena()
const Lola = new Vaca("Lola")

Lola.nombre;

miBallenita.cantidadDePatas;
miBallenita.tipoDeDesplazamiento;
miBallenita.velocidadDeDesplazamiento;

miBallenita.habitat
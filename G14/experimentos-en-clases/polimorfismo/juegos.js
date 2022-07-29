class Juego {
  constructor(cantidadVidas, cantidadBalas) {
    this.cantidadVidas = cantidadVidas;
    this.cantidadBalas = cantidadBalas;
  }

  disparar() {
    alert("Disparar no existe, intenta denuevo");
  }
}

class Tanque extends Juego {
  constructor(tipoTraccion, cantidadBalas) {
    super(1, cantidadBalas);

    this.tipoTraccion = tipoTraccion;
  }

  disparar() {
    console.log("pium pium!");
  }
}

class Avion extends Juego {
  constructor(tipoPropulsion, cantidadBalas) {
    super(2, cantidadBalas);

    this.tipoPropulsion = tipoPropulsion;
  }

  disparar() {
    console.log("bam bam!");
  }
}

class Soldado extends Juego {
  constructor(nombre, cantidadBalas) {
    super(1, cantidadBalas);

    this.nombre = nombre;
  }

  disparar() {
   alert(`soy el soldado ${this.nombre} y hago pam pam pam pam pam!`)
  }
}

$(document).ready(() => {
  $listaSoldados = $("#soldados");

  $("#agregar").click(() => {
    const nombreSoldado = prompt("Ingrese nombre soldado")
    const cantidadBalas = Number.parseInt(prompt("Ingrese cantidad de balas"))

    const nuevoSoldado = new Soldado(nombreSoldado, cantidadBalas);

    console.log(nuevoSoldado)

    const $botonDisparar = document.createElement("button")

    $botonDisparar.addEventListener("click", () => {
      nuevoSoldado.disparar()
    })

    $listaSoldados.append(`
      <li>Nombre: ${nuevoSoldado.nombre} - Cantidad de balas: ${nuevoSoldado.cantidadBalas}</li>
    `)
    $listaSoldados.append($botonDisparar)

  });
});

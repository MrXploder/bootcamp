var cantidadDeJugadas = parseInt(
  prompt("Ingrese la cantidad de veces que quiere jugar")
);

var cantidadDeTriunfosDeLaMaquina = 0;
var cantidadDeTriunfosDelJugador = 0;

for (
  var contadorDeJugadas = 1;
  contadorDeJugadas <= cantidadDeJugadas;
  contadorDeJugadas++
) {
  var movimientoDelJugador = prompt("Ingrese su jugada");

  /**
   * piedra = 0
   * papel = 1
   * tijera = 2
   */

  var numeroRandom = Math.floor(Math.random() * 3);
  var movimientoDeLaMaquina = "";

  //if-else
  if (numeroRandom === 0) {
    movimientoDeLaMaquina = "piedra";
  } else if (numeroRandom === 1) {
    movimientoDeLaMaquina = "papel";
  } else if (numeroRandom === 2) {
    movimientoDeLaMaquina = "tijera";
  } else {
    alert("el numeroRandom no esta dentro del rango: " + numeroRandom);
  }

  // switch-case
  // switch (numeroRandom) {
  //   case 0:
  //     movimientoDeLaMaquina = "piedra";
  //     break;

  //   case 1:
  //     movimientoDeLaMaquina = "papel";
  //     break;

  //   case 2:
  //     movimientoDeLaMaquina = "tijera";
  //     break;

  //   default:
  //     alert("el numeroRandom no esta dentro del rango: " + numeroRandom);
  // }

  // operador ternario
  // movimientoDeLaMaquina =
  //   numeroRandom === 0
  //     ? "piedra"
  //     : numeroRandom === 1
  //     ? "papel"
  //     : numeroRandom === 2
  //     ? "tijera"
  //     : alert("error");

  if (movimientoDelJugador === movimientoDeLaMaquina) {
    alert("hay un empate");
  } else {
    if (movimientoDelJugador === "tijera") {
      alert("el jugador saco tijera");
      if (movimientoDeLaMaquina === "papel") {
        alert("la maquina saco papel");
        alert("El jugador gana, la maquina pierde");
        cantidadDeTriunfosDelJugador++;
      } else if (movimientoDeLaMaquina === "piedra") {
        alert("la maquina saco piedra");
        alert("La maquina gana, el jugador pierde");
        cantidadDeTriunfosDeLaMaquina++;
      } else {
        alert("La maquina hiz un movimiento no valido");
      }
    } else if (movimientoDelJugador === "papel") {
      alert("el jugador saco papel");
      if (movimientoDeLaMaquina === "tijera") {
        alert("la maquina saco tijera");
        alert("La maquina gana, el jugador pierde");
        cantidadDeTriunfosDeLaMaquina++;
      } else if (movimientoDeLaMaquina === "piedra") {
        alert("la maquina saco piedra");
        alert("El jugador gana, la maquina pierde");
        cantidadDeTriunfosDelJugador++;
      } else {
        alert("La maquina hizo un movimiento no valido");
      }
    } else if (movimientoDelJugador === "piedra") {
      alert("el jugador saco piedra");
      if (movimientoDeLaMaquina === "papel") {
        alert("la maquina saco papel");
        alert("La maquina gana, el jugador pierde");
        cantidadDeTriunfosDeLaMaquina++;
      } else if (movimientoDeLaMaquina === "tijera") {
        alert("la maquina saco tijera");
        alert("El jugador gana, la maquina pierde");
        cantidadDeTriunfosDelJugador++;
      } else {
        alert("La maquina hiz un movimiento no valido");
      }
    } else {
      alert("el movimiento del jugador no es valido");
    }
  }
}


if (cantidadDeTriunfosDeLaMaquina === cantidadDeTriunfosDelJugador) {
  alert("Se declara el empate")
} else if (cantidadDeTriunfosDeLaMaquina > cantidadDeTriunfosDelJugador) {
  alert("Has perdido contra la maquina")
} else {
  alert("Felicitaciones, le has ganado a la maquina")
}

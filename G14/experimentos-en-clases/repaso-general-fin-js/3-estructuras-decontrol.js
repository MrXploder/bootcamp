// "si" | "no" | "tal vez"
let lamparaRota;
// si lamparaRota = verdadero
if (lamparaRota === "si") {
  //hacer algo
} else if (lamparaRota === "tal vez") {
  //hacer algo
}
//sino
else {
  //hacer algo
}

//hacer algo mas

//-----------------------

let estacion;

let mesActual;

switch (mesActual) {
  case "diciembre":
  case "enero":
  case "febrero":
    estacion = "verano";
    break;

  case "marzo":
  case "abril":
  case "mayo":
    estacion = "otoño";
    break;
}

if (
  mesActual === "diciembre" ||
  mesActual === "enero" ||
  mesActual === "febrero"
) {
  estacion = "verano";
} else if (
  mesActual === "marzo" ||
  mesActual === "abril" ||
  mesActual === "mayo"
) {
  estacion = "otoño";
}

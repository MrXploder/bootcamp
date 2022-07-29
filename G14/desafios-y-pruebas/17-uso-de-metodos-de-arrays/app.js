const radiologia = [
  {
    hora: "11:00",
    especialista: "IGNACIO SCHULZ",
    paciente: "FRANCISCA ROJAS",
    rut: "9878782-1",
    prevision: "FONASA",
  },
  {
    hora: "11:30",
    especialista: "FEDERICO SUBERCASEAUX",
    paciente: "PAMELA ESTRADA",
    rut: "15345241-3",
    prevision: "ISAPRE",
  },
  {
    hora: "15:00",
    especialista: "FERNANDO WURTHZ",
    paciente: "ARMANDO LUNA",
    rut: "16445345-9",
    prevision: "ISAPRE",
  },
  {
    hora: "15:30",
    especialista: "ANA MARIA GODOY",
    paciente: "MANUEL GODOY",
    rut: "17666419-0",
    prevision: "FONASA",
  },
  {
    hora: "16:00",
    especialista: "PATRICIA SUAZO",
    paciente: "RAMON ULLOA",
    rut: "14989389-K",
    prevision: "FONASA",
  },
];

const traumatologia = [
  {
    hora: "8:00",
    especialista: "MARIA PAZ ALTUZARRA",
    paciente: "PAULA SANCHEZ",
    rut: "15554774-5",
    prevision: "FONASA",
  },
  {
    hora: "10:00",
    especialista: "RAUL ARAYA",
    paciente: "ANGÉLICA NAVAS",
    rut: "15444147-9",
    prevision: "ISAPRE",
  },
  {
    hora: "10:30",
    especialista: "MARIA ARRIAGADA",
    paciente: "ANA KLAPP",
    rut: "17879423-9",
    prevision: "ISAPRE",
  },
  {
    hora: "11:00",
    especialista: "ALEJANDRO BADILLA",
    paciente: "FELIPE MARDONES",
    rut: "1547423-6",
    prevision: "ISAPRE",
  },
  {
    hora: "11:30",
    especialista: "CECILIA BUDNIK",
    paciente: "DIEGO MARRE",
    rut: "16554741-K",
    prevision: "FONASA",
  },
  {
    hora: "12:00",
    especialista: "ARTURO CAVAGNARO",
    paciente: "CECILIA MENDEZ",
    rut: "9747535-8",
    prevision: "ISAPRE",
  },
  {
    hora: "12:30",
    especialista: "ANDRES KANACRI",
    paciente: "MARCIAL SUAZO",
    rut: "11254785-5",
    prevision: "ISAPRE",
  },
];

const dental = [
  {
    hora: "8:30",
    especialista: "ANDREA ZUÑIGA",
    paciente: "MARCELA RETAMAL",
    rut: "11123425-6",
    prevision: "ISAPRE",
  },
  {
    hora: "11:00",
    especialista: "MARIA PIA ZAÑARTU",
    paciente: "ANGEL MUÑOZ",
    rut: "9878789-2",
    prevision: "ISAPRE",
  },
  {
    hora: "11:30",
    especialista: "SCARLETT WITTING",
    paciente: "MARIO KAST",
    rut: "7998789-5",
    prevision: "FONASA",
  },
  {
    hora: "13:00",
    especialista: "FRANCISCO VON TEUBER",
    paciente: "KARIN FERNANDEZ",
    rut: "18887662-K",
    prevision: "FONASA",
  },
  {
    hora: "13:30",
    especialista: "EDUARDO VIÑUELA",
    paciente: "HUGO SANCHEZ",
    rut: "17665461-4",
    prevision: "FONASA",
  },
  {
    hora: "14:00",
    especialista: "RAQUEL VILLASECA",
    paciente: "ANA SEPULVEDA",
    rut: "14441281-0",
    prevision: "ISAPRE",
  },
];

//////////////////////////////

/**
 * 2
 */
radiologia.shift();
radiologia.pop();
///////////////////
// console.log(radiologia)
// const nuevaRadiologia = radiologia.slice(1, radiologia.length - 1);
// console.log(nuevaRadiologia)

/**
 * 3
 */
document.write("<h1>Ejercicio 3</h1>");
dental.forEach(function (consulta) {
  document.write(
    `<p>${consulta.hora} - ${consulta.especialista} - ${consulta.paciente} - ${consulta.rut} - ${consulta.prevision}</p>`
  );
  // document.write(Object.values(consulta).join(" - "))
  document.write("<br/>");
});

/**
 * 4
 */
document.write("<h1>Ejercicio 4</h1>");
// es5
const todasLasConsultas = radiologia.concat(traumatologia).concat(dental);
// es6
// const todasLasConsultas = [...radiologia, ...traumatologia, ...dental]

//forma 1
// const nombresDeLosPacientes = todasLasConsultas.map(function (consulta) {
//   return consulta.paciente
// })
// console.log(nombresDeLosPacientes)
// const listadoHtml = nombresDeLosPacientes.join("<br/>")
// document.write(listadoHtml)

//forma 2
todasLasConsultas.forEach(function (consulta) {
  document.write(`${consulta.paciente}<br/>`);
});

/**
 * 5
 */
document.write("<h1>Ejercicio 5</h1>");
const pacientesConIsapreDeDental = dental.filter(function (consulta) {
  return consulta.prevision === "ISAPRE";
});

pacientesConIsapreDeDental.forEach(function (consulta) {
  document.write(`${consulta.paciente} - ${consulta.prevision} <br/>`);
});

/**
 * 6
 */
document.write("<h1>Ejercicio 6</h1>");
const pacientesConFonasaDeTraumatologia = traumatologia.filter(function (
  consulta
) {
  return consulta.prevision === "FONASA";
});

pacientesConFonasaDeTraumatologia.forEach(function (consulta) {
  document.write(`${consulta.paciente} - ${consulta.prevision} <br/>`);
});

/**
 * Obs
 */
// traumatologia.forEach(function (consulta) {
//   if (consulta.prevision === "FONASA") {
//     document.write(`${consulta.paciente} - ${consulta.prevision} <br/>`);
//   }
// });



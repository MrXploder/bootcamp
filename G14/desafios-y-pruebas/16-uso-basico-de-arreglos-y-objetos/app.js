let atenciones = [
  {
    horaDeAtencion: Date.now(),
    medicoEspecialista: "Dr. Ramirez",
    nombreDelPaciente: "Ana Navarro",
    rutDelPaciente: "12.345.678-9",
    prevision: "ISAPRE",
    tipoDeExamen: "Radiologia",
  },
  {
    horaDeAtencion: Date.now(),
    medicoEspecialista: "Dr Boris Farias",
    nombreDelPaciente: "Yerson Reyes",
    rutDelPaciente: "98.765.432-1",
    prevision: "FONASA",
    tipoDeExamen: "Traumatologia",
  },
  {
    horaDeAtencion: Date.now(),
    medicoEspecialista: "Dr Chapatin",
    nombreDelPaciente: "Cristina Guzmán",
    rutDelPaciente: "13.468.924-6",
    prevision: "FONASA",
    tipoDeExamen: "Dental",
  },
];

/**
 * Imprimir primera atención
 * console.log
 */
document.write(
  "Primera atención: " +
    atenciones[0].nombreDelPaciente +
    " - " +
    atenciones[0].prevision
);

document.write("<br/>");

document.write(
  "Ultima atención: " +
    atenciones[atenciones.length - 1].nombreDelPaciente +
    " - " +
    atenciones[atenciones.length - 1].prevision
);

/**
 * usar variables auxiliares
 */
// const primeraAtencion = atenciones[0]
// const ultimaAtencion = atenciones[atenciones.length - 1]

/////////////////////////////////////////

document.write(`
  <table>
    <thead>
      <tr>
        <th>Hora de Atencion</th>
        <th>Medico Especialista</th>
        <th>Especialidad</th>
        <th>Nombre del Paciente</th>
        <th>Rut del Paciente</th>
        <th>Previsión</th>
      </tr>
    </thead>
    <tbody>
      ${atenciones.map(function (atencion) {
        return `
            <tr>
              <td>${atencion.horaDeAtencion}</td>
              <td>${atencion.medicoEspecialista}</td>
              <td>${atencion.tipoDeExamen}</td>
              <td>${atencion.nombreDelPaciente}</td>
              <td>${atencion.rutDelPaciente}</td>
              <td>${atencion.prevision}</td>
            </tr>
          `;
      })}
    </tbody>
  </table>
`);

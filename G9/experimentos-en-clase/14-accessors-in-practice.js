const $Pacientes = {
  listado: [
    { nombre: "Luis", prevision: "FONASA" },
    { nombre: "Josefa", prevision: "FONASA" },
    { nombre: "Sebastian", prevision: "ISAPRE" },
  ],
  get soloIsapre() {
    return this.listado.filter((paciente) => paciente.prevision === "ISAPRE");
  },
  get soloFonasa() {
    return this.listado.filter((paciente) => paciente.prevision === "FONASA");
  },

  // soloPacientesIsapre() {
  //   return this.listado.filter((paciente) => paciente.prevision === "ISAPRE");
  // },
};

console.log($Pacientes.listado);

console.log(
  $Pacientes.listado.filter((paciente) => paciente.prevision === "ISAPRE")
);

console.log($Pacientes.soloIsapre);

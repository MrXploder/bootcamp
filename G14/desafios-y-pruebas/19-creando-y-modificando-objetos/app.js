class Consultorio {
  constructor(nombre, pacientes) {
    this.nombre = nombre;
    this.pacientes = pacientes;
  }

  agregarPaciente(nuevoPaciente) {
    this.pacientes.push(nuevoPaciente)
  }

  buscarPacientePorRut(rutDelPacienteABuscar) {
    /**
     * uds tienen que escribir una funcion de JS, que busque en el this.pacientes
     * por el paciente con el rut que nos dan en la variable "rutDelPacienteABuscar"
     * la funcion deberia retornar el objeto del paciente completo
     */
    return "TO-DO"
  }
}

class Paciente {
  /**
   * No se olviden de declarar sus variables privadas
   */
  #diagnostico;

  constructor(nombre, apellido, edad, rut, diagnostico) {
    //Properties

    /**
     * Publicas
     */
    this.nombre = nombre;
    this.apellido = apellido
    this.edad = edad;
    this.rut = rut;
    /**
     * Privadas
     * Significa que solo se puede acceder desde dentro de la clase
     * no desde fuera.
     */
    this.#diagnostico = diagnostico
  }

  //Accessors
  get nombreCompleto() {
    return this.nombre + " " + this.apellido;
  }

  set nombreCompleto(nuevoNombreCompleto) {
    this.nombre = nuevoNombreCompleto.split(" ")[0];
    this.apellido = nuevoNombreCompleto.split(" ")[1];
  }

  //Methods
  imprimirDiagnostico() {
    console.log(`${this.nombre}: ${this.#diagnostico}`)
  }
}

const PacienteUno = new Paciente("Luis", "Arancibia", 30, "178089986", "Ta loco")
const PacienteDos = new Paciente("Ariel", "Abarca", 20, "123456789", "ta weno y sano");


const ConsultorioDePeñaBlanca = new Consultorio("Peñablanca", [PacienteUno, PacienteDos])

//GETTER
PacienteUno.nombreCompleto;

//SETTER
PacienteUno.nombreCompleto = "Ismael Gomez";

// error: la propiedad es privada
// PacienteUno.#diagnostico

const PacienteEncontrado = ConsultorioDePeñaBlanca.buscarPacientePorRut("178089986")


console.log(PacienteEncontrado)
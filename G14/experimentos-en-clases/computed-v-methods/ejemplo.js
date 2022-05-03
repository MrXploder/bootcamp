class Persona {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }

  // nombreCompleto() {
  //   return `${this.nombre} ${this.apellido}`
  // }

  // cambiarNombre(nombre, apellido) {
  //   this.nombre = nombre;
  //   this.apellido = apellido;
  // }

  get nombreCompleto() {
    return `${this.nombre} ${this.apellido}`
  }

  set nombreCompleto(value) {
    this.nombre = value.split(" ")[0];
    this.apellido = value.split(" ")[1];
  }
}

const Ana = new Persona("Ana", "Navarro");

// console.log(`${Ana.nombre} ${Ana.apellido}`);

// const nombreCompleto = Ana.nombreCompleto()

// console.log(nombreCompleto)

// Ana.cambiarNombre("Constanza", "Reyes")

Ana.nombreCompleto //GET

Ana.nombreCompleto = "Constanza Reyes" //SET
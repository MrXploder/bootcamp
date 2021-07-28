class Persona {
  constructor(nombre, apellido) {
    this._nombre = nombre;
    this.apellido = apellido;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(nuevoNombre) {
    console.log(
      `${Date.now()} - Persona::nombre modificado con: ${nuevoNombre}`
    );
    this._nombre = nuevoNombre;
  }

  // nombreCompleto() {
  //   return `${this.nombre} ${this.apellido}`
  // }

  // setearNombreCompleto(nombreCompleto) {
  //   const nombreCompletoSeparado = nombreCompleto.split(" ") // ["Luca", "Biotti"]
  //   this.nombre = nombreCompletoSeparado[0]
  //   this.apellido = nombreCompletoSeparado[1]
  // }

  get nombreCompleto() {
    return `${this.nombre} ${this.apellido}`;
  }

  set nombreCompleto(nuevoNombreCompleto) {
    const nombreCompletoSeparado = nuevoNombreCompleto.split(" "); // ["Luca", "Biotti"]
    this.nombre = nombreCompletoSeparado[0];
    this.apellido = nombreCompletoSeparado[1];
  }
}

const Luca = new Persona("Luca", "Biotti");

Luca.nombre;
Luca.apellido;
// Luca.nombreCompleto()
// Luca.setearNombreCompleto("Luis Arancibia")

Luca.nombreCompleto = "Gonzalo Trujillo";

Luca.nombreCompleto;

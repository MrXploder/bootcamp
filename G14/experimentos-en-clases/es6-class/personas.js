/**
 * nombre
 * edad
 * raza
 * rut
 *
 */
// Declarar una clase
class Persona {
  /**
   * Declaramos las variables que toda "Persona" debe tener
   */
  constructor(nombre, edad, raza, rut) {
    this.nombre = nombre;
    this.edad = edad;
    this.raza = raza;
    this.rut = rut;
  }

  /**
   * Metodos
   *
   * @description Los metodos son lo mismo que las funciones pero pertenecen a la clase
   */
  saludar() {
    console.log(`Hola, como estas?`)
  }
}

// Contruir una persona
const Cristina = new Persona("Cristina Guzman", 20, "Europea", "12.345.678-9")
const Gonzalo = new Persona("Gonzalo", 25, "Aria", "98.765.432-1")

Cristina.saludar();
Gonzalo.saludar();
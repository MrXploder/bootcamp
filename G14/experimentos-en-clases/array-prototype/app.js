// const miTexto = "";
// const miNumero = 0;
// const miBooleano = false;
// const miArreglo = [];
// const miObjeto = {};
const estudiantes = new Array("ana");

// Array.prototype.length
console.log(estudiantes.length);

// Array.prototype.push
estudiantes.push("joaquin");
estudiantes.push("byron");

// Array.prototype.concat
// emulando un push
const estudiantesNuevecitosDePaquete = estudiantes.concat(["criss"]);
console.log({ concat: estudiantesNuevecitosDePaquete });
// emulando un unshift
const estudiantesNuevecitos = ["criss"].concat(estudiantes);
console.log({ concat: estudiantesNuevecitos });

// Array.protype.unshift
estudiantes.unshift("luis");

// Array.prototype.pop
estudiantes.pop();

// pop sin modificar el arreglo original
const todosLosEstudiantesMenosElUltimo = estudiantes.splice(0, estudiantes.length - 2);

// shift sin modificar el arreglo original
// es6
const [primerEstudiante, ...restoDeEstudiantes] = estudiantes;

// Array.prototype.shift
estudiantes.shift();

// Array.prototype.forEach
estudiantes.forEach(function (estudiante) {
  console.log(estudiante);
});

// String.prototype.charAt
// String.prototype.toUpperCase
// String.prototype.slice
// Array.prototype.map
const nuevosEstudiantes = estudiantes.map(function (estudiante) {
  return estudiante.charAt(0).toUpperCase() + estudiante.slice(1);
});
console.log({ nuevosEstudiantes });

// Array.prototype.filter
const estudiantesQueEmpiezanConA = estudiantes.filter(function (estudiante) {
  return estudiante.charAt(0) === "a";
  // if (estudiante.charAt(0) === "a") {
  //   return true;
  // } else {
  //   return false;
  // }
});
console.log({ filter: estudiantesQueEmpiezanConA });

// Array.prototype.join
console.log(estudiantes.join(" - "));

console.log(estudiantes);

// class Perro {
//   constructor(nombre) {
//     this.nombre = nombre
//   }

//   ladrar() {

//   }
// }

// const Canela = new Perro("canela");
// const Manchas = new Perro("manchas");
// const Theo = new Perro("theo");

// Canela.ladrar()
// Manchas.ladrar()
// Theo.ladrar()

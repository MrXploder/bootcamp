// function sumar(x, y) {
//   return x + y;
// }

// var sumarNumeros = function (x, y) {
//   return x + y;
// };

// ///////////////////////////////

// var restarNumeros = (x, y) => {
//   return x - y;
// };

// var restar = (x, y) => x - y;

// /////////////////////////////////

// function Persona(nombre) {
//   this.nombre = nombre;

//   setTimeout(() => {
//     console.log(this.nombre);
//   }, 1000);
// }

// var personita = new Persona("luis");

// /////////////////////////////////////////

// var persona = "Luis";
// let ayudante = "Maribel";

// const docente = "luis";

// const alumno = { nombre: "Luca" };

// alumno.edad = 20;
// alumnos = "Pedrito"
// console.log(alumno);

for (var i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}

for (let x = 0; x < 10; x++) {
  setTimeout(function () {
    console.log(x);
  }, 1000);
}

/////////////////////////////////////

function sumar(num1 = 0, num2 = 0) {
  return num1 + num2;
}

const sumando = (num1 = 0, num2 = 0) => num1 + num2;

console.log(sumar(1));

// for(definirVariable;condicionarTermino;incrementarODecrementar)

for (let contador = 1; contador <= 10; contador++) {
  console.log(`el valor de contador es ${contador}`);
}

const nombre1 = "Angela";
const nombre2 = "Roberto";
const nombre3 = "Franco";
// nombres[0], nombres[1], nombres[2]
const nombres = ["Angela", "Roberto", "Franco", "Luis"];

// console.log(nombres[-1]);
console.log(nombres[0]);
console.log(nombres[1]);
console.log(nombres[2]);

for (let i = 0; i < nombres.length; i++) {
  console.log(nombres[i]);
}

for (nombre of nombres) {
  console.log(nombre);
}
// const usuarios = [
//   ["nombre", "apellido", "edad"],
//   ["Luis", "Arancibia", 29],
//   ["Roberto", "Hurtado", 31]
// ]

// const nombre = "Roberto"
// const apellido = 'Hurtado'

// const nombreCompleto = nombre + apellido // RobertoHurtado
// const nombreCompleto2 = nombre + " " + apellido // Roberto Hurtado
// const nombreCompleto3 = `${nombre} ${apellido}` // Roberto Hurtado

// document.write("<table><thead></thead></table>")

// document.write(`
//   <table>
//     <thead></thead>
//   </table>
// `)


//{ llave: valor }

let personaCatalina = {
  nombre: "Catalina",
  apellido: "Tapia",
  edad: 32,
  estatura: 1.60,
  esEstudiante: true,
  signoZodiacal: "Piscis"
}

let personaYerson = {
  nombre: "Yerson",
  apellido: "Reyes",
  edad: 28,
  estatura: 1.72,
  esEstudiante: true,
  signoZodiacal: "Geminis"
}

//dot notation
console.log(personaCatalina.nombre);
console.log(personaCatalina.apellido);

// bracket notation
console.log(personaCatalina["nombre"]);
console.log(personaCatalina["apellido"]);

// las propiedades de un objeto se pueden modificar
personaCatalina.esEstudiante = false;


function sumar(a, b) {
  return a + b;
}


function nombreCompleto(persona) {
  return persona.nombre + persona.apellido;
}

let nombreCompletoDeCatalina = nombreCompleto(personaCatalina)
let nombreCompletoDeYerson = nombreCompleto(personaYerson)

//////////////////////////////


function esEstudiante(persona) {
  if (persona.esEstudiante === true) {
    return persona.nombre + " si es estudiante";
  } else {
    return persona.nombre + " no es estudiante";
  }
}

//////////////////////////////////

//Funcional
for (atributo in personaCatalina) {
  //atributo es la llave del objeto
  console.log(atributo)
  //
  console.log(personaCatalina[atributo])
}

//OOP
Object.keys(personaCatalina).forEach(function (atributo) { 
  console.log(atributo)
})

Object.values(personaCatalina).forEach(function (valores) {
  console.log(valores)
})

Object.entries(personaCatalina).forEach(function (atributo, valores) {
  console.log(atributo, valores)
})





/**
 * Scoping - Closures
 */
// let miarreglodeafuer = ["afuera", "de", "la", "fuincion"]

// function algo() {
//   let miarreglo = ["hola", "mundo"]
//   console.log(miarreglodeafuer)
// }

// console.log(miarreglo)
// console.log(miarreglodeafuer)
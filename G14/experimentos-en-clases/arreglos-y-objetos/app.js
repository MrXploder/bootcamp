const agregarNombreBoton = document.getElementById("agregarNombre");

let nombre1 = "Byron";
let nombre2 = "David";
let nombre3 = "Jorge";

// crear un arreglo con elementos ya existentes

// -----------[  0    ,   1    ,    2   ];
let nombres = ["Byron", "David", "Jorge", "Cristina", "Catalina"];
// -----------[             1           ];

// console.log(nombres[0]) // Byron
// console.log(nombres[1]) // David
// console.log(nombres[2]) // Jorge

//Imperativa
for (let i = 0; i < nombres.length; i++) {
  console.log(nombres[i]);
}

// Funcional
for (nombre of nombres) {
  console.log(nombre)
}

//OOP
nombres.forEach(function (nombre) {
  console.log(nombre);
})




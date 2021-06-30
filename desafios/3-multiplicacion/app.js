"use strict";

/**
 * Funcion que al invocarla, le pregunta al usuario por el numero de repeticiones
 * @returns {number|null}
 */
function askForLimitNumber() {
  // const limit = prompt("ingrese number");
  // const parsedLimit = Number.parseInt(limit)
  const limit = Number.parseInt(prompt("Ingrese el numero"));

  if (limit >= 1 && limit <= 20) {
    console.log("el numero esta dentro del rango");
    return limit;
  } else {
    console.log("el numero esta fuera de rango");
    return null;
  }
}

//////////////////////////////////////////////////

/**
 * Almacenamos el numero
 */
const limitNumber = askForLimitNumber(); //10

/**
 * Mostramos la tabla del 10 desde 10x1 hasta 10xN donde N es igual a limitNumber
 */
for (let i = 1; i <= limitNumber; i++) {
  console.log(`${i} x 10 = ${i * 10}`);
}

// 5 => 5 x 4 x 3 x 2 x 1
// 6 => 6 x 5 x 4 x 3 x 2 x 1

/**
 * Calculamos el factorial de todos los numeros enteros desde 1 a N donde N es igual a limitNumber
 */
for (let factoryNumber = 1; factoryNumber <= limitNumber; factoryNumber++) {
  let result = 1;
  for (let multiplier = 1; multiplier <= factoryNumber; multiplier++) {
    result = result * multiplier;
  }
  console.log(`El factorial de ${factoryNumber} puede ser ${result}`);
}

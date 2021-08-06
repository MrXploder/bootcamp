/**
 *
 * @param {Number} n1 - Numero uno
 * @param {Number} n2 - Numero dos
 * @returns {Number} resultado de la suma
 */
function plus(n1, n2) {
  if (typeof n1 !== "number" || typeof n2 !== "number") {
    // throw "n1 o n2 no son numeros"
    throw new Error("n1 o n2 no son numeros");
  } else {
    return n1 + n2;
  }
}

function minus(n1, n2) {
  n1();
  return n1 - n2;
}

// class MiError extends Error {
//   constructor(mensaje, otracosa) {
//     super(mensaje);

//     this.otracosa
//   }

// }

////////////////////////////////
let cargando = false;

try {
  cargando = true;
  const resultado = plus(1, 1);
  const resultado2 = plus("1", 1);
  const resultado3 = minus(1, 1);
  const resultado4 = minus("1", 1);
  const resultado5 = minus("A", 1);

  console.log(
    resultado,
    resultado2,
    typeof resultado2,
    resultado3,
    resultado4,
    resultado5,
    typeof NaN
  );
} catch (e) {
  console.error(e);
} finally {
  cargando = false;
}

////////////////////////////

// throw expression

/**
 * try {
 * } catch(e){
 * }
 */

let numeroDelUsuario = parseInt(prompt("Ingrese un numero"));

// font ligatures
// => == === >= <= != !== 
  

/**
 *
 * console.log => informacion
 * console.warn => advertencias
 * console.error => errores
 *
 */

function validarNumeroIngresado(numeroIngresado) {
  if (typeof numeroIngresado !== "number") {
    console.error("El numero ingresado no es un numero");
  } else if (Number.isNaN(numeroIngresado)) {
    console.error("El numero ingresado no es valido");
  } else if (numeroIngresado < 1 || numeroIngresado > 20) {
    console.error("El numero ingresado esta fuera de rango");
  }
}

function imprimirTablaDeMultiplicar(numeroIngresado) {
  for (let contador = 1; contador <= 12; contador++) {
    let resultado = numeroIngresado * contador;
    console.log(`${numeroIngresado} * ${contador} = ${resultado}`);
  }
}

validarNumeroIngresado(numeroDelUsuario);

// function imprimirTodasLasTablasDeMultiplicar() {
//   for (let contador = 1; contador <= 12; contador++) {
//     imprimirTablaDeMultiplicar(contador);
//   }
// }

// imprimirTodasLasTablasDeMultiplicar();

function imprimirFactorial(numeroIngresado) {
  let mensaje = "";
  let acumulador = 1;

  mensaje = numeroIngresado + "! = ";

  for (let contador = 1; contador <= numeroIngresado; contador++) {
    acumulador = acumulador * contador;
    mensaje = mensaje + contador + " * ";
  }

  mensaje = mensaje + " = " + acumulador;

  console.log(mensaje);
  console.log(acumulador);
}

// ejercicio correcto jajaj
// for (let i = 1; i <= 10; i++) {
//   let res = 1;
//   for (let j = 1; j <= i; j++) {
//     res = res * j;
//   }
//   console.log("Factorial de " + i + " es: " + res);
// }

imprimirFactorial(numeroDelUsuario);

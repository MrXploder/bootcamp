// const persona = "Luis";

// const retrasarPrograma = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("listo");
//   }, 5000);
// });

// // thenAble
// retrasarPrograma
//   .then((message) => {
//     console.log(retrasarPrograma);
//     console.log("promesa resuelta con exito");
//   })
//   .catch((reason) => {
//     console.error("algo paso, no se que cosa es");
//   })
//   .finally(() => {
//     console.log("finalmente");
//   });

// console.log(retrasarPrograma);
// console.log("programa sigue");

/////////////////////////////////////////

const add = (num1, num2) =>
  new Promise((resolve, reject) => {
    if (typeof num1 === "number" && typeof num2 === "number") {
      resolve(num1 + num2);
    } else {
      reject("Los argumentos que me pasaste no son numeros");
    }
  });

function success(value) {
  console.log(`El resultado de la suma es ${value}`);
}

function error(value) {
  console.error(`Ocurrio un error, este es el mensaje: ${value}`);
}

add(1, 1)
  .then((resultadoDeLaSuma) => success(resultadoDeLaSuma))
  .catch((reason) => error(reason));

// add("1", 1)
//   .then((resultadoDeLaSuma) => success(resultadoDeLaSuma))
//   .catch((reason) => error(reason));

// add(1, 1)
//   .then(resultadoSuma1 => {
//     success(resultadoSuma1);
//     return add(2, 2);
//   })
//   .then(resultadoSuma2 => {
//     success(resultadoSuma2)
//   })

// add(1, 1).then((resultadoSuma1) => {
//   success(resultadoSuma1);
//   return add(2, 2)
//     .then((resultadoSuma2) => {
//       success(resultadoSuma2);
//   });
// });

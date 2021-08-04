const calculadora = new Promise((resolve, reject) => {
  const resultado = 1 + 1;
  setTimeout(function () {
    resolve(resultado);
  }, 5000);
});

calculadora
  .then((resultado) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("anidacion 2");
      }, 1000);
    });
  })
  .then((mensaje) => {
    console.log(mensaje);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("anidacion 3");
      }, 1000);
    });
  });

const suma = 1 + 1;

const resta = 1 - 1;

console.log({ suma });
console.log({ resta });
console.log(calculadora);

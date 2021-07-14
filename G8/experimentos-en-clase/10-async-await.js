const add = (num1, num2) =>
  new Promise((resolve, reject) => {
    if (typeof num1 === "number" && typeof num2 === "number") {
      resolve(num1 + num2);
    } else {
      reject("Los argumentos que me pasaste no son numeros");
    }
  });

//   /**
//    * Metodo estatico de la clase Math que aproxima a el numero inferior mas proximo
//    */
// Math.floor()

(async () => {
  /**
   * se resuelven en serie
   */
  const resultadoSuma1 = await add(1, 1);
  const resultadoSuma2 = await add(2, 2);

  /**
   * se resuelven en paralelo
   */
  // const [resultadoSuma1, resultadoSuma2] = await Promise.all([
  //   add(1, 1),
  //   add(2, 2),
  // ]);

  console.log({ resultadoSuma1, resultadoSuma2 });
})();

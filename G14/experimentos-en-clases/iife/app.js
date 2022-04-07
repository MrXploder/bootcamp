
import { Tanque } from "./tanque.mjs"
// function sumar(x, y) {
//   return x + y
// }

// sumar(5, 8)

//------

// const sumar = function (x, y) {
//   return x + y;
// }

// sumar(5, 8)

//------

// const sumar = (x, y) => {
//   return x + y;
// };

// sumar(5, 8);

//------

//Inmediatly invoked function expression
((x, y) => {
  return x + y;
})(5, 8);


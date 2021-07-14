"use strict";

/**
 * Funcion pura
 * @param {number} x
 * @returns number
 */
function double(x) {
  return x * 2;
}

/**
 * Funcion pura anonima
 * @param {number} x
 * @returns number
 */
const doubler = function (x) {
  return x * 2;
};

/**
 * Funcion flecha con retorno explicito
 * @param {number} x
 * @returns number
 */
const doubling = (x) => {
  return x * 2;
};

/**
 * Funcion flecha con retorno implicito
 * @param {number} x
 * @returns number
 */
const doubles = (x) => x * 2;

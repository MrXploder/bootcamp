"use strict";

function double(x) {
  return x * 2;
}

function log(value) {
  console.log(value);
}

const fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.forEach(log);

fruits.forEach(function (fruit) {
  console.log(fruit);
});

fruits.forEach((fruit) => {
  console.log(fruit);
});

////////////////////////////

const fruits = ["Banana", "Orange", "Apple", "Mango"];

/**
 * borra el ultimo
 */
fruits.pop()

const [...restoDeFrutas, ultimaFruta] = fruits;


// Object Spread Operator
/**
 * borra el primero
 */
fruits.shift()

const [primeraFruta, ...restoDeFrutas] = fruits;

/**
 * agrega al final
 */
fruits.push("Kiwi")

fruits.concat("Kiwi")


/**
 * agrega desde el principio
 */
fruits.unshift("Pear")

/**
 * 
 */
fruits.length

/**
 * 
 */
// delete fruits[0]
// delete fruits[1]

fruits.splice()

const otherFruits = fruits.slice(0)




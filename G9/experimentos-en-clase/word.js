/**
 *
 * Funcion que recibe un arreglo de palabras y una palabra a buscar, y retorna
 * un arreglo con las veces que aparece esa palabra en el arreglo y el largo del arreglo
 *
 * @param {string[]} words - El arreglo de palabras
 * @param {string} wordToSearch - La palabra a buscar dentro del arreglo de palabras
 *
 * @returns {number[]} - Tuple donde el indice0 es la cantidad de veces que
 * se repite "wordToSearch" en "words" y
 * el indice1 es el largo del arreglo "words"
 *
 * @example
 * const result = wordCounter(["ab", "a"], "a")
 * console.log(result) //=> [1, 2]
 *
 */
function wordCounter(words, wordToSearch) {
  if (!Array.isArray(words)) {
    throw new TypeError(
      `expected 'words' to be an array but received ${typeof words}`
    );
  }

  if (typeof wordToSearch !== "string") {
    throw new TypeError(
      `expected to 'wordToSearch' to be an string but received ${typeof wordToSearch}`
    );
  }

  return [words.filter((word) => word === wordToSearch).length, words.length];
}

console.log(wordCounter(["ab", "a"], "a"));

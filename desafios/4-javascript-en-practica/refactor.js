/**
 * Refactor
 * @author MrXploder<l.arancibiaf@gmail.com>
 */

/**
 *
 */
const formulario = document.getElementById("formulario");

/**
 *
 */
const inputElementIds = ["nombre", "asunto", "mensaje"];
/**
 *
 * @param {*} value
 * @returns
 */
const isTextOnly = (value) => /([A-Za-z])/g.test(String(value));

/**
 *
 * @param {*} message
 */
function setValidationMessage(elementId, message) {
  const element = document.getElementById(elementId);
  if (element && "innerHTML" in element) {
    element.innerHTML = message;
  } else {
    console.error(`element not found in DOM`);
  }
}

/**
 *
 * @param {*} elementIds
 */
function resetValidationMessages(elementIds) {
  if (elementIds && Array.isArray(elementIds)) {
    elementIds.forEach((elementId) => {
      const element = document.getElementById(elementId);
      if ("innerHTML" in element) {
        element.innerHTML = "";
      } else {
        console.warn(
          `expected element to be type of Element, instead received typeof ${typeof element}`
        );
      }
    });
  } else {
    console.warn(
      `expected elementIds to be typeof Array, instead received typeof ${typeof elementIds}`
    );
  }
}

/**
 * Recibe un arreglo de HTMLElementId's y en base a una expresión regular, comprueba que
 * el valor de cada uno sea solo texto.
 * @param  {...any} elementIds
 * @returns {...Boolean}
 */
function validate(...elementIds) {
  if (elementIds && Array.isArray(elementIds)) {
    return elementIds.map((elementId) => {
      const element = document.getElementById(elementId);
      return element && "value" in element ? isTextOnly(element.value) : false;
    });
  } else {
    return [];
  }
}

/**
 * Capturar evento submit
 */
formulario.addEventListener("submit", function (event) {
  event.preventDefault();
  /////////////////////////////////////

  resetValidationMessages(
    inputElementIds
      .map((value) => `error${value.charAt(0).toUpperCase() + value.slice(1)}`)
      .concat(["resultado"])
  );

  const formValidationResult = validate(...inputElementIds);

  const every = formValidationResult.reduce((accumulator, value) => {
    if (!value) {
      setValidationMessage(
        inputElementIds[index],
        `El campo ${inputElementIds[index]} debe contener solo letras`
      );
    } else {
      accumulator = true;
    }
    return accumulator;
  }, false);

  if (every) {
    setValidationMesssage("resultado", "Formulario enviado con exito");
  }
});

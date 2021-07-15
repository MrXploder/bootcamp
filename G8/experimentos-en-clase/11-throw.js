function letrasMayusculas(texto) {
  try {
    if (typeof texto !== "string") {
      throw "texto no es un string";
    } else {
      return texto.toUpperCase();
    }
  } catch (e) {
    console.error(e);
    return texto;
  }
}

function aLetrasMayusculas(texto) {
  return texto.toUpperCase();
}

console.log(letrasMayusculas(10000002390823498203948));
console.log(letrasMayusculas("pepitopagadoble"));

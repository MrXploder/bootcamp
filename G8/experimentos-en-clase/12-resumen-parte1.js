const nombrePersona = "Luis";
const edadPersona = 29;
let esPersona = true; // false

/**
 * error, porque la variable es una "constante"
 */
nombrePersona = "Pepito";

/**
 * Si se puede, porque la variable es "let" o es modificable
 */
esPersona = false;
//////////////////////////////////////////////////

/**
 * Esto tambien es valido, pero no debiese hacerse, por la sencilla razon
 * de que inicialmente "esPersona" era booleano
 */
esPersona = "holamundo";

//////////////////////////////////////
// Estructuras de control
//////////////////////////////////////

const ampolletaNoFunciona = true;
const ampolletaEnchufada = false;
const ampolletaQuemada = true;

/**
 * todo lo que esta dentro del parentesis debe devolver verdadero o falso
 */
if (ampolletaEnchufada === true) {
  if (ampolletaQuemada === true) {
    // cambiar la ampolleta
  } else if (ampolletaQuemada === false) {
    // comprar una nueva ampolleta
  } else {
    // la ampolleta esta en otro plano astral
  }
} else if (ampolletaEnchufada === false) {
  // enchufa la ampolleta
}

////////////////////////////////////

/**
 * Switch-Case es para cuando yo tengo una variable
 * que tiene multiples opciones
 *
 * @example - Un select de tipos de Animales, y yo quiero
 * mostrar una foto de cada animal segun lo que alguien selecciono
 */

let animalElegido = "Leon";

switch (animalElegido) {
  case "Leon":
    {
      // hacer algo si animal elegido es leon
    }
    break;

  case "Serpiente":
    {
      // hacer algo si animal elegido es serpiente
    }
    break;

  case "Oso Panda":
  case "Oso Pardo":
  case "Oso Polar":
    {
      // hacer algo si animal es oso y cualquier tippo de oso
    }
    break;

  default: {
    //hacer algo si ningun caso existe
  }
}

//////////////////////////////////////
/**
 * Operadores de comparacion
 * +
 * Estos operadores devuelven verdadero o falso
 */

const gt1 = 5 > 3;
const gt2 = 5 >= 3;
const gt3 = 5 < 3;
const gt3 = 5 <= 3;
const gt3 = 5 !== 3;

/**
 * Operadores logicos
 *
 * Estos operadores devuelven verdadero o falso
 */

const negacion = !true;
const conjuncion = true && true;
const disyuncion = true || true;

///////////////77777//////////////

/**
 * Codigo de ejemplo de un termometro
 */

let temperaturaLeida = 40;

if (temperaturaLeida > 0 && temperaturaLeida < 36) {
  // la persona tiene hipotermia
} else if (temperaturaLeida >= 36 && temperaturaLeida < 37) {
  // la persona esta bien
} else if (temperaturaLeida >= 37 && temperaturaLeida < 38) {
  // la persona tiene una leve fiebre
} else if (temperaturaLeida >= 38 && temperaturaLeida < 39) {
  // la persona tiene fiebre media
} else if (temperaturaLeida >= 39 && temperaturaLeida < 40) {
  // la persona tiene fibre alta
} else {
  // la persona esta con fiebre muy alta o esta muerta
}

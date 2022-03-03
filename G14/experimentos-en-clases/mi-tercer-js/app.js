// Ecmascript 5
// camel case
var estadoDeLaAmpolleta = "No sé";

var x = "2";
var y = 2;

/**
 * = operador de asignacion
 * = = operador de comparacion
 * = = = operador de exactitud
 */
var esXIgualAY = x == y;
var esXDistintoDeY = x != y;
var esXExactamenteIgualAY = x === y;
var esXEstrictamenteDistintoDeY = x !== y;
var esXMayorQueY = x > y;
var esXMenorQueY = x < y;
var esXMayorOIgualQueY = x >= y;
var esXMenorOIgualQueY = x <= y;

/////////////////////////////////////////
var miMultiplicador = 1;
var miDivisor = 1;

var miIncrementador = 1;

// 1      = 1 + 1 => 2;
miIncrementador = miIncrementador + 1;

miIncrementador++;
// ambos ejemplos producen el mismo resultado

/////////////
var miDecrementador = 1;

miDecrementador = miDecrementador - 1;

miDecrementador--;
// ambos ejemplos producen el mismo resultado


////////////////
////////////////

miIncrementador += 1;
// miIncrementador = miIncrementador + 1;
miDecrementador -= 1;
// miDecrementador = miDecrementador - 1;
miMultiplicador *= 1;
// miMultiplicador = miMultiplicadorr * 1;
miDivisor /= 1;
// miDivisor = miDivisor / 1;


////////// 
// operadores logicos

var estaLloviendo = true;
var estaMojado = true;
var tengoHambre = true;
var noHeAlmorzado = false;

var seFueLaLuz = estaLloviendo && estaMojado;
var tengoQueComer = tengoHambre || noHeAlmorzado;
var noTengoQueComer = !tengoHambre && !noHeAlmorzado;

var disabled = true;
var enabled = !disabled;

// flag variables
/**
 * una muy buena practica
 */
var isLoading = true;
//un proceso random
isLoading = false;


/////////////////////////////////////////



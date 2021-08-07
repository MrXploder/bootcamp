// palabra_reservada nombre_de_la_variable operador_de_asignación dato_mismo: primitivo o objeto
let miTexto = "hola mi texto es este";
let miNumeroEntero = 1000;
let miNumeroFlotante = 39.5;
let miBooleanoVerdadero = true;
let miBooleanoFalso = false;

////////////////////////////////////////
// 'let' y el 'const'

let miVariableLet = "hola mi variable es de tipo let"

miVariableLet = "hola e sido cambiado";

const miVariableConst = "hola mi variable es de tip oconst";

// miVariableConst = "hola no pude ser cambiado"

////////////////////////////////////////

const conjuncion = true && true // true
const disyuncion = true || false // true 
const negacion = !true // false

// ejemplo de conjuncion

const temperatura;

if (temperatura > 37.5) {
  console.log("la persona tiene fiebre")
} else {
  console.log("la persona no tiene fiebre");
}

////////////////////////////////

if (temperatura >= 0 && temperatura < 36) {
  console.log("la persona tiene hipotermia");
} else if (temperatura >= 36 && temperatura < 37.5) {
  console.log("la persona tiene una temperatura normal")
} else if (temperatura >= 37.5 && temperatura < 38.5) {
  console.log("la persona tiene fiebre leve");
} else if (temperatura >= 38.5 && temperatura < 39.5) {
  console.log("la persona tiene fibre moderada")
} else if (temperatura >= 39.5 && temperatura <= 40) {
  console.log("la persona tiene fiebre alta");
} else {
  console.log("la persona realizó la suicidación")
}


////////////////////////////////////////////////////////


//ejemplo de disyuncion

const interruptorPrimerPiso;
const interruptorSegundoPiso;

if (interruptorPrimerPiso || interruptorSegundoPiso) {
  console.log("la ampolleta esta encendida")
} else {
  console.log("la ampolleta esta apagada")
}
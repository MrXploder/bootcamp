// const laLamparaEstaEncendia = false;
// const probasteEnchufandoLaLampara = false;
// const probasteCambiandoLaAmpolleta = true;
// ////////////////////////////////////////////////


// if (probasteEnchufandoLaLampara === true) {
//   if (probasteCambiandoLaAmpolleta === true) {
//     ///// TODO: seguir comprobando cosas
//   } else {
//     /// TODO: cambiar la ampolleta
//   }
// } else {
//   //TODO: enchufar la lampara
// }

/////////////////////////////////////////


let temperatura; // 0 - 100

/**
 * >= 0 Y <= 36: tiene hipotermia
 * > 36 Y <= 37: tiene tempratura normal
 * > 37 - <= 38: tiene fiebre leve
 * > 38 - <= 39: tiene fiebre moderada
 * > 39 - <= 40: tiene fiebre alta
 * > 40: la persona realizo la muricion
 */

// temperatura = 37
/** Conjuncion
 * a && b = c
 * V    V = V
 * V    F = F
 * F    V = F
 * F    F = F
 */
if (temperatura >= 0 && temperatura <= 36) {
  console.log("tiene hipotermia")
} else if (temperatura > 36 && temperatura <= 37) {
  console.log("tiene temperatura normal")
} else if (temperatura > 37 && temperatura <= 38) {
  console.log("tiene fiebre leve");
} else if (temperatura > 38 && temperatura <= 39) {
  console.log("tiene fiebre moderada")
} else if (temperatura > 39 && temperatura <= 40) {
  console.log("tiene fiebre alta")
} else if (temperatura > 40) {
  console.log("la persona realizo la muricion")
} else {
  console.log("la persona no tiene temperatura, es un extraterrestre")
}

//////////////////////////////////////////////////

const interruptorPrimerPiso;
const interruptorSegundoPiso;

/**Disyuncion
 * a || b = c
 * V    V = V
 * V    F = V
 * F    V = V
 * F    F = F
 */

//          F                                    F
if (interruptorPrimerPiso === true || interruptorSegundoPiso === true) {
  console.log("encender la lampara")
} else {
  console.log("apagar la lampara")
}

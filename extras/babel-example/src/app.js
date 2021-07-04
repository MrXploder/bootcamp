/**
 * Aplicar la logica de las clases creadas
 *
 */

// importamos las clases

import Cliente from "./cliente.js";
import Impuestos from "./impuestos.js";

// ahora tenemos las dos clases cada una en su propio archivo
// y eso mejora el orden

// 100 y 100 son nuemros cualquiera
const impuestos = new Impuestos(200, "100");
const Vanessa = new Cliente("Vanessa", {});

Vanessa.calcularImpuesto();

//fin

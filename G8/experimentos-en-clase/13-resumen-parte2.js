/**
 * Usos siimples
 */

/**
 *
 *
 * f(x) = x**2
 *
 *
 * x    |   f(x)
 * 1    |   1
 * 2    |   4
 * 3    |   9
 * 4    |   16
 * 5    |   25
 * 6    |   36
 * 7    |   49
 *
 */

/**
 * Lo unico que hay aca es una "declaracion"
 * Por la funcion no se esta utilizando
 */
function exponencial(x) {
  const resultado = x ** 2;
  return resultado;
}

const resultado1 = exponencial(1);
const resultado2 = exponencial(2);
const resultado3 = exponencial(3);
const resultado4 = exponencial(4);
const resultado5 = exponencial(5);
const resultado6 = exponencial(6);
const resultado7 = exponencial(7);

////////////////////////////////////////

function nombreCompleto(nombre, apellido) {
  const nombrecompleto = nombre + apellido;
  return nombrecompleto;
}

const profe = nombreCompleto("Luis", "Arancibia");
const ayudante = nombreCompleto("Betsi", "Salas");

///////////////////////////////////////////

/**
 * uso avanzado
 *
 * devolver funciones
 */
function cuadratica(x) {
  return x ** 2;
}

function cubica(x) {
  return x ** 3;
}

function expo(tipo) {
  if (tipo === "cuadratica") {
    return function (x) {
      return x ** 2;
    };
  } else if (tipo === "cubica") {
    return function (x) {
      return x ** 3;
    };
  }
}

const cuadratica = expo("cuadratica");
const cubica = expo("cubica");

cuadratica(2);
cubica(3);

/**
 * entregar funciones
 */

function log(algo) {
  console.log(algo);
}

//log("hola mundo") => "hola mundo"
//log(1) => 1

/**
 * Devuelve el doble de X
 */
function doble(x, cb) {
  const resultado = x * 2;
  cb(resultado);
  return resultado;
}

const y1 = doble(2, log);

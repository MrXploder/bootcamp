import Impuestos from "./impuestos.js";

export default class Cliente {
  constructor(nombre, impuesto) {
    if(typeof nombre !== "string"){
      throw new Error("nombre debe ser de tipo string")
    }
    if(!(impuesto instanceof Impuestos)){
      throw new Error("impuesto no es una instancia de la clase Impuesto")
    }
    this._nombre = nombre;
    /**
     * la instancia de la clase Impuestos
     * @example
     * const impuesto = new Impuestos(100, 200)
     */
    this._impuesto = impuesto;
  }

  /**
   *
   */
  get nombre() {
    return this._nombre;
  }

  /**
   *
   */
  set nombre(nuevoNombre) {
    this._nombre = nuevoNombre;
  }

  /**
   * calcula el impuesto en base a la clase Impuesto
   * y lo imprime en cosnola
   */
  calcularImpuesto() {
    const resultado =
      (this._impuesto.monto_bruto_anual - this._impuesto.deducciones) * 0.21;
    console.log({resultado});
  }
}

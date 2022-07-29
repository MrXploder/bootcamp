class Cliente {
  #nombre;

  constructor(nombre, impuesto) {
    this.#nombre = nombre;
    this.impuesto = impuesto;
  }

  calcularImpuesto() {
    return (this.impuesto.montoBrutoAnual - this.impuesto.deducciones) * 0.21;
  }
}

//-----------------------------//

class Impuestos {
  #montoBrutoAnual;
  #deducciones;

  constructor(montoBrutoAnual, deducciones) {
    this.#montoBrutoAnual = montoBrutoAnual;
    this.#deducciones = deducciones;
  }

  get impuestos() {
    return {
      montoBrutoAnual: this.#montoBrutoAnual,
      deducciones: this.#deducciones,
    };
  }
}

//---------------------------//

const VIPImpuestos = new Impuestos(36_000_000, 6_000_000);
const VIPCliente = new Cliente("Daniel Rebolledo", VIPImpuestos.impuestos);

const impuestos = VIPCliente.calcularImpuesto();

console.log({ impuestos });




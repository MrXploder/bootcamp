class Cliente {
  constructor(nombre, impuesto) {
    if (typeof nombre !== "string") {
      console.warn(
        "se supone que nombre debiese ser un texto para la persona "
      );
    }

    if (!(impuesto instanceof Impuestos)) {
      console.warn(
        "se supone que impuesto es de tipo Impuesto para la persona " + nombre
      );
    }

    this._nombre = nombre;
    this._impuesto = impuesto;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(nuevoNombre) {
    this._nombre = nuevoNombre;
  }

  calcularImpuesto() {
    return (
      (this._impuesto.monto_bruto_anual - this._impuesto.deducciones) * 0.21
    );
  }
}

const impuestosDeLuis = new Impuestos(100, 5);
const clienteLuis = new Cliente("Luis", impuestosDeLuis);

const impuestosDeAngela = new Impuestos(300, 15);
const clienteAngela = new Cliente("Angela", impuestosDeAngela);

const calculoDeLuis = clienteLuis.calcularImpuesto();
const calculoDeAngela = clienteAngela.calcularImpuesto();

console.log({ calculoDeLuis, calculoDeAngela });

// const impuestosDeCarolina = {
//   monto_bruto_anual: 200,
//   deducciones: 10,
// };
// const clienteCarolina = new Cliente("Carolina", impuestosDeCarolina);

// console.log({
//   typeofcarolina: typeof impuestosDeCarolina,
//   typeofangela: typeof impuestosDeAngela,
// });
// console.log({
//   instanceofcarolina: impuestosDeCarolina instanceof Impuestos,
//   instanceofangela: impuestosDeAngela instanceof Impuestos,
// });

export default class Impuestos {
  constructor(monto_bruto_anual, deducciones) {
    if (
      typeof monto_bruto_anual !== "number" ||
      typeof deducciones !== "number"
    ) {
      throw new Error("oye ya po no te vai al chancho");
    }
    this.monto_bruto_anual = monto_bruto_anual;
    this.deducciones = deducciones;
  }
}

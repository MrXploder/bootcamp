"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Impuestos = /*#__PURE__*/function () {
  function Impuestos(monto_bruto_anual, deducciones) {
    _classCallCheck(this, Impuestos);

    this._monto_bruto_anual = monto_bruto_anual;
    this._deducciones = deducciones;
  }

  _createClass(Impuestos, [{
    key: "monto_bruto_anual",
    get: function get() {
      return this._monto_bruto_anual;
    },
    set: function set(value) {
      this._monto_bruto_anual = value;
    }
  }, {
    key: "deducciones",
    get: function get() {
      return this._deducciones;
    },
    set: function set(value) {
      this._deducciones = value;
    }
  }]);

  return Impuestos;
}();

var Cliente = /*#__PURE__*/function () {
  function Cliente(nombre, impuesto) {
    _classCallCheck(this, Cliente);

    if (typeof nombre !== "string") {
      console.warn("se supone que nombre debiese ser un texto para la persona ");
    }

    if (!(impuesto instanceof Impuestos)) {
      console.warn("se supone que impuesto es de tipo Impuesto para la persona " + nombre);
    }

    this._nombre = nombre;
    this._impuesto = impuesto;
  }

  _createClass(Cliente, [{
    key: "nombre",
    get: function get() {
      return this._nombre;
    },
    set: function set(nuevoNombre) {
      this._nombre = nuevoNombre;
    }
  }, {
    key: "calcularImpuesto",
    value: function calcularImpuesto() {
      return (this._impuesto.monto_bruto_anual - this._impuesto.deducciones) * 0.21;
    }
  }]);

  return Cliente;
}();

var impuestosDeLuis = new Impuestos(100, 5);
var clienteLuis = new Cliente("Luis", impuestosDeLuis);
var impuestosDeAngela = new Impuestos(300, 15);
var clienteAngela = new Cliente("Angela", impuestosDeAngela);
var calculoDeLuis = clienteLuis.calcularImpuesto();
var calculoDeAngela = clienteAngela.calcularImpuesto();
console.log({
  calculoDeLuis: calculoDeLuis,
  calculoDeAngela: calculoDeAngela
}); // const impuestosDeCarolina = {
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

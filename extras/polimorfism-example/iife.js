function inicializar() {
  console.log("hola mundo");
}

inicializar();

///////////////////////////////////

// (function () {
//   console.log("funcion anonima autocontenida");
// })
////////////////////////////////////////

(function () {
  console.log("funcion anonima autocontenida y autoinvocada");
})();

////////////////////////////////////////

(() => {
  console.log("funcion flecha anonima autocontenida y autoinvocada");
})();

var nombre = 'Luis';
var edad = 31;
var esporfiado = true;

var boton_saludar = $('#boton_saludar');

boton_saludar.click(function () {
  alert('hola mundo');
});

var boton_despedirse = $('#boton_despedirse');

boton_despedirse.click(function () {
  alert("nos vemos pronto")
});

var formulario_calculadora = $("#formulario_calculadora");

formulario_calculadora.submit(function (e) {
  e.preventDefault();
  
  var nota1 = $("#nota1");
  var nota2 = $("#nota2");
  var nota3 = $("#nota3");

  alert("la nota 1 es: " + nota1.val());
  alert("la nota 2 es: " + nota2.val());
  alert("la nota 3 es: " + nota3.val());
  alert("el promedio es: " + (nota1.val() + nota2.val() + nota3.val()) / 3)
})
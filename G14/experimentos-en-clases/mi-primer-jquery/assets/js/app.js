$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

var nombrePersona = prompt("ingrese su nombre", "luis");
var nombreCarrera = prompt("ingrese carrera", "desarrollo frontend");

var campoNombre = $("#campo-nombre");
var campoCarrera = $(".campo-carrera");

campoNombre.text(nombrePersona);
campoNombre.css("color", "green");
campoCarrera.text(nombreCarrera);

var botonAgregarNotasHtml = $("#agregar-notas-html");

botonAgregarNotasHtml.addClass("btn btn-primary");

botonAgregarNotasHtml.click(function () {
  var notaUnoHtml = parseInt(prompt("ingrese nota 1 ramo html"));
  var notaDosHtml = parseInt(prompt("ingrese nota 2 ramo html"));
  var notaTresHtml = parseInt(prompt("ingrese nota 3 ramo html"));

  var campoNotaUnoHtml = $("#nota-uno-html");
  var campoNotaDosHtml = $("#nota-dos-html");
  var campoNotaTresHtml = $("#nota-tres-html");
  var campoPromedioHtml = $("#promedio-html");

  campoNotaUnoHtml.text(notaUnoHtml);
  campoNotaDosHtml.text(notaDosHtml);
  campoNotaTresHtml.text(notaTresHtml);

  campoPromedioHtml.text((notaUnoHtml + notaDosHtml + notaTresHtml) / 3);
});

var estaEditandoNotasCss = false;

$("#agregar-notas-css").click(function () {
  console.log("hola mundo");
  var campoNotaUnoCss = $("#nota-uno-css");
  var campoNotaDosCss = $("#nota-dos-css");
  var campoNotaTresCss = $("#nota-tres-css");
  console.log({ campoNotaUnoCss, campoNotaDosCss, campoNotaTresCss });
  if (!estaEditandoNotasCss) {
    campoNotaUnoCss.html($(document.createElement("input")).val(campoNotaUnoCss.text()))
  }
});

var celcius = prompt("Ingrese la temperatura en grados Celcius");
var gradosCelcius = parseInt(celcius);

var resultado = 273.15 + gradosCelcius;

console.log("Resultado: ");
console.log("*****************");
console.log("Celcius: " + gradosCelcius + "ºC");
console.log("Kelvin: " + resultado + "K");

var gradosFahrenheit = 32 + gradosCelcius * (9 / 5);

console.log("Fahrenheit: " + gradosFahrenheit + "ºF");
console.log("******************");

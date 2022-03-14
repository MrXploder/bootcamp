let miNombre = "Luis";
// funcion normal
function saludar() {
  alert("hola a todos lindos preciosos");
}

// console.log()
// window.alert()
// window.prompt()
// Number.parseInt()

let botonSaludar = document.getElementById("botonSaludar");
let botonEsteNo = document.getElementsByClassName("este-no");
let botonEsteTampoco = document.getElementsByTagName("button");




botonSaludar.addEventListener("click", function () {
  alert("hola bebé");
});

botonEsteNo[0].addEventListener("click", function () {
  alert("el primer este-no que encontre")
})

botonEsteTampoco[2].addEventListener("click", function () {
  alert("el tercer button que encontre")
})






// const paragraph = document.getElementsByTagName("p");
// console.log({ paragraph, element });
// const element = document.querySelectorAll("div .holamundo");
// const anotherElement = document.querySelectorAll("#pepitoPagaDoble");
// console.log({ element, anotherElement });

// const elements = document.querySelectorAll(`[class$="-item"]`);

const sayHiButton = document.getElementById("sayHiButton");
console.log(sayHiButton);

// function onSayHiButtonClick() {

// }

// sayHiButton.addEventListener("click", onSayHiButtonClick);

sayHiButton.addEventListener("click", function (event) {
  alert("me han hecho click");
  console.log({ event });
});

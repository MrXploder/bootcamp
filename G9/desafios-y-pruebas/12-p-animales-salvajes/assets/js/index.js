"use strict";

import { Leon, Lobo, Oso, Serpiente, Aguila } from "./Animals.js";

// import * as Animals from "./Animals.js";

// console.log(Animals);
(async () => {
  const Response = await fetch("/animales.json");
  const { animales: Animales } = await Response.json();

  const nombreAnimalElement = document.getElementById("animal");
  const edadAnimalElement = document.getElementById("edad");
  const comentariosAnimalElement = document.getElementById("comentarios");

  const previewAnimalElement = document.getElementById("preview");
  const btnRegistrarElement = document.getElementById("btnRegistrar");

  nombreAnimalElement.addEventListener("change", () => {
    // console.log(nombreAnimalElement.value);
    const animalElegido = nombreAnimalElement.value;

    const animalEncontrado = Animales.find(
      (animal) => animal.name === animalElegido
    );

    console.log(animalEncontrado);

    previewAnimalElement.setAttribute(
      "src",
      `/assets/imgs/${animalEncontrado.imagen}`
    );
  });

  btnRegistrarElement.addEventListener("click", () => {
    console.log(
      nombreAnimalElement.value,
      edadAnimalElement.value,
      comentariosAnimalElement.value
    );
  });
})();

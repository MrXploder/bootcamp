class Animal {
  #nombre;
  #edad;
  #img;
  #comentarios;
  #sonido;

  constructor(nombre, edad, img, comentarios, sonido) {
    this.#nombre = nombre;
    this.#edad = edad;
    this.#img = img;
    this.#comentarios = comentarios;
    this.#sonido = sonido;
  }

  get Nombre() {
    return this.#nombre;
  }

  get Edad() {
    return this.#edad;
  }

  get Img() {
    return this.#img;
  }

  get Sonido() {
    return this.#sonido;
  }

  set Comentarios(comentarios) {
    this.#comentarios = comentarios;
  }

  get Comentarios() {
    return this.#comentarios;
  }
}

class Leon extends Animal {
  constructor(...args) {
    super(...args);
  }

  Rugir() {
    console.log("rooooar");
  }
}

class Lobo extends Animal {
  constructor(...args) {
    super(...args);
  }

  Aullar() {
    console.log("auuuuuuu");
  }
}

class Oso extends Animal {
  constructor(...args) {
    super(...args);
  }

  Gruñir() {
    console.log("grrrrrrr");
  }
}

class Serpiente extends Animal {
  constructor(...args) {
    super(...args);
  }

  Sisear() {
    console.log("zzzzzzzzz");
  }
}

class Aguila extends Animal {
  constructor(...args) {
    super(...args);
  }

  Chillar() {
    console.log("chrrrchrhchrhchr");
  }
}

(async function () {
  const animalElement = document.getElementById("animal");
  const edadElement = document.getElementById("edad");
  const comentariosElement = document.getElementById("comentarios");
  const previewElement = document.getElementById("preview");
  const btnRegistrarElement = document.getElementById("btnRegistrar");

  const Request = await fetch("/animales.json");
  const { animales: Animales } = await Request.json();

  animalElement.addEventListener("change", (event) => {
    // console.log({ event });
    const nombreDelAnimalElegido = animalElement.value;

    const animalEncontrado = Animales.find(
      (animal) => animal.name === nombreDelAnimalElegido
    );

    previewElement.setAttribute(
      "src",
      `./assets/imgs/${animalEncontrado.imagen}`
    );
  });

  btnRegistrarElement.addEventListener("click", () => {
    let nombre = animalElement.value;
    let edad = edadElement.value;
    let comentarios = comentariosElement.value;

    console.log({ nombre, edad, comentarios });
  });
})();

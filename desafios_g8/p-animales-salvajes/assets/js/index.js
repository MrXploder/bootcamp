"use strict";

class Animal {
  #comentarios;

  constructor(nombre, edad, img, comentarios, sonido) {
    this.nombre = nombre;
    this.edad = edad;
    this.img = img;
    this.#comentarios = comentarios;
    this.sonido = sonido;
  }

  get Nombre() {
    return this.nombre;
  }

  get Edad() {
    return this.edad;
  }

  set Comentarios(value) {
    this.#comentarios = value;
  }

  get Sonido() {
    return this.sonido;
  }
}

class Leon extends Animal {
  constructor(...args) {
    super(...args);
  }

  Rugir(player) {
    player.innerHTML = `<source src="./assets/sounds/Rugido.mp3">`;
    player.play();
  }
}

class Lobo extends Animal {
  constructor(...args) {
    super(...args);
  }

  Aullar() {
    player.innerHTML = `<source src="./assets/sounds/Aullido.mp3">`;
    player.play();
  }
}

class Oso extends Animal {
  constructor(...args) {
    super(...args);
  }

  Gruñir(player) {
    player.innerHTML = `<source src="./assets/sounds/Gruñido.mp3">`;
    player.play();
  }
}

class Serpiente extends Animal {
  constructor(...args) {
    super(...args);
  }

  Sisear(player) {
    player.innerHTML = `<source src="./assets/sounds/Siseo.mp3">`;
    player.play();
  }
}

class Aguila extends Animal {
  constructor(...args) {
    super(...args);
  }

  Chillar(player) {
    player.innerHTML = `<source src="./assets/sounds/Chillido.mp3">`;
    player.play();
  }
}

(async function () {
  const AnimalesRaw = await fetch("/animales.json");
  const Animales = await AnimalesRaw.json();

  const animalSelect = document.querySelector("#animal");
  const edadSelect = document.querySelector("#edad");
  const comentariosTextArea = document.querySelector("#comentarios");
  const imgPreview = document.querySelector("#preview");
  const btnRegistrar = document.querySelector("#btnRegistrar");
  const player = document.querySelector("#player");

  const AnimalesDIV = document.querySelector("#Animales");

  const AnimalesEnInvestigacion = [];

  animalSelect.addEventListener("change", () => {
    imgPreview.setAttribute("src", `./assets/imgs/${animalSelect.value}`);
  });

  function updateView() {
    AnimalesDIV.innerHTML = "";
    AnimalesEnInvestigacion.forEach((animal) => {
      const DIV = document.createElement("div");
      DIV.innerHTML = `
       <div class="card" style="width: 100px; cursor: pointer">
           <div class="card-body">
           <img class="img-fluid" src="./assets/imgs/${animal.img}"  />
           </div>
           </div>
           `;

      DIV.addEventListener("click", handleOnClick(animal));
      AnimalesDIV.appendChild(DIV);
    });
  }

  function handleOnClick(instance) {
    const player = document.querySelector("#player");
    return function (event) {
      if (instance.nombre === "Leon") {
        instance.Rugir(player);
      }
    };
  }

  btnRegistrar.addEventListener("click", (event) => {
    const nombre = animalSelect.value.split(".")[0];
    const args = [
      nombre,
      edadSelect.value,
      animalSelect.value,
      comentariosTextArea.value,
      {},
    ];
    let instance;

    if (nombre === "Leon") {
      instance = new Leon(...args);
    } else if (nombre === "Lobo") {
      instance = new Lobo(...args);
    } else if (nombre === "Oso") {
      instance = new Oso(...args);
    } else if (nombre === "Serpiente") {
      instance = new Serpiente(...args);
    } else if (nombre === "Aguila") {
      instance = new Aguila(...args);
    } else {
      throw new Error("unknown animal name");
    }

    AnimalesEnInvestigacion.push(instance);

    updateView();
  });
})();

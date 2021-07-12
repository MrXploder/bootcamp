"use strict";

//const miOperacionQueTomaMuchoTiempo = new Promise((resolve, reject) => {
//  resolve();
//  reject();
//})

//miOperacionQueTomaMuchoTiempo.then(() => {})

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

  get Comentarios() {
    return this.#comentarios;
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
    player.src = `./assets/sounds/Rugido.mp3`;
    player.load();
    player.play();
  }
}

class Lobo extends Animal {
  constructor(...args) {
    super(...args);
  }

  Aullar(player) {
    player.src = `./assets/sounds/Aullido.mp3`;
    player.load();
    player.play();
  }
}

class Oso extends Animal {
  constructor(...args) {
    super(...args);
  }

  Gruñir(player) {
    player.src = `./assets/sounds/Gruñido.mp3`;
    player.load();
    player.play();
  }
}

class Serpiente extends Animal {
  constructor(...args) {
    super(...args);
  }

  Sisear(player) {
    player.src = `./assets/sounds/Siseo.mp3`;
    player.load();
    player.play();
  }
}

class Aguila extends Animal {
  constructor(...args) {
    super(...args);
  }

  Chillar(player) {
    player.src = `./assets/sounds/Chillido.mp3`;
    player.load();
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

  const modal = document.querySelector("#modal");
  const modalBody = document.querySelector("#modal-body");

  function openModalWith(something) {
    modalBody.innerHTML = something;
    $(modal).modal("show");
  }

  function closeModalAndReset() {
    modalBody.innerHTML = "";
    $(modal).modal("hide");
  }

  function updateView() {
    AnimalesDIV.innerHTML = "";
    AnimalesEnInvestigacion.forEach((animal, index) => {
      const DIVImagenAnimal = document.createElement("div");
      const DIVBarraSonido = document.createElement("div");

      DIVImagenAnimal.innerHTML = `
      <img type ="button "style="width: 10rem;" src="./assets/imgs/${animal.img}" class="card-img-top img-fluid" data-bs-toggle="modal" data-bs-target="#${animal.nombre}-${index}">`;

      DIVBarraSonido.innerHTML = `
      <div class="card-body p-1">
      
      <img class="p-1" height="30rem" src="./assets/imgs/audio.svg"/>
      </div>
      `;

      DIVImagenAnimal.addEventListener("click", openModalOnClick(animal));
      DIVBarraSonido.addEventListener("click", playSoundOnClick(animal));

      const ContainerDIV = document.createElement("div");
      ContainerDIV.classList.add("card", "text-white", "bg-secondary", "m-3");
      ContainerDIV.appendChild(DIVImagenAnimal);
      ContainerDIV.appendChild(DIVBarraSonido);
      AnimalesDIV.appendChild(ContainerDIV);
    });
  }

  /**
   *
   * @param {*} instance
   * @returns
   *
   * @debt - Falta agregar el sonido de todos los animales
   */
  function playSoundOnClick(instance) {
    console.log("play", instance);
    const player = document.querySelector("#player");
    return function (event) {
      console.log("call click event");
      if (instance.nombre === "Leon") {
        instance.Rugir(player);
      } else if (instance.nombre === "Lobo") {
        instance.Aullar(player);
      } else if (instance.nombre === "Oso") {
        instance.Gruñir(player);
      } else if (instance.nombre === "Serpiente") {
        instance.Sisear(player);
      } else if (instance.nombre === "Aguila") {
        instance.Chillar(player);
      }
    };
  }

  /**
   *
   * @param {*} instance
   * @returns
   *
   * @debt - Revisar la clase Animal para correjir los accesos de los miembros privados/publicos
   */
  function openModalOnClick(instance) {
    return function (event) {
      openModalWith(`
        <h1>Nombre del Animal: ${instance.nombre}</h1>
        <img src="./assets/imgs/${instance.img}" class="img-fluid"/>
        <p>${instance.Comentarios}</p>
      `);
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

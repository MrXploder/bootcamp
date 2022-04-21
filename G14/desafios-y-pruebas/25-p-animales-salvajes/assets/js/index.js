class Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    this.nombre = nombre;
    this.edad = edad;
    this.img = img;
    this.comentarios = comentarios;
    this.sonido = sonido;
  }
}

class Leon extends Animal {
  constructor(...args) {
    super(...args);
  }

  rugir() {
    console.log("Roar!!");
  }
}

class Lobo extends Animal {
  aullar() {
    console.log("Auuuu!");
  }
}

class Oso extends Animal {
  gruñir() {
    console.log("Grrrooar");
  }
}

class Serpiente extends Animal {
  sisear() {
    console.log("Zzzzszsssz");
  }
}

class Aguila extends Animal {
  chillar() {
    console.log("Iiiiiiiaaa");
  }
}

//--------------------------------------//
function getAllAnimals() {
  return fetch("/animales.json").then((response) => response.json());
}

async function iniciarPrograma() {
  const zoologico = [];
  const animales = await getAllAnimals();

  const $selectAnimal = document.querySelector("#animal");
  const $selectEdad = document.querySelector("#edad");
  const $inputComentarios = document.querySelector("#comentarios");
  const $divPreview = document.querySelector("#preview");
  const $btnRegistrar = document.querySelector("#btnRegistrar");
  const $zonaAnimales = document.querySelector("#Animales");
  const $bodyModalAnimal = document.querySelector("#modalAnimal .modal-body");
  const $audioPlayer = document.querySelector("#player");

  //----------
  $selectAnimal.addEventListener("change", (event) => {
    const animalSeleccionado = event.target.value;
    const animalFiltrado = animales.find(
      (animal) => animal.name === animalSeleccionado
    );
    $divPreview.style.backgroundImage = `url(/assets/imgs/${animalFiltrado.imagen})`;
  });

  $btnRegistrar.addEventListener("click", () => {
    const animalSeleccionado = $selectAnimal.value;
    const rangoDeEdad = $selectEdad.value;
    const comentarios = $inputComentarios.value;
    const animalFiltrado = animales.find(
      (animal) => animal.name === animalSeleccionado
    );
    console.log({ animalSeleccionado, rangoDeEdad, comentarios });
    // En este punto ya tengo el formulario llenado
    // y tengo los datos listos para ser procesados

    //agregar un nuevo animal al zoologico
    // const zoologico = [];
    // zoologico.push(ANIMAl)
    const datosNuevoAnimal = [
      animalSeleccionado,
      rangoDeEdad,
      animalFiltrado.imagen,
      comentarios,
      animalFiltrado.sonido,
    ];

    switch (animalSeleccionado) {
      case "Leon":
        zoologico.push(new Leon(...datosNuevoAnimal));
        break;
      case "Lobo":
        zoologico.push(new Lobo(...datosNuevoAnimal));
        break;
      case "Oso":
        zoologico.push(new Oso(...datosNuevoAnimal));
        break;
      case "Serpiente":
        zoologico.push(new Serpiente(...datosNuevoAnimal));
        break;
      case "Aguila":
        zoologico.push(new Aguila(...datosNuevoAnimal));
        break;
    }

    renderZoo(zoologico);

    $selectAnimal.value = "";
    $inputComentarios.value = "";
    $selectEdad.value = "";
  });

  //---------------

  /**
   * Esta funcion debe tomar un arreglo de animales y crearlos en la vista
   */
  function renderZoo(zoologico) {
    $zonaAnimales.innerHTML = "";
    zoologico.forEach((animal) => {
      const $cardDiv = document.createElement("div");
      const $modalImg = document.createElement("img");
      const $soundButton = document.createElement("button");

      $cardDiv.classList.add("card");

      $modalImg.src = `/assets/imgs/${animal.img}`;
      $modalImg.classList.add("card-img-top");

      $soundButton.classList.add("btn")
      $soundButton.classList.add("btn-secondary")
      $soundButton.innerHTML = `
        <img src="/assets/imgs/audio.svg" width="35" height="35">
      `

      $modalImg.addEventListener("click", () => {
        $bodyModalAnimal.innerHTML = `
          <img src="/assets/imgs/${animal.img}" />
          <p> ${animal.edad} </p>
          <h6> Comentarios: </h6>
          <p> ${animal.comentarios} </p>
        `;

        // levantar el modal
        $("#modalAnimal").modal("show");
      });

      $soundButton.addEventListener("click", () => {
        $audioPlayer.setAttribute("src", `/assets/sounds/${animal.sonido}`)
        $audioPlayer.load()
        $audioPlayer.play()
      });

      $cardDiv.appendChild($modalImg);
      $cardDiv.appendChild($soundButton);

      $zonaAnimales.appendChild($cardDiv);
    });
  }
}

iniciarPrograma();

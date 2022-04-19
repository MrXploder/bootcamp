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
  const animales = await getAllAnimals();

  const $selectAnimal = document.querySelector("#animal");
  const $selectEdad = document.querySelector("#edad");
  const $inputComentarios = document.querySelector("#comentarios");

  const $divPreview = document.querySelector("#preview");

  const $btnRegistrar = document.querySelector("#btnRegistrar");

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

    console.log({ animalSeleccionado, rangoDeEdad, comentarios });
  });
}

iniciarPrograma();

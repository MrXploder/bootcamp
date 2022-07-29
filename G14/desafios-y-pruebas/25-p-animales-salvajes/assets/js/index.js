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

    /**
     * Se podria haber hecho sin if ni switch-case?
     */
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

    /**
     * Funcion aparte para mostrar los datos en la vista sino tendriamos
     * la ensalada
     */
    renderZoo(zoologico);

    /**
     * Reiniciamos el formulario como guinda de la torta.
     */
    $selectAnimal.value = "";
    $inputComentarios.value = "";
    $selectEdad.value = "";
  });

  //---------------

  /**
   * Esta funcion debe tomar un arreglo de animales y crearlos en la vista
   */
  function renderZoo(zoologico) {
    /**
     * Vaciamos todo el DIV de la vista, para empezar todo denuevo
     */
    $zonaAnimales.innerHTML = "";

    /**
     * Vamos animal por animal agregandolo a la vista
     */
    zoologico.forEach((animal) => {
      /**
       * Creamos etiquetas "virtuales"
       * Es como cuando hacemos document.getElementById pero en realidad
       * no existen... las creamos aqui mismo y luego las ponemos en la vista
       */
      const $cardDiv = document.createElement("div");
      const $modalImg = document.createElement("img");
      const $soundButton = document.createElement("button");

      /**
       * Configuramos el div
       * <div class="card">
       */
      $cardDiv.classList.add("card");

      /**
       * Configuramos el img
       * <img src="/assets/imgs/..." class="card-img-top"/>
       */
      $modalImg.src = `/assets/imgs/${animal.img}`;
      $modalImg.classList.add("card-img-top");

      /**
       * Configuramos el button
       * <button class="btn btn-secondary">
       *    <img src="/assets/imgs/audio.svg" width="35" height="35">
       * </button>
       */
      $soundButton.classList.add("btn");
      $soundButton.classList.add("btn-secondary");
      $soundButton.innerHTML = `
        <img src="/assets/imgs/audio.svg" width="35" height="35">
      `;

      /**
       * Ya tenemos el <img> pero ahora debemos escuchar cada vez que le hagan click
       *
       * Cuando le hacemos click, levantamos el modal con jQuery
       */
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

      /**
       * Ya tenemos el "<button>" asi que ahora debemos escuchar cada vez que le hagamos click
       *
       * Cuando le hacemos click, reproducimos el sonido
       */
      $soundButton.addEventListener("click", () => {
        $audioPlayer.setAttribute("src", `/assets/sounds/${animal.sonido}`);
        $audioPlayer.load();
        $audioPlayer.play();
      });

      /**
       * Tomamos el DIV y le agregamos el IMG
       */
      $cardDiv.appendChild($modalImg);
      /**
       * Tomamos el DIV y le agregamos el BUTTON
       */
      $cardDiv.appendChild($soundButton);

      /**
       * Tomamos el DIV de la zona de animales y
       * le agregamos el DIV que contiene la tarjeta
       * del nuevo animal que acabamos de crear
       */
      $zonaAnimales.appendChild($cardDiv);
    });
  }
}

iniciarPrograma();

class Multimedia {
  constructor(url) {
    this._url = url;
  }

  get url() {
    return this._url;
  }

  setInicio() {
    console.log("Este método es para realizar un cambio en la URL del video");
  }
}

class Reproductor extends Multimedia {
  constructor(url, id) {
    super(url);
    this.id = id;
  }

  setInicio(time) {
    super._url += `?start=${time}`;
  }

  playMultimedia() {
    const iframe = document.querySelector(this.id);
    iframe.setAttribute("src", this.url);
  }
}

////////////////////////////////////////////////////////////////

// const iframeMusica = document.querySelector("#musica");
// const iframePelicula = document.querySelector("#pelicula");
// const iframeSerie = document.querySelector("#serie");

const Musica = new Reproductor(
  "https://www.youtube.com/embed/bEQtkLNTmRs",
  "#musica"
);

const Pelicula = new Reproductor(
  "https://www.youtube.com/embed/kVrqfYjkTdQ",
  "#pelicula"
);

const Serie = new Reproductor(
  "https://www.youtube.com/embed/MfvvhM6IJS0",
  "#serie"
);

Musica.setInicio(60);

Pelicula.setInicio(1);

const collapseOneElement = document.querySelector("#headingOne");
collapseOneElement.addEventListener("click", function () {
  Musica.playMultimedia();
});

const collapseTwoElement = document.querySelector("#headingTwo");
collapseTwoElement.addEventListener("click", function () {
  Pelicula.playMultimedia();
});

const collapseThreeElement = document.querySelector("#headingThree");
collapseThreeElement.addEventListener("click", function () {
  Serie.playMultimedia();
});

// Musica.playMultimedia()

/**
 * musica: https://www.youtube.com/embed/bEQtkLNTmRs
 * pelicula: https://www.youtube.com/embed/kVrqfYjkTdQ
 * serie: https://www.youtube.com/embed/MfvvhM6IJS0
 */

class Multimedia {
  #url;
  constructor(url) {
    this.#url = url;
  }

  get url() {
    return this.#url;
  }

  set url(nuevaUrl) {
    this.#url = nuevaUrl;
  }

  setInicio() {}
}

class Reproductor extends Multimedia {
  constructor(id) {
    super(`https://www.youtube.com/embed/${id}`);
    this.id = id;
  }

  playMultimedia(id) {
    $(`#${id}`).attr("src", this.url)
  }

  setInicio(inicio) {}
}

//-------------------------------------

$(document).ready(() => {
  const $collapseMusica = $("#collapseOneButton");
  const $collapsePelicula = $("#collapseTwoButton");
  const $collapseSerie = $("#collapseThreeButton");

  $collapseMusica.click(() => {
    const reproductor = new Reproductor("Ff0bI0hmpc8");
    reproductor.setInicio(60)
    reproductor.playMultimedia("musica")
  })

  $collapsePelicula.click(() => {
    const reproductor = new Reproductor("Ff0bI0hmpc8");
    reproductor.playMultimedia("pelicula")
  })

  $collapseSerie.click(() => {
    const reproductor = new Reproductor("Ff0bI0hmpc8");
    reproductor.playMultimedia("serie")
  })
});

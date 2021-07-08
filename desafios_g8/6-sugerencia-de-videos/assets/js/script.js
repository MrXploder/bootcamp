"use strict";

const publicFunction = function (url, id) {
  console.log(url, id);
  const setVideoData = (videoUrl, videoId) => {
    const element = document.getElementById(videoId);
    if (element) {
      element.setAttribute("src", videoUrl);
    } else {
      console.warn("el elemento no existe en el DOM");
    }

    // const musicaIframe = document.getElementById("musica");
    // const peliculasIframe = document.getElementById("peliculas");
    // const seriesIframe = document.getElementById("series");

    // if (videoId === "musica") {
    //   musicaIframe.setAttribute("src", videoUrl);
    // } else if (videoId === "peliculas") {
    //   peliculasIframe.setAttribute("src", videoUrl);
    // } else if (video === "series") {
    //   seriesIframe.setAttribute("src", videoUrl);
    // }
  };

  return setVideoData(url, id);
};

//////////////////////////////////////////////////////////

/** si bien esto no esta mal, es una mala practica, por la cantidad de redundancia que genera */
// class Multimedia {
//   constructor(url) {
//     let _url = url;
//     this.getUrl = () => _url;
//   }
//   get url() {
//     return this.getUrl();
//   }
// }

/**
 * Clase Multimedia que crea nuevo objetos Multimedia
 */
class Multimedia {
  /**
   *
   * @param {*} url
   */
  constructor(url) {
    this.#url = url;
  }

  /**
   *
   * @returns {String}
   */
  getUrl() {
    return this.#url;
  }

  /**
   *
   */
  setUrl(value) {
    this.#url = value;
  }

  // get url() {
  //   return this.#url;
  // }

  /**
   *
   * @returns
   */
  setInicio() {
    return "Este método es para realizar un cambio en la URL del video";
  }
}

/**
 *
 */
class Reproductor extends Multimedia {
  /**
   *
   * @param {*} url
   * @param {*} id
   */
  constructor(url, id) {
    super(url);

    this.#id = id;
  }

  /**
   *
   */
  playMultimedia() {
    console.log(this.getUrl(), this.#id);
    publicFunction(this.getUrl(), this.#id);
  }

  /**
   * @description A travez de polimorfismo modificamos la funcion setInicio de la superfclase Multimedia
   * @param {*} tiempo
   */
  setInicio(tiempo) {
    this.setUrl(`${this.getUrl()}?start=${tiempo}`);
  }
}

///////////////////////////////////////////////

const Series = new Reproductor(
  "https://www.youtube.com/embed/ItkJaMwAbuc",
  "series"
);

const Musica = new Reproductor(
  "https://www.youtube.com/embed/KS3aPMf3fTw",
  "musica"
);

const Peliculas = new Reproductor(
  "https://www.youtube.com/embed/xihZVb7uupc",
  "peliculas"
);

Series.setInicio(3);

Series.playMultimedia();
Musica.playMultimedia();
Peliculas.playMultimedia();

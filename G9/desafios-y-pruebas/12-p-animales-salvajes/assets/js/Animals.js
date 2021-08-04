"use strict";

import { Animal } from "./Animal.js";

export class Leon extends Animal {
  Rugir() {
    console.log("Roooar!");
  }
}

export class Lobo extends Animal {
  Aullar() {
    console.log("Auuuu!");
  }
}

export class Oso extends Animal {
  Gruñir() {
    console.log("Grrrrr!");
  }
}

export class Serpiente extends Animal {
  constructor(...args) {
    super(...args);
  }

  Sisear() {
    console.log("Zzzzz!");
  }
}

export class Aguila extends Animal {
  Chillar() {
    console.log("Iiiiii!");
  }
}

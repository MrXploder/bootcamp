"use strict";

import { Animal } from "./Animal.js";

export class Leon extends Animal {
  Rugir() {
    this.playerPlay();
  }
}

export class Lobo extends Animal {
  Aullar() {
    this.playerPlay();
  }
}

export class Oso extends Animal {
  Gruñir() {
    this.playerPlay();
  }
}

export class Serpiente extends Animal {
  Sisear() {
    this.playerPlay();
  }
}

export class Aguila extends Animal {
  Chillar() {
    this.playerPlay();
  }
}

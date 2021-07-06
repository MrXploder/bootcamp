/**
 *
 */
class Human {
  constructor() {}

  /**
   *
   * @param {*} dog
   * @description Si bien podemos "asumir" que el argumento "dog" es una instancia de la clase Dog
   * en la vida real eso no es correcto. Por lo que debemos poner en practica el concepto de "type assetion",
   * que es basicamente, asegurarnos de manera empirica de que "dog" es una instancia de la clase "Dog"
   */
  hug(dog) {
    if (dog instanceof Dog) {
      const dogName = dog.name;
      console.log(`has abrazado al perrito con nombre ${dogName}`);
    } else {
      console.error("lo que me pasaste no es un perro");
    }
  }
}

/**
 *
 */
class Dog {
  constructor(name) {
    this.name = name;
  }
}

const Luis = new Human();
const Sergio = new Human();
const Canela = new Dog("Canela");

/**
 * Caso de exito
 */
Luis.hug(Canela);

/**
 * Caso de error
 */
Luis.hug(null);

/**
 * Herencia es la capacidad de las clases de poder heredar de una clase padre o "superclase" atributos, metodos y accessors
 */

class Person {
  constructor(name, lastName, age, gender) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
  }

  sayHello() {
    console.log(`Hi!, my name is ${this.name} ${this.lastName}`);
  }
}

class Female extends Person {
  constructor(name, lastName, age) {
    super(name, lastName, age, "female");
  }

  walk() {
    console.log(`Look! I'm walking xd`);
  }
}

const Mary = new Female("Mary", "Jane", 30);
Mary.sayHello();
Mary.walk();

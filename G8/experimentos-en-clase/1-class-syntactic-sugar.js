/**
 * Las Clases se usan como base para crear nuevos objetos o "instancias"
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

const JhonDoe = new Person("Jhon", "Doe", 30, "unknown");
JhonDoe.sayHello();

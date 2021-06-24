(function () {
  function Person(name, lastName, age, gender) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
  }

  Person.prototype.sayHello = function () {
    console.log(`Hi! my name is ${this.name} ${this.lastName}`);
  };

  const JhonDoe = new Person("Jhon", "Doe", 30, "unknown");
  JhonDoe.sayHello();
})();

function randomId() {
  return Math.random()
}

class Perro {
  // La primera funcion que se invoca cuando creamos un objeto nuevo
  constructor(nombre, apellido, edad, raza) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.raza = raza;
    this.nombreCompleto = nombre + " " + apellido;
    this.id = randomId();
  }

  ladrar() {
    console.log(`Guau guau, mi nombre es ${this.nombre}`)
  }

  randomId() {
    return Math.random()
  }

  caminar() {
    
  }
}

class Gato {
  // La primera funcion que se invoca cuando creamos un objeto nuevo
  constructor(nombre, apellido, edad, raza) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.raza = raza;
    this.nombreCompleto = nombre + " " + apellido;
    this.id = randomId();
  }

  maullar() {
    console.log(`Guau guau, mi nombre es ${this.nombre}`)
  }

  randomId() {
    return Math.random()
  }

  caminar() {
    
  }
}

// Intance new Objects
const Canela = new Perro("Canela", "Arancibia", 5, "Quiltro");
const Lulu = new Perro("Lulu", "Guzman", 10, "Quiltro")

const Alejandro = new Gato("Alejandro", "Arancibia", 10, "Quiltro")

Canela.ladrar()
Lulu.ladrar()

// Literal Object
const Canela2 = {
  raza: "Killtro",
  edad: 5,
  nombre: "Canela",
  apellido: "Arancibia",
  id: 123456789,
  ladrar() {
    console.log("guau guau")
  }
};

const Lulu2 = {
  raza: "Killtro",
  edad: 10,
  nombre: "Lulu",
  apellido: "Nose",
  id: 987654321,
  ladrar() {
    console.log("guau guau")
  }
};

function identificaPerro(perro) {
  if (perro.id !== undefined) {
    console.log("El perro esta en regla");
  } else {
    console.error("Este perro es un bandolero");
  }
}

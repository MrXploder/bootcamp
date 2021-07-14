"use strict";

const nombre1 = "Luis";
const nombre2 = "Maribel";
const nombre3 = "Victoria";
const nombre4 = "Jaime";
const nombre5 = "Sebastian";

const nombres = ["Luis", "Maribel", "Victoria", "Jaime", "Sebastian"];
const edades = [29, 20, 20, 20, 25];
const algo = [true, false, true, false, false];

console.log(nombre1, nombre2, nombre3, nombre4, nombre5);

for (let i = 0; i < nombres.length; i++) {
  console.log(nombres[i]);
}

const nombre = "";
const apellido = "";
const edad = 0;

// () [] {}

const persona = {
  nombre: "",
  apellido: "",
  edad: 0,
};

/**
 * dot-notation
 */
persona.apellido;
persona.nombre;
persona.edad;

/**
 * corchetes
 */
persona["edad-de-la-persona"];
persona["apellido"];
persona["edad"];

const key = "apellido";
persona[key]; //

/////////////////////////////////////////////////

const personas = [
  { nombre: "Luis", apellido: "Arancibia" },
  { nombre: "Maribel", apellido: "Sainz" },
  { nombre: "Luca", apellido: "Biotti" },
];

personas[2].nombre; // "Luca"
personas[0].apellido; // "Arancibia"

for (let i = 0; i < personas.length; i++) {
  console.log(
    `El nombre completo es ${personas[i].nombre} ${personas[i].apellido}`
  );
}

for (const persona of personas) {
  console.log(`El nombre completo es ${persona.nombre} ${persona.apellido}`);
}

for (const i in personas) {
  console.log(
    `El nombre completo es ${personas[i].nombre} ${personas[i].apellido}`
  );
}

const personita = { nombre: "Luis", apellido: "Arancibia" };

/** pseudo-array */
const personajes = {
  0: { nombre: "Luis", apellido: "Arancibia" },
  1: { nombre: "Maribel", apellido: "Sainz" },
  2: { nombre: "Luca", apellido: "Biotti" },
};

for (const i in personajes) {
  console.log(i);
}

///////////////////////////////////////////////////////////////////////////

const mascotas = [
  { nombre: "Canela", dueño: "Luis", tipo: "Perro" },
  { nombre: "Benito", dueño: "Luca", tipo: "Gato" },
  { nombre: "Juanita", dueño: "Franco", tipo: "Iguana" },
  { nombre: "Pomelo", dueño: "Pablo", tipo: "Conejo" },
];

mascotas.push({ nombre: "Yayita", dueño: "Luis", tipo: "Perro" });

mascotas.forEach((mascota) => {
  console.log(JSON.stringify(mascota));
});

/////////////////////////////////////////////////////////////////////////

/**
 * Cosas avanzadas que rara vez se usan
 */

/**
 * SET
 */
const Gatitos = new Set(["Periquito", "Pastel", "Corticoides", "Periquito"]);
Gatitos.add("Periquito");

console.log(Gatitos);

const GatitosComoArray = Array.from(Gatitos);

///////////////////////////////////////////////////////////////////////////

/**
 * MAP
 */

const Periquitos = {};

Periquitos.nombre = "Luis";

const Conejitos = new Map();
Conejitos.set(Periquitos, "Luis");

console.log(Conejitos.get(Periquitos));

//////////////////////////////////////////////////////////////

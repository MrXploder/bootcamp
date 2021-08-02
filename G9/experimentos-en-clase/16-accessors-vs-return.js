const persona = {
  nombre: "Franco",
  apellido: "Briano",
};

let perrito = "Canela";

function cambiarPerrito(perrito) {
  perrito = "Guardian";
}
cambiarPerrito(perrito);
console.log({ perrito, type: typeof perrito });

function superheroe(persona) {
  return { ...persona, is_superheroe: true };
}

const nuevoFranco = superheroe(persona);

console.log({ persona, nuevoFranco });

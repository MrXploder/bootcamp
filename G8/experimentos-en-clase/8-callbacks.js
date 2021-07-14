// function log() {
//   console.log("hola mundo")
// }

// const logger = () => {
//   const name = "Luis"
//   console.log("hola mundo");

// };

// console.log(typeof logger, typeof name);

// setTimeout(logger, 3000);

const logger = (mensaje) => {
  console.log(mensaje);
};

// setTimeout(logger("hola mundo"), 3000)
// setTimeout(logger("algo"), 3001)

setTimeout(() => {
  logger("hola mundo");
  return setTimeout(() => {
    logger("hola luis");
    return setTimeout(() => {
      logger("hola angeles");
    }, 1000);
  }, 1000);
}, 3000);

//////////////////////////////////////////////

const personas = [{ name: "Luis" }, { name: "Betsi" }];
const onlyName = (persona) => persona.name;

personas.map(onlyName); // ["Luis", "Betsi"]

function MiMap(callback) {
  let result = [];
  for (let i = 0; i < personas.length; i++) {
    result.push(callback(personas[i]));
  }
}

MiMap(onlyName);

//////////////////////////////////////////////

const colorPelo = "negro";
const altura = 165;
const esMayor = true;

const persona = {
  colorPelo: "negro",
  altura: 165,
  esMayor: true
}

// dot-notation
persona.colorPelo;

//
persona["colorPelo"];

////////////////////////////////////

const persona1;
const persona2;
const persona3;

const persona4;

console.log(persona1, persona2, persona3)

/////////////////////

const personas = [
  //personas[0]
  {
    colorPelo: "negro",
    altura: 165,
    esMayor: true
  },
  //personas[1]
  {
    colorPelo: "blanco",
    altura: 100,
    esMayor: false
  },
  //personas[2]
  {
    colorPelo: "morao",
    altura: 200,
    esMayor: true
  }
]

const edades = [19, 20, 30];
const nombres = ["Luis", "Carolina", "Pedrito"]
const raro = [19, "pedrito", {saluda: "hola mundo"}]


///////////////////////

// export default {
//   nombre: "Luis",
//   apellido: "Arancibia"
// }

// export default {
//   data: () => ({
//     nombre: "Luis"
//   }),
//   methods: {
//     sayHi() {
//       console.log("hola")
//     }
//   }
// }


// const config = {
//   data: function () {
//     return {
//       nombre: "Luis"
//     }
//   }
// }
// export default config;
const baseURL = "https://jsonplaceholder.typicode.com";

function findAll() {
  return fetch(`${baseURL}/photos`).then((response) => response.json());
}

function findOneById(id) {
  return fetch(`${baseURL}/photos/${id}`).then((response) => response.json());
}

function esperar() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, 3000)
  })
}

// findAll().then((fotos) => {
//   console.log(fotos.slice(0, 20))
// });

// findOneById(1).then((foto) => {
//   console.log(foto);
// });

// console.log("antes de las fotos?");




esperar()
  .then(() => {
    console.log("Información enviada")

})
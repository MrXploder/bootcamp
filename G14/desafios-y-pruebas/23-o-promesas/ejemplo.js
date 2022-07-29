const $boton = document.getElementById("boton");
const $otroBoton = document.getElementById("otro-boton");

const $foto = document.getElementById("foto");

const baseURL = "https://mipaginaweb.com/api/photos"

function findPhotoById(id) {
  return fetch(`${baseURL}/${id}`).then((response) =>
    response.json()
  );
}

$boton.addEventListener("click", () => {
  findPhotoById(1).then((foto) => {
    $foto.innerHTML(foto);
  });
});

$otroBoton.addEventListener("click", () => {
  findPhotoById(2).then((foto) => {
    $foto.innerHTML(foto);
  });
});

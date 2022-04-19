const $formulario = document.querySelector("#formulario");
const $nombrePokemon = document.querySelector("#nombre");
const $datosPokemon = document.querySelector("#datos-pokemon");
const baseURL = "https://pokeapi.co/api/v2/pokemon";

$formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  const nombrePokemon = $nombrePokemon.value;

  fetch(`${baseURL}/${nombrePokemon}`)
    .then((response) => response.json())
    .then((data) => {
      console.log({ data });
    })
    .catch((error) => {
      console.error(error);
    });

  console.log("pasa antes o despeus del fetch?");
});

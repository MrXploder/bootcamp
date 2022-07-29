const $formulario = document.querySelector("#formulario");
const $nombrePokemon = document.querySelector("#nombre");
const $datosPokemon = document.querySelector("#datos-pokemon");
const baseURL = "https://pokeapi.co/api/v2/pokemon";

$formulario.addEventListener("submit", async function (event) {
  event.preventDefault();

  const nombrePokemon = $nombrePokemon.value;

  try {
    const response = await fetch(`${baseURL}/${nombrePokemon}`);
    console.log(response)
    const data = await response.json();
  } catch (error) {
  } finally {
  }

  console.log({ data });
  console.log("pasa antes o despeus del fetch?");
});

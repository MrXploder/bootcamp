const $nombreUsuario = document.querySelector("#nombre");
const $paginaActual = document.querySelector("#pagina");
const $reposPorPagina = document.querySelector("#repoPagina");

const $botonEnviar = document.querySelector("#enviar");
const $resultados = document.querySelector("#resultados");

$botonEnviar.addEventListener("click", async () => {
  /// leer los inputs
  const nombreUsuario = $nombreUsuario.value;
  const paginaActual = $paginaActual.value;
  const reposPorPagina = $reposPorPagina.value;

  const url = `https://api.github.com/users/${nombreUsuario}/repos?page=${paginaActual}&per_page=${reposPorPagina}`;

  console.log(url);

  // llamar al coso de internet
  const response = await fetch(url);
  const datos = await response.json();

  console.log(datos);

  // con el coso de internet ponerlo en la vista
  $resultados.innerHTML = `
    <pre>${JSON.stringify(datos, null, 2)}</pre>
  `;
});

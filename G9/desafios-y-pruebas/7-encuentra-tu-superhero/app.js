const formularioElement = $("#formulario");
const inputElement = $("#superhero-input");
const requestSection = document.getElementById("request-section");

console.log(formularioElement);

function renderSuperheroCard(superhero) {
  const imagen = document.getElementById("imagen");
  const nombre = document.querySelector("#nombre");

  const publicadopor = $("#publicadopor");
  const ocupacion = $("#ocupacion");
  const aparicion = $("#aparicion");
  const altura = $("#altura");
  const peso = $("#peso");
  const alianzas = $("#alianzas");

  imagen.setAttribute("src", superhero.image.url);
  nombre.innerHTML = `Nombre: ${superhero.name}`;

  publicadopor.html(superhero.biography.publisher);
  ocupacion.html(superhero.work.occupation);
  aparicion.html(superhero.biography["first-appearance"]);
  altura.html(
    `${superhero.appearance.height[0]} - ${superhero.appearance.height[1]}`
  );
  peso.html(
    `${superhero.appearance.weight[0]} - ${superhero.appearance.weight[1]}`
  );
  alianzas.html(superhero.biography.aliases.join(" - "));
}

function renderSuperheroChart(superhero) {
  const options = {
    title: {
      text: "Grafico del Superheroe",
    },
    data: [
      {
        type: "pie",
        dataPoints: [
          {
            label: "Inteligencia",
            y: Number.parseInt(superhero.powerstats.intelligence),
          },
          {
            label: "Fuerza",
            y: Number.parseInt(superhero.powerstats.strength),
          },
          {
            label: "Velocidad",
            y: Number.parseInt(superhero.powerstats.speed),
          },
          {
            label: "Durabilidad",
            y: Number.parseInt(superhero.powerstats.durability),
          },
          {
            label: "Poder",
            y: Number.parseInt(superhero.powerstats.power),
          },
          {
            label: "Combate",
            y: Number.parseInt(superhero.powerstats.combat),
          },
        ],
      },
    ],
  };
  $("#chartContainer").CanvasJSChart(options);
}

formularioElement.submit(function (event) {
  event.preventDefault();

  const idDelSuperHeroe = inputElement.val();

  $.ajax({
    type: "GET",
    dataType: "json",
    url: `https://www.superheroapi.com/api.php/10226095432389769/${idDelSuperHeroe}`,
  }).done(function (data) {
    renderSuperheroCard(data);
    renderSuperheroChart(data);
  });
});

///////////////////////

// const persona = {
//   nombre: "Luis",
//   apellido: "Arancibia",
//   "$#%&/1seu-donimo": ""
// }

// persona["$#%&/1seu-donimo"];

// persona.nombre
// persona["nombre"]

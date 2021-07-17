function getSuperheroById(id) {
  $.ajax({
    type: "GET",
    url: `https://www.superheroapi.com/api.php/10226095432389769/${id}`,
    dataType: "json",
    async: true,
    success: (data) => {
      console.log(data);
    },
  });
}

function getSuperheroBiographyById(id) {
  $.ajax({
    type: "GET",
    url: `https://www.superheroapi.com/api.php/10226095432389769/${id}/biography`,
    dataType: "json",
    async: true,
    success: (data) => {
      console.log(data);
    },
  });
}

/**
 * @description - Trae desde la API de superheroes todos los superheroes
 */
function getAllSuperheroes() {
  $.ajax({
    type: "GET",
    url: "https://www.superheroapi.com/api.php/10226095432389769",
    dataType: "json",
    async: true,
    success: (data) => {
      console.log(data);
    },
  });
}

const SuperheroAPI = {
  getAllSuperheroes,
  getSuperheroById,
  getSuperheroBiographyById,
};

SuperheroAPI.getAllSuperheroes();
SuperheroAPI.getSuperheroById(1);
SuperheroAPI.getSuperheroById(50);

////////////////////////////////////////////////

// const nombre = "Luis";
// const Request = fetch(
//   "https://www.superheroapi.com/api.php/10226095432389769/1"
// )
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// axios
//   .get("https://www.superheroapi.com/api.php/10226095432389769/1")
//   .then((response) => console.log(response.data));

// $(document).ready(function () {
//   const options = {
//     title: {
//       text: "Gráfico de columnas con jQuery CanvasJS",
//     },
//     axisX: {
//       title: "Frutas Tropicales",
//       titleFontSize: 12,
//     },
//     axisY: {
//       title: "Consumo Kg/persona/año",
//       titleFontSize: 12,
//     },
//     data: [
//       {
//         type: "column",
//         dataPoints: [
//           { label: "papaya", y: 23 },
//           { label: "naranja", y: 15 },
//           { label: "platano", y: 25 },
//           { label: "mango", y: 30 },
//           { label: "guayaba", y: 20 },
//         ],
//       },
//     ],
//   };
//   $("#chartContainer").CanvasJSChart(options);
// });

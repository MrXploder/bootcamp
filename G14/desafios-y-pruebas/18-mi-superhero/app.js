$(document).ready(() => {
  // este codigo se ejecutara solo cuando este el DOM listo para ser manipulado

  const BotonBuscar = $("#buscar");
  const InputIdSuperHeroe = $("#superheroid");
  const SeccionSuperHeroe = $("#superhero-data");

  //////////

  const SuperheroImg = $("#superhero-details img");
  const SuperheroName = $("#superhero-name");
  const SuperheroOccupation = $("#superhero-occupation");

  const SuperheroStatsSection = $("#superhero-stats");

  // SuperheroImg.css("height", "200px")

  BotonBuscar.click(() => {
    const IdSuperHeroe = InputIdSuperHeroe.val();
    console.log(IdSuperHeroe);

    // $.ajax(
    //   `https://www.superheroapi.com/api.php/4905856019427443/${IdSuperHeroe}`
    // ).done((superhero) => {
    //   SuperheroImg.attr("src", superhero.image.url);
    //   SuperheroName.html(`
    //     Nombre: ${superhero.name}
    //   `);
    //   SuperheroOccupation.html(`
    //     Ocupación: ${superhero.connections["group-affiliation"]}
    //   `);
    // });

    fetch(
      `https://www.superheroapi.com/api.php/4905856019427443/${IdSuperHeroe}`
    )
      .then((response) => response.json())
      .then((superhero) => {
        console.log(superhero)
        /**
         * Tabla
         */
        SuperheroImg.attr("src", superhero.image.url);
        SuperheroName.html(`Nombre: ${superhero.name}`);
        SuperheroOccupation.html(
          `Ocupación: ${superhero.connections["group-affiliation"]}`
        );

        /**
         * Grafico
         */
        const dataPoints = Object
          .entries(superhero.powerstats)
          .map((stats) => {
            return { y: Number.parseInt(stats[1]), label: `${stats[0].charAt(0).toUpperCase() + stats[0].slice(1)} (${stats[1]})`}
          })
        
        console.log(dataPoints)

        const options = {
          title: {
            text: "Superhero estadisticas",
          },
          animationEnabled: true,
          data: [
            {
              type: "pie",
              startAngle: 40,
              toolTipContent: "<b>{label}</b>: {y}%",
              showInLegend: "true",
              legendText: "{label}",
              indexLabelFontSize: 16,
              indexLabel: "{label} - {y}%",
              dataPoints
            },
          ],
        };
        SuperheroStatsSection.CanvasJSChart(options);
      });
  });
});

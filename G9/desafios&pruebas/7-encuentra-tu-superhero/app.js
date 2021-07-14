const formularioElement = $("#formulario");
const inputElement = $("#superhero-input");
const requestSection = document.getElementById("request-section");

console.log(formularioElement);

formularioElement.submit(function (event) {
  event.preventDefault();

  const idDelSuperHeroe = inputElement.val();

  $.ajax({
    type: "GET",
    dataType: "json",
    url: `https://www.superheroapi.com/api.php/10226095432389769/${idDelSuperHeroe}`,
  }).done(function (data) {
    console.log(data);
    requestSection.innerHTML = JSON.stringify(data);
  });
});

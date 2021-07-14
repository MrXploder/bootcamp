$(document).ready(function () {
  const div = $("div#comentarios");

  console.log(div[0]);
  // console.log(button[0]);

  const todosLosA = $("a").filter(".primero");
  console.log(todosLosA);

  const gt5 = $("td:gt(5)");

  const lastChild = $("td:last-child");

  lastChild.css("backgroundColor", "blue");

  // button.fadeOut();

  console.log(gt5);
  console.log({ lastChild });

  // const miElemento = document.getElementById("btn");
  // miElemento.addEventListener("click", function () {
  //   console.log("el evento click");
  // });

  const button = $(".btn");

  button.click(function () {
    console.log("el evento click");
  });
});

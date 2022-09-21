var nombre = prompt("Ingrese su nombre completo");
var textonota1html = prompt("Ingrese nota 1 del ramo HTML");
var textonota2html = prompt("Ingrese nota 2 del ramo HTML");
var textonota3html = prompt("Ingrese nota 3 del ramo HTML");
var textonota1css = prompt("Ingrese nota 1 del ramo CSS");
var textonota2css = prompt("Ingrese nota 2 del ramo CSS");
var textonota3css = prompt("Ingrese nota 3 del ramo CSS");
var textonota1js = prompt("Ingrese nota 1 del ramo JS");
var textonota2js = prompt("Ingrese nota 2 del ramo JS");
var textonota3js = prompt("Ingrese nota 3 del ramo JS");

var nota1html = parseInt(textonota1html);
var nota2html = parseInt(textonota2html);
var nota3html = parseInt(textonota3html);
var nota1css = parseInt(textonota1css);
var nota2css = parseInt(textonota2css);
var nota3css = parseInt(textonota3css);
var nota1js = parseInt(textonota1js);
var nota2js = parseInt(textonota2js);
var nota3js = parseInt(textonota3js);


var sumahtml = nota1html + nota2html + nota3html;
var promediohtml = sumahtml / 3;


var sumacss = nota1css + nota2css + nota3css;
var promediocss = sumacss / 3;

var sumajs = nota1js + nota2js + nota3js;
var promediojs = sumajs / 3;

document.write(
  `
    <h1>Notas finales</h1>
    <ol>
      <li>Nombre: ${nombre}</li>
      <li>Carrera: Diseño UX/UI</li>
    </ol>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Ramo</th>
          <th>Nota 1</th>
          <th>Nota 2</th>
          <th>Nota 3</th>
          <th>Promedio</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>HTML</td>
          <td>${nota1html}</td>
          <td>${nota2html}</td>
          <td>${nota3html}</td>
          <td>${promediohtml}</td>
        </tr>
        <tr>
          <td>CSS</td>
          <td>${nota1css}</td>
          <td>${nota2css}</td>
          <td>${nota3css}</td>
          <td>${promediocss}</td>
        </tr>
        <tr>
          <td>JS</td>
          <td>${nota1js}</td>
          <td>${nota2js}</td>
          <td>${nota3js}</td>
          <td>${promediojs}</td>
        </tr>
      </tbody>
    </table>
  `
)
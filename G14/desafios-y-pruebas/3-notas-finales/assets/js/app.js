var nombreCompleto = prompt("Escriba su nombre")
var nombreCarrera = prompt("Nombre carrera", "desarrollo web")

document.write(`
 <h1>Notas finales</h1>
  <p><strong>Nombre:</strong>  ${nombreCompleto}</p>
  <p><strong>Carrera:</strong> ${nombreCarrera}</p>

  <table class="table">
    <thead class="thead-dark">
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
        <td>4</td>
        <td>5</td>
        <td>4</td>
        <td>4.33</td>
      </tr>
      <tr>
        <td>CSS</td>
        <td>3</td>
        <td>4</td>
        <td>5</td>
        <td>4.00</td>
      </tr>
      <tr>
        <td>JS</td>
        <td>1</td>
        <td>2</td>
        <td>-</td>
        <td>-</td>
      </tr>
    </tbody>
  </table>
`);
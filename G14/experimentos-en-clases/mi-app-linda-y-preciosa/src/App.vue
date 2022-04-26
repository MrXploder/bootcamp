<template>
  <div>
    <h1>Desafio 1</h1>
    <table class="table">
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>RUN</th>
          <th>Nacimiento</th>
          <th>Edad</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>{{ usuario1.nombre }}</td>
          <td>{{ usuario1.apellido }}</td>
          <td>{{ usuario1.run }}</td>
          <td>{{ usuario1.nacimiento }}</td>
          <td>{{ usuario1.edad }}</td>
        </tr>
         <tr>
          <td>2</td>
          <td>{{ usuario2.nombre }}</td>
          <td>{{ usuario2.apellido }}</td>
          <td>{{ usuario2.run }}</td>
          <td>{{ usuario2.nacimiento }}</td>
          <td>{{ usuario2.edad }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    usuario1: {
      nombre: "Jose",
      apellido: "Perez",
      run: "12345678-9",
      nacimiento: "12-04-67",
      edad: 52
    },
    usuario2: {
      nombre: "Maria",
      apellido: "Rodriguez",
      run: "12345678-9",
      nacimiento: "30-11-90",
      edad: 29
    }
  }),
};
</script>

<style></style>

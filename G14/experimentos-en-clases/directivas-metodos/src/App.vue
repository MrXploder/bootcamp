<template>
  <div>
    <h1>Uso de VFOR</h1>
    <h5>Listado de usuarios</h5>

    <ul>
      <li v-for="(usuario, $index) of usuarios" :key="$index">
        {{ $index + 1 }} -
        {{ usuario.nombre }}
      </li>
    </ul>

    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Condecorado</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(usuario, $index) of usuarios" :key="$index">
          <td>{{ $index + 1 }}</td>
          <td>{{ usuario.nombre }}</td>
          <td>{{ usuario.apellido }}</td>
          <td>
            <img
              v-if="usuario.distintivo"
              src="https://esquilo.io/png/thumb/eZ0Y5KraLkDzCGi-Gold-Medal-PNG-Transparent.png"
              width="30"
              height="30"
            />
            <p v-if="!usuario.distintivo">Intentelo nuevamente</p>
          </td>
        </tr>
      </tbody>
    </table>

    <hr />

    <h1>Uso de metodos y VMODEL</h1>

    <ul>
      <li>Nombre nuevo usuario: {{ nuevoUsuario.nombre }}</li>
      <li>Apellido nuevo usuario: {{ nuevoUsuario.apellido }}</li>
    </ul>

    <div>
      <input
        v-model="nuevoUsuario.nombre"
        type="text"
        placeholder="Escriba su nombre"
      />
      <input
        v-model="nuevoUsuario.apellido"
        type="text"
        placeholder="Escriba su apellido"
      />
      <button @click="guardarNuevoUsuario()">Guardar</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    usuarios: [
      { nombre: "Luis", apellido: "Arancibia", distintivo: false },
      { nombre: "Joaquin", apellido: "Cruzat", distintivo: true },
      { nombre: "Cristina", apellido: "Guzman", distintivo: false },
      { nombre: "Ana", apellido: "Navarro", distintivo: true },
    ],
    nuevoUsuario: {
      nombre: "",
      apellido: "",
    },
  }),
  methods: {
    guardarNuevoUsuario() {
      this.usuarios.push({
        nombre: this.nuevoUsuario.nombre,
        apellido: this.nuevoUsuario.apellido,
      });

      this.nuevoUsuario = {
        nombre: "",
        apellido: "",
      };
    },
  },
};
</script>

<style></style>

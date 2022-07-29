<template>
  <table class="table">
    <thead>
      <tr>
        <th>Nombre<br />Completo</th>
        <th>Edad</th>
        <th>Correo<br />Electronico</th>
        <th>Pasaporte</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in usersList" :key="user.passport">
        <td>{{ user.fullName }}</td>
        <td>{{ user.age }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.passport }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  data: () => ({
    users: [],
  }),
  methods: {},
  computed: {
    usersList() {
      return this.users.map((user) => ({
        ...user,
        fullName: `${user.name} ${user.surname}`,
      }));
    },
  },
  created() {
    fetch("https://api.generadordni.es/v2/profiles/person")
      .then((response) => response.json())
      .then((users) => {
        this.users = users;
      });
  },
};
</script>

<style></style>

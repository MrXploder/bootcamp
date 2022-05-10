<template>
  <div>
    <h1>Usuarios</h1>
    <UsersTable />
  </div>
</template>

<script>
import UsersTable from "./components/UsersTable.vue";
export default {
  name: "App",
  components: { UsersTable },
};
</script>

<style></style>

<template>
<div>

  <h1>Home</h1>
  <p v-if="user">
    Sesion activa: {{ user.email }}
  </p>
</div>
</template>

<script>
import { mapState } from "vuex"
export default {
  name: 'Home',
  computed: {
    ...mapState("session", ["user"])
  }
};
</script>

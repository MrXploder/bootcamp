<template>
  <div>
    <input :type="type" />
    <button @click="cambiar()">Cambiar</button>
  </div>
</template>

<script>
export default {
  data: () => ({
    type: "password",
  }),
  methods: {
    cambiar() {
      if (this.type === "text") {
        this.type = "password";
      } else {
        this.type = "text";
      }
    },
  },
};
</script>

<style></style>

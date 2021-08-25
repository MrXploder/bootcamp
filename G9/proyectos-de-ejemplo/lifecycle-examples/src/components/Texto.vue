<template>
  <div ref="texto">{{ algo }}</div>
</template>

<script>
function listener() {
  console.log("click algo no importa");
}
export default {
  methods: {
    log() {
      console.log("hola soy el hijo");
    },
  },
  data: () => ({
    algo: "algo",
  }),
  beforeCreate() {
    console.log({
      name: "beforecreated",
      ref: this.$refs.texto,
      data: this.algo,
    });
  },
  created() {
    console.log({ name: "created", ref: this.$refs.texto, data: this.algo });
  },
  mounted() {
    console.log({ name: "mounted", ref: this.$refs.texto, data: this.algo });
    this.$refs.texto.addEventListener("click", listener);
  },
  beforeDestroy() {
    this.$refs.texto.removeEventListener(listener);
    console.log("componente algo beforedestroy");
  },
  destroyed() {
    console.log("componente algo destroyed");
  },
};
</script>

<style></style>

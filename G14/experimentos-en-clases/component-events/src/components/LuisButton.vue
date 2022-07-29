<template>
  <div class="container" @click="emitirEvento">
    <p :style="{ color }">LB</p>
  </div>
</template>

<script>
export default {
  props: {
    color: { type: String, default: "green" },
  },
  methods: {
    emitirEvento() {
      setTimeout(() => {
        this.$emit("success", null);
      }, 2000);
    },
  },
};
</script>

<style>
.container {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 8px solid purple;
  background-color: brown;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.container:active {
  transform: scale(0.9);
}

.container p {
  text-align: center;
  margin: 0;
  font-size: 3rem;
}
</style>

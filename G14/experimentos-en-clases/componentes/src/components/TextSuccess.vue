<template>
  <div style="border: 1px solid black">
    <h1 class="text-success">{{ mensaje }}</h1>
  </div>
</template>

<script>
export default {
  // props: ["mensaje"]
  props: {
    mensaje: {type: String, required: false, default: "Te menti"}
  }
};
</script>

<style>
.text-success{
  color: #00Ff00;
}

</style>

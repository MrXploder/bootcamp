<template>
  <div>
    <h1>Hola</h1>

    <ul @click.capture="log" @click.self="logSelf">
      <li>
        <button @click="eventoClick">click me</button>
      </li>
    </ul>
    <button @click.stop="eventoClick" ref="button">Click me!</button>
    <form @submit="eventoSubmit($event)">
      <input type="text" />
      <button type="submit">Submit</button>
    </form>

    <input type="text" @keypress.enter="logKeypress" />

    <div style="display: flex">
      <input
        type="number"
        ref="digitOne"
        style="width: 40px"
        min="0"
        max="9"
        step="1"
        @keyup="$refs.digitTwo.focus()"
      />
      <input
        type="number"
        ref="digitTwo"
        style="width: 40px"
        min="0"
        max="9"
        step="1"
        @keyup="$refs.digitThree.focus()"
      />
      <input
        type="number"
        ref="digitThree"
        style="width: 40px"
        min="0"
        max="9"
        step="1"
        @keyup="$refs.digitFour.focus()"
      />
      <input
        type="number"
        ref="digitFour"
        style="width: 40px"
        min="0"
        max="9"
        step="1"
        @keyup="finish"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {
    this.$refs.button.addEventListener("click", (event) => {
      console.log("hola");
    });
    this.$refs.button.addEventListener("click", () => {
      console.log("mundo");
    });
  },
  methods: {
    finish(){
      alert("logeado!")
    },
    logKeypress(event) {
      console.log(event.key);
    },
    log() {
      console.log("capture mode");
    },
    logSelf() {
      console.log("self mode");
    },
    eventoClick() {
      alert("Hola");
    },
    eventoDbClick() {
      alert("Hola x 2");
    },
    eventoSubmit() {
      //enviar la data a inbox
      alert("submit");
    },
  },
};
</script>

<style></style>

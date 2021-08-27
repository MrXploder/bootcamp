<template>
  <div>
    <h1>Style binding</h1>
    <ul>
      <li
        v-for="(item, $index) in items"
        :key="$index"
        :style="{
          'text-decoration': item.listo === true ? 'line-through' : 'none',
          'background-color': item.prioridad === 'alta' ? 'red' : 'black',
          color: item.prioridad === 'baja' ? 'white' : 'black',
          'font-style': item.dificultad >= 3 ? 'italic' : 'normal',
        }"
        style="background-color: blue"
      >
        {{ item.texto }}
      </li>
    </ul>

    <h1>Class binding</h1>

    <ul>
      <li
        v-for="(item, $index) of items"
        :key="$index"
        :class="{
          'prioridad-alta': item.prioridad === 'alta',
          'prioridad-baja': item.prioridad === 'baja',
          'dificultad-alta': item.dificultad >= 3,
        }"
      >
        {{ item.texto }}
      </li>
    </ul>

    <h1>Scoped style example</h1>

    <Hijo />
    <Hija />

    <div class="infante">Hola soy un bebe</div>
  </div>
</template>

<script>
import Hija from "./components/Hija.vue";
import Hijo from "./components/Hijo.vue";

export default {
  name: "App",
  components: {
    Hija,
    Hijo,
  },
  data: () => ({
    items: [
      {
        texto: "Pagar el netflix",
        listo: false,
        prioridad: "alta",
        dificultad: 1,
      },
      { texto: "Ir al super", listo: false, prioridad: "baja", dificultad: 5 },
      { texto: "Almorzar", listo: false, prioridad: "alta", dificultad: 3 },
    ],
  }),
  methods: {
    getItemStyles(item) {
      return {
        "text-decoration": item.listo === true ? "line-through" : "none",
        "background-color": item.prioridad === "alta" ? "red" : "black",
        color: item.prioridad === "baja" ? "white" : "black",
        "font-style": item.dificultad >= 3 ? "italic" : "normal",
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.prioridad {
  &-alta {
    background-color: red;
  }

  &-baja {
    background-color: black;
    color: white;
  }
}

.dificultad {
  &-alta {
    font-style: italic;
  }
}
</style>

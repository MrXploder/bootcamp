<template>
  <main>
    <h1>Class and Style binding</h1>
    <input type="text" v-model="nuevaTarea" />
    <select v-model="prioridad">
      <option value="baja">Baja</option>
      <option value="media" selected>Media</option>
      <option value="alta">Alta</option>
    </select>
    <button @click="agregarTarea">agregar tarea</button>

    <h4>Con style</h4>
    <ol>
      <li
        v-for="(tarea, $index) in tareas"
        :key="$index"
        :style="{
          backgroundColor:
            tarea.prioridad === 'alta'
              ? 'red'
              : tarea.prioridad === 'media'
              ? 'yellow'
              : 'green',
        }"
      >
        {{ tarea.text }} - prioridad: {{ tarea.prioridad }}
      </li>
    </ol>

    <h4>Con class</h4>
    <ol>
      <li
        v-for="(tarea, $index) in tareas"
        class="text-center"
        :key="$index"
        :class="{
          'bg-high': tarea.prioridad === 'alta',
          'bg-middle': tarea.prioridad === 'media',
          'bg-low': tarea.prioridad === 'baja',
        }"
      >
        {{ tarea.text }} - prioridad: {{ tarea.prioridad }}
      </li>
    </ol>

    <h4>Con componente</h4>
    <TodoOl :value="tareas" />
  </main>
</template>

<script>
import TodoOl from "@/components/TodoOl.vue";
export default {
  components: {
    TodoOl,
  },
  name: "App",
  data: () => ({
    nuevaTarea: "",
    prioridad: "media",
    tareas: [],
  }),
  methods: {
    agregarTarea() {
      this.tareas.push({
        text: this.nuevaTarea,
        prioridad: this.prioridad,
      });

      this.nuevaTarea = "";
      this.prioridad = "media";
    },
  },
};
</script>

<style scoped lang="scss">
ol {
  padding: 13px;
}

.bg {
  &-low {
    background-color: green;
  }

  &-middle {
    background-color: yellow;
  }

  &-high {
    background-color: red;
  }
}
</style>

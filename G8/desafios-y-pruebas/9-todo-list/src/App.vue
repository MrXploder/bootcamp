<template>
  <div>
    <Titulo />
    <label>Tarea </label>
    <input type="text" placeholder="Ingrese nueva tarea" v-model="nuevaTarea" />
    <button @click="agregarTarea()">Crear</button>

    <h2>Lista</h2>

    <ul>
      <li v-for="(tarea, $index) in tareas" :key="$index">
        <div v-if="!tarea.modificable">{{ $index }}: {{ tarea.texto }}</div>
        <input v-if="tarea.modificable" type="text" v-model="tarea.texto" />
        <button @click="modificar(tarea)">M</button>
      </li>
    </ul>
  </div>
</template>

<script>
import Titulo from '@/components/Titulo.vue'

export default {
  name: 'App',
  components: {
    Titulo,
  },
  data: () => ({
    nuevaTarea: '',
    tareas: [],
  }),
  methods: {
    agregarTarea() {
      this.tareas.push({ texto: this.nuevaTarea, modificable: false })
      this.nuevaTarea = ''
    },
    modificar(tarea) {
      if (!tarea.modificable) {
        tarea.modificable = true
      } else {
        tarea.modificable = false
      }
    },
  },
}
</script>

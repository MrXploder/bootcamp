<template>
  <div>
    <div>Hola soy el Componente Padre</div>
    <ul>
      <li>mivariable: {{ mivariable }}</li>
      <li>miotravariable: {{ miotravariable }}</li>

      <li>{{ x }}</li>

      <button @click="saludar()">Saludar</button>

      <button @click="imprimirData()">Imprimir</button>

      <CInput />

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <ul>
        <li v-for="(elemento, indice) in lista" :key="indice">
          {{ elemento }}
        </li>
      </ul>

      <h1 v-if="nombre === 'Luis'">Profe</h1>
      <h1 v-if="nombre !== 'Luis'">Alumno</h1>

      <Hijo
        :nombre="nombreTercerHijo"
        @cambiar-nombre="nombreTercerHijo = 'Pedrito'"
      />

      <Hijo :nombre="nombreCuartoHijo" />
    </ul>
  </div>
</template>

<script>
import CInput from "@/components/CInput.vue";
import Hijo from "@/components/Hijo.vue";
//Object API
export default {
  components: {
    CInput,
    Hijo,
  },
  name: "Padre",
  // data: () => ({}),
  data: function() {
    return {
      nombre: "Luis",
      mivariable: "algo",
      miotravariable: "otro algo",
      x: 1,
      nombreTercerHijo: "Carolina",
      nombreCuartoHijo: "Romina",
      lista: ["pagar el netflix", "salir", "entrar"],
    };
  },
  methods: {
    saludar: function saludar() {
      console.log("hola mundo");
    },
    imprimirData() {
      console.log(this.mivariable, this.miotravariable);
    },
  },
};
</script>

<style></style>

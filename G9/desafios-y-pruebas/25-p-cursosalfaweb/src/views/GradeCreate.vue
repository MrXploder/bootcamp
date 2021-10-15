<template>
  <div>
    <h1>Crear curso</h1>

    <v-form @submit.prevent="guardarCambios" ref="formulario">
      <v-text-field
        :disabled="loading"
        v-model="grade.nombre"
        label="Nombre"
        :rules="[required]"
      ></v-text-field>
      <v-text-field
        :disabled="loading"
        v-model.number="grade.cupos"
        type="number"
        label="Cupos"
        :rules="[required]"
      ></v-text-field>
      <v-text-field
        :disabled="loading"
        v-model.number="grade.inscritos"
        type="number"
        label="Inscritos"
        :rules="[required]"
      ></v-text-field>
      <v-text-field
        :disabled="loading"
        v-model="grade.duracion"
        label="Duración"
        :rules="[required]"
      ></v-text-field>
      <v-text-field
        :disabled="loading"
        v-model.number="grade.costo"
        type="number"
        label="Costo"
        :rules="[required]"
      ></v-text-field>
      <v-switch
        :disabled="loading"
        v-model="grade.estado"
        label="Estado"
      ></v-switch>
      <v-text-field
        :disabled="loading"
        v-model="grade.imagen"
        label="Imagen"
        :rules="[required]"
      ></v-text-field>

      <v-btn type="submit" color="success" :loading="loading">Guardar</v-btn>
    </v-form>
  </div>
</template>

<script>
import Firebase from "firebase";

export default {
  data: () => ({
    loading: false,
    grade: {
      nombre: "",
      cupos: 0,
      inscritos: 0,
      duracion: "",
      costo: 0,
      estado: false,
      imagen: "",
    },
  }),
  methods: {
    guardarCambios() {
      if (this.$refs.formulario.validate()) {
        Firebase.firestore()
          .collection("cursos")
          .add(this.grade)
          .then(() => {
            this.loading = false;
            this.$router.push("/cursos");
          })
          .catch(() => {
            this.loading = false;
          });
      }
    },
    required(v) {
      return !!v || "Este campo es obligatorio";
    },
  },
};
</script>

<style></style>

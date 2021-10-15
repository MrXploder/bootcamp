<template>
  <v-data-table :items="$store.state.grades.data" :headers="headers">
    <template v-slot:[`item.costo`]="{ item }">
      <v-chip color="success">${{ item.costo.toLocaleString() }}</v-chip>
    </template>

    <template v-slot:[`item.estado`]="{ item }">
      <v-chip :color="item.estado ? 'info' : 'grey'">
        {{ item.estado ? "Si" : "No" }}
      </v-chip>
    </template>

    <template v-slot:[`item.fecha_creacion`]="{ item }">
      <v-chip color="success">
        {{ item.fecha_creacion ? item.fecha_creacion : "Sin información" }}
      </v-chip>
    </template>

    <template v-slot:[`item.actions`]="{ item }">
      <div>
        <v-btn icon @click="irALaVistaDeEditar(item)">
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
        <v-btn icon @click="mostrarAlertaDeBorrar(item)">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </div>
    </template>
  </v-data-table>
</template>

<script>
import Firebase from "firebase";

export default {
  data: () => ({
    headers: [
      { text: "Curso", value: "nombre" },
      { text: "Cupos", value: "cupos" },
      { text: "Inscritos", value: "inscritos" },
      { text: "Duración", value: "duracion" },
      { text: "Costo", value: "costo" },
      { text: "Terminado", value: "estado" },
      { text: "Fecha", value: "fecha_creacion" },
      { text: "Acciones", value: "actions" },
    ],
  }),
  methods: {
    irALaVistaDeEditar(item) {
      this.$router.push(`/cursos/${item.id}`);
    },
    mostrarAlertaDeBorrar(item) {
      this.$swal({
        title: "¿Estas seguro?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Borrar",
        cancelButtonText: "Cancelar",
      }).then((result) => {
        if (result.isConfirmed) {
          Firebase.firestore()
            .collection("cursos")
            .doc(item.id)
            .delete()
            .then(() => {
              this.$swal("Borrado con exito").then(() => {
                this.$store.dispatch("grades/getAllGrades");
              });
            });
        }
      });
    },
  },
};
</script>

<style></style>

<template>
  <v-form ref="form" @submit.prevent="handleFormSubmit">
    <v-layout>
      <v-text-field label="Nombre" v-model="formData.nombre" :rules="[$rules.required]"></v-text-field>
    </v-layout>
    <v-layout>
      <v-text-field label="URL de la Imagen" v-model="formData.imagen" :rules="[$rules.required]"></v-text-field>
    </v-layout>
    <v-layout>
      <v-text-field label="Cupos del curso" v-model="formData.cupos" :rules="[$rules.required]"></v-text-field>
    </v-layout>
    <v-layout>
      <v-text-field
        label="Inscritos en el curso"
        v-model="formData.inscritos"
        :rules="[$rules.required]"
      ></v-text-field>
    </v-layout>
    <v-layout>
      <v-text-field label="Duración" v-model="formData.duracion" :rules="[$rules.required]"></v-text-field>
    </v-layout>
    <v-layout>
      <v-text-field label="Costo del curso" v-model="formData.costo"></v-text-field>
    </v-layout>
    <v-layout>
      <v-text-field label="Codigo del curso" v-model="formData.codigo" :rules="[$rules.required]"></v-text-field>
    </v-layout>
    <v-layout>
      <v-textarea outlined label="Descripción" v-model="formData.descripcion" :rules="[$rules.required]"></v-textarea>
    </v-layout>
    <v-layout>
      <v-text-field label="Fecha de registro" v-model="formData.fecha" :rules="[$rules.required]"></v-text-field>
    </v-layout>
    <v-layout>
      <v-switch :label="`Terminado: ${formData.estado ? 'Si' : 'No'}`" v-model="formData.estado"></v-switch>
    </v-layout>
    <v-layout justify-space-between>
      <v-btn color="success" type="submit" :loading="loading">{{ mode === 'update' ? 'Actualizar' : 'Crear' }}</v-btn>
      <v-btn color="error" type="reset" @click="$refs.form.reset()" :loading="loading">Limpiar formulario</v-btn>
      <v-btn color="warning" type="button" @click="$refs.form.resetValidation()" :loading="loading"
        >Limpiar validacion</v-btn
      >
      <v-btn color="info" type="button" @click="$router.back()" :loading="loading" v-if="mode === 'update'"
        >Regresar</v-btn
      >
    </v-layout>
  </v-form>
</template>

<script>
const defaultCurso = () => ({
  nombre: null,
  imagen: null,
  cupos: null,
  inscritos: null,
  duracion: null,
  costo: null,
  codigo: null,
  descripcion: null,
  fecha: null,
  estado: false
})

export default {
  props: {
    curso: {
      type: Object,
      default: defaultCurso
    },
    mode: {
      type: String,
      default: 'update'
    }
  },
  data: () => ({
    formData: null,
    loading: false
  }),
  created() {
    this.formData = { ...this.curso }
  },
  mounted() {
    this.$refs.form.resetValidation()
  },
  methods: {
    handleFormSubmit() {
      if (this.$refs.form.validate()) {
        this.$emit('submit', { ...this.formData })
      }
    }
  }
}
</script>

<style></style>

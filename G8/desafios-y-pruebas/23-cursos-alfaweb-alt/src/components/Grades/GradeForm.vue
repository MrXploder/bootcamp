<template>
  <v-form ref="form" @submit.prevent="handleFormSubmit">
    <v-layout>
      <v-text-field label="Nombre" v-model="model.name" :rules="[$rules.required]"></v-text-field>
    </v-layout>
    <v-layout>
      <v-text-field
        label="URL de la Imagen"
        v-model="model.picture"
        :rules="[$rules.required]"
      ></v-text-field>
    </v-layout>
    <v-layout>
      <v-text-field
        label="Cupos del curso"
        v-model="model.quotas"
        :rules="[$rules.required]"
      ></v-text-field>
    </v-layout>
    <v-layout>
      <v-text-field
        label="Inscritos en el curso"
        v-model="model.enrolled"
        :rules="[$rules.required]"
      ></v-text-field>
    </v-layout>
    <v-layout>
      <v-text-field label="Duración" v-model="model.span" :rules="[$rules.required]"></v-text-field>
    </v-layout>
    <v-layout>
      <v-text-field label="Costo del curso" v-model="model.costo"></v-text-field>
    </v-layout>
    <v-layout>
      <v-text-field
        label="Codigo del curso"
        v-model="model.code"
        :rules="[$rules.required]"
      ></v-text-field>
    </v-layout>
    <v-layout>
      <v-textarea
        outlined
        label="Descripción"
        v-model="model.description"
        :rules="[$rules.required]"
      ></v-textarea>
    </v-layout>
    <v-layout>
      <v-text-field
        label="Fecha de registro"
        v-model="model.date"
        :rules="[$rules.required]"
      ></v-text-field>
    </v-layout>
    <v-layout>
      <v-switch
        :label="`Terminado: ${model.status ? 'Si' : 'No'}`"
        v-model="model.status"
      ></v-switch>
    </v-layout>
    <v-layout justify-space-between>
      <v-btn color="success" type="submit" :loading="isLoading">
        {{ isModeEdit ? 'Actualizar' : 'Crear' }}
      </v-btn>
      <v-btn color="error" type="reset" @click="$refs.form.reset()" :loading="isLoading">
        Limpiar formulario
      </v-btn>
      <v-btn
        color="warning"
        type="button"
        @click="$refs.form.resetValidation()"
        :loading="isLoading"
      >
        Limpiar validacion
      </v-btn>
      <v-btn
        color="info"
        type="button"
        @click="$router.back()"
        :loading="isLoading"
        v-if="mode === 'create'"
      >
        Regresar
      </v-btn>
    </v-layout>
  </v-form>
</template>

<script lang="ts">
import { Vue, Component, Prop, Ref } from 'vue-property-decorator'
import { gradesModule } from '@/store'

import type { VForm } from '@/app.interface'

@Component({})
export default class GradeForm extends Vue {
  @Prop({ type: String, default: 'edit' })
  public readonly mode!: 'edit' | 'create'

  @Ref('form')
  private form!: VForm

  public get model() {
    return this.$deepModel('grades.grade.data')
  }

  public get isLoading() {
    return gradesModule.grade.state === 'pending'
  }

  public get isModeCreate() {
    return this.mode === 'create'
  }

  public get isModeEdit() {
    return this.mode === 'edit'
  }

  public handleFormSubmit() {
    if (this.form.validate()) {
      this.$emit('submit')
    }
  }
}
</script>

<style></style>

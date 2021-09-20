<template>
  <v-form @submit.prevent="handleLoginFormSubmit" ref="form">
    <VSInput
      name="email"
      :label="$t('useCases.forms.inputs.email.label')"
      type="email"
      :value="email"
      @input="email = $event"
      :rules="[$rules.requiredCustom($t('useCases.forms.rules.required'))]"
    />
    <VSInput
      name="password"
      :label="$t('useCases.forms.inputs.password.label')"
      type="password"
      :value="password"
      @input="password = $event"
      :rules="[$rules.requiredCustom($t('useCases.forms.rules.required'))]"
    />
    <v-layout justify-space-between>
      <v-flex sm6>
        <v-btn type="submit" color="success" block :loading="loading">
          {{ $t('useCases.forms.buttons.validate.start') }}
        </v-btn>
      </v-flex>
      <v-flex sm6>
        <v-btn type="reset" color="error" block @click="$refs.form.reset()" :loading="loading">
          {{ $t('useCases.forms.buttons.reset') }}
        </v-btn>
      </v-flex>
    </v-layout>
  </v-form>
</template>

<script lang="ts">
import { Vue, Component, Ref, Prop } from 'vue-property-decorator'

import type { VForm } from '@/app.interface'

@Component({
  components: {
    VSInput: () => import('@/vs-components/VSInput/vsinput.vue')
  }
})
export default class UserForm extends Vue {
  public email: string | null = null
  public password: string | null = null

  @Prop(Boolean)
  public readonly loading!: boolean

  @Ref('form')
  private form!: VForm

  public handleLoginFormSubmit() {
    if (this.form.validate()) {
      this.$emit('submit', { email: this.email, password: this.password })
    }
  }
}
</script>

<style></style>

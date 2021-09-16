<template>
  <v-container>
    <v-layout justify-center>
      <v-flex xs9>
        <h3>Login de Usuario</h3>
        <UserForm @submit="handleLoginFormSubmit" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { sessionModule } from '@/store'

import type { ICredentials } from '@/store/modules/session/session.interface'

@Component({
  components: {
    UserForm: () => import('@/components/UserForm.vue')
  }
})
export default class SignInView extends Vue {
  public async handleLoginFormSubmit(credentials: ICredentials) {
    try {
      await sessionModule.signIn(credentials)
      this.$router.push('/home')
    } catch (e) {
      console.error(e)
    }
  }
}
</script>

<style></style>

<template>
  <v-app-bar app color="primary" clipped-left>
    <div class="d-flex align-center">
      <v-img
        class="shrink mr-2"
        contain
        src="assets/logo.png"
        transition="scale-transition"
        width="56"
      />
      <v-toolbar-title>Fresh and Tasty</v-toolbar-title>
    </div>

    <v-app-bar-nav-icon @click="toggleDrawer()"></v-app-bar-nav-icon>

    <v-spacer></v-spacer>

    <transition mode="out-in" name="fade">
      <template v-if="userData">
        <SignOutDialog />
      </template>
      <template v-else>
        <SignInDialog />
      </template>
    </transition>
  </v-app-bar>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import SignInDialog from '@/components/Sign/SignInDialog.vue'
import SignOutDialog from '@/components/Sign/SignOutDialog.vue'

export default {
  components: { SignInDialog, SignOutDialog },
  methods: {
    ...mapActions({
      toggleDrawer: 'app/toggleNavigationDrawer'
    })
  },
  computed: {
    ...mapState('session', {
      userData: (state) => state.user
    })
  }
}
</script>

<style></style>

<template>
  <fragment>
    <AppSidebar />
    <AppToolbar />
    <v-main>
      <v-container>
        <slot></slot>
      </v-container>
    </v-main>
    <AppSidebarExtension />
  </fragment>
</template>

<script>
export default {
  components: {
    AppSidebar: () => import('@/components/App/Sidebar.vue'),
    AppToolbar: () => import('@/components/App/Toolbar.vue'),
    AppSidebarExtension: () => import('@/components/App/SidebarExtension.vue')
  },
  name: 'DefaultLayout'
}
</script>

<style lang="scss">
@media (min-width: 1264px) {
  .container--constrained {
    max-width: 900px;
  }
}

body {
  .v-application--wrap {
    background-color: var(--v-theme-bg2-base);
  }

  .v-main {
    &__subwrap {
      height: 100%;
      border-top-left-radius: 30px;
      border-top-right-radius: 30px;
      overflow: hidden;
      background-color: var(--v-theme-bg-base);
    }
    &__wrap {
      .layout {
        height: 100%;
      }
      .container {
        padding: 31px 40px;
        margin-bottom: 72px;
      }
    }
  }
}
</style>

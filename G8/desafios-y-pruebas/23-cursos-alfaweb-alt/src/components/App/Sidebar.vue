<template>
  <v-navigation-drawer
    fixed
    app
    width="260"
    floating
    :value="$store.state.app.sidebar.value"
    @input="$store.commit('app/SET_SIDEBAR_VALUE', $event)"
    class="navigation-drawer"
  >
    <v-list class="h-100 pt-0">
      <v-layout class="pt-3 pl-3" style="height: 68px">
        <v-img
          :max-width="52"
          :max-height="52"
          src="/img/logos/logo.svg"
          style="border-radius: 50%"
        />
      </v-layout>

      <v-spacer style="margin-top: 46px" />

      <v-list-item v-for="item in items" :key="item.title" link :to="item.to">
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    items: [
      {
        icon: 'mdi-apps',
        title: 'Inicio',
        to: '/home'
      },
      {
        icon: 'mdi-login',
        title: 'Iniciar Sesión',
        to: '/sign-in'
      },
      {
        icon: 'mdi-account-plus',
        title: 'Registrarse',
        to: '/sign-up'
      },
      {
        icon: 'mdi-account-multiple-check',
        title: 'Administración',
        to: '/grades'
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
.navigation-drawer::v-deep {
  .v-list {
    &-item {
      margin-top: 16px;
      min-height: 38px;
      &::after {
        min-height: unset !important;
      }

      &__title {
        color: #2c3e50;
        font-weight: 700;
        font-size: 16px;
      }

      &--link {
        padding-left: 36px;
        &::before {
          background-color: unset !important;
        }
        &::after {
          content: '';
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          left: 0;
          width: 5px;
          background: rgb(44, 62, 80);
          height: 0;
          transition: all 0.25s ease;
          border-radius: 0 5px 5px 0;
        }
      }

      &--active::after {
        height: 30px;
      }
    }
  }
}
</style>

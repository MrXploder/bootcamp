<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <transition name="slide-right" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<style lang="scss">
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition-duration: 0.5s !important;
  transition-property: opacity, transform !important;
  transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1) !important;
  overflow: hidden !important;
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0 !important;
  transform: translate(2em, 0) !important;
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0 !important;
  transform: translate(-2em, 0) !important;
}

.slide-left-group-leave,
.slide-right-group-leave,
.slide-left-group-leave-active,
.slide-right-group-leave-active {
  position: absolute;
}

.slide-left-group-enter,
.slide-left-group-enter-active,
.slide-right-group-enter,
.slide-right-group-enter-active {
  position: absolute;
}

.slide-left-group-enter-active,
.slide-left-group-leave-active,
.slide-right-group-enter-active,
.slide-right-group-leave-active {
  transition-duration: 0.5s !important;
  transition-property: opacity, transform !important;
  transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1) !important;
  overflow: hidden !important;
}

.slide-left-group-enter,
.slide-right-group-leave-active {
  opacity: 0 !important;
  transform: translate(2em, 0) !important;
}

.slide-left-group-leave-active,
.slide-right-group-enter {
  opacity: 0 !important;
  transform: translate(-2em, 0) !important;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter, .fade-leave-to
/* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

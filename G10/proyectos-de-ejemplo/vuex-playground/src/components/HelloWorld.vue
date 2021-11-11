<template>
  <div class="hello">
    <h1>{{ $store.getters.fullName }}</h1>
    <button @click="$store.dispatch('changeFullName', 'Ismael Gomez')">cambiar nombre</button>
    <button @click="$store.dispatch('changeFullName', 0)">cambiar nombre con error</button>
    <p>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel"
          target="_blank"
          rel="noopener"
          >babel</a
        >
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex"
          target="_blank"
          rel="noopener"
          >vuex</a
        >
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint"
          target="_blank"
          rel="noopener"
          >eslint</a
        >
      </li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li>
        <a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a>
      </li>
      <li>
        <a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a>
      </li>
      <li>
        <a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a>
      </li>
      <li>
        <a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a>
      </li>
      <li>
        <a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a>
      </li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li>
        <a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a>
      </li>
      <li>
        <a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a>
      </li>
      <li>
        <a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a>
      </li>
      <li>
        <a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a>
      </li>
      <li>
        <a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: () => ({
    user: null,
  }),
  methods: {
    changeName() {
      this.$store.dispatch('changeFullName', 'Ismael Gomez')
    },
    async fetchAsync() {
      const userResponse = await fetch('https://run.mocky.io/v3/06cf2c70-342c-4929-ab5f-9ef36b6bb825')
      const userData = await userResponse.json()

      console.log(userData)

      const metaUserResponse = await fetch('https://run.mocky.io/v3/27300d42-7ba9-4791-b3d8-5835046d8331')
      const metaUserData = await metaUserResponse.json()

      console.log(metaUserData)

      const userEducationResponse = await fetch('https://run.mocky.io/v3/3ade5f1b-7be4-4f97-86d0-f92617768c38')
      const userEducationData = await userEducationResponse.json()

      console.log(userEducationData)
    },
  },
  mounted() {
    // fetch('https://run.mocky.io/v3/06cf2c70-342c-4929-ab5f-9ef36b6bb825')
    //   .then(response => {
    //     return response.json()
    //   })
    //   .then(data => {
    //     console.log(data)
    //     return fetch('https://run.mocky.io/v3/27300d42-7ba9-4791-b3d8-5835046d8331')
    //   })
    //   .then(response => {
    //     return response.json()
    //   })
    //   .then(data => {
    //     console.log(data)
    //     return fetch('https://run.mocky.io/v3/3ade5f1b-7be4-4f97-86d0-f92617768c38')
    //   })
    //   .then(response => {
    //     return response.json()
    //   })
    //   .then(data => {
    //     console.log(data)
    //   })

    this.fetchAsync()
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

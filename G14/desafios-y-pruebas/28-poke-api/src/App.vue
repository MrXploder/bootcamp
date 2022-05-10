<template>
  <main>
    <section class="banner">
      <img src="pokemon-banner.jpeg" />
    </section>

    <section class="search">
      <h4>PokeGuía</h4>
      <div class="input-search">
        <p>Nombre:</p>
        <input type="text" />
        <button>Buscar</button>
      </div>
    </section>

    <section class="movements">
      <h4>Movimientos</h4>
      <ul></ul>
    </section>

    <section class="habilities">
      <h4>Habilidades</h4>
      <ul></ul>
    </section>
  </main>
</template>

<script>
export default {
  name: "App",
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  background-color: black;
  color: white;
}

main {
  max-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
}

.banner {
  display: flex;
  align-items: center;
  justify-content: center;
}
.banner img {
  width: 50%;
}

.search {
  text-align: center;
}

.search .input-search {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.search .input-search p {
  margin: 0;
}
</style>

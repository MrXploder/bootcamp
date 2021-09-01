<template>
  <!-- CONTENIDO PARA LA VISTA DE PORTADA -->
  <div>
    <header
      class="masthead"
      style="background-image:url('assets/img/home-bg.jpg');"
    >
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-md-10 col-lg-8 mx-auto">
            <div class="site-heading">
              <h1>V8</h1>
              <span class="subheading">Noticias y reseñas de automóviles</span>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <div class="row">
        <div class="col-md-10 col-lg-8">
          <div class="post-preview">
            <router-link to="/post/1">
              <h2 class="post-title">
                <strong>Chevrolet presenta la totalmente nueva Blazer</strong>
              </h2>
              <h3 class="post-subtitle">
                Llega&nbsp;como la primera SUV deportiva de la marca
              </h3>
            </router-link>
          </div>
          <hr />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Inicio",
};
</script>

<style></style>

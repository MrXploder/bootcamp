<template>
  <nav class="navbar navbar-light bg-light">
    <a class="navbar-brand" href="#">
      <img
        src="https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/151/posts/32740/image/4.jpg"
        width="30"
        height="30"
        class="d-inline-block align-top"
        alt=""
      />
      Tienda 32Bits
    </a>
    <div class="navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/">
            <i class="fa fa-home" aria-hidden="true"></i>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/juegos">
            <i class="fa fa-gamepad" aria-hidden="true"></i>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {}
</script>

<style></style>

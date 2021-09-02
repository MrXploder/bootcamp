<template>
  <header
    class="masthead"
    style="margin-top: 57px"
    :style="{ 'background-image': `url(${backgroundImg})` }"
  >
    <div class="overlay"></div>
    <div class="container">
      <div class="row">
        <div class="col-md-10 col-lg-8 mx-auto">
          <div>
            <h1>
              <strong>{{ title }}</strong>
            </h1>
            <h2 class="subheading">
              <strong>{{ subTitle }}</strong>
            </h2>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    backgroundImg: { type: String },
    title: { type: String },
    subTitle: { type: String },
  },
};
</script>

<style></style>

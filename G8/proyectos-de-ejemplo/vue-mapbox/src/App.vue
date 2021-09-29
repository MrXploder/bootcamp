<template>
  <div style="height: 400px">
    <MglMap :accessToken="accessToken" :mapStyle="mapStyle" />
  </div>
</template>

<script>
import Mapbox from "mapbox-gl";
import { MglMap } from "vue-mapbox";

export default {
  components: {
    MglMap,
  },
  data() {
    return {
      accessToken:
        "pk.eyJ1IjoibXN4cGxvZGVyIiwiYSI6ImNrdTM4d2g3NzE4eXoyb250dmJxdXU4cHYifQ.Pndg4LSxNIeyKWSLR7zvpA", // your access token. Needed if you using Mapbox maps
      mapStyle: "mapbox://styles/mapbox/streets-v11", // your map style
    };
  },

  created() {
    // We need to set mapbox-gl library here in order to use it in template
    this.mapbox = Mapbox;
  },
};
</script>

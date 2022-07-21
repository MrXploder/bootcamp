<template>
  <main>
    <pre>{{ parkinPlaces | json }}</pre>
    <ol>
      <li v-for="(parkinPlace, $index) of parkinPlaces" :key="$index">
        {{ parkinPlace.geo.place_name }}
      </li>
    </ol>
    <label for="alias"></label>
    <input id="alias" type="text" v-model="form.alias" />

    <label for="description"></label>
    <input id="description" type="text" v-model="form.description" />

    <button :disabled="disabled" @click="addParkingPlace">
      agregar estacionamiento
    </button>
    <div id="map"></div>
  </main>
</template>

<script>
import mapboxgl from 'mapbox-gl';
import { mapState, mapActions } from 'vuex';

mapboxgl.accessToken =
  'pk.eyJ1IjoibXN4cGxvZGVyIiwiYSI6ImNrdTM4d2g3NzE4eXoyb250dmJxdXU4cHYifQ.Pndg4LSxNIeyKWSLR7zvpA';

export default {
  data: () => ({
    map: null,
    markers: [],
    parkinPlaces: [],
    geocoderLastResult: null,
    form: {
      alias: '',
      description: '',
    },
  }),
  methods: {
    ...mapActions('events', {
      getAllEvents: 'getAll',
    }),
    addParkingPlace() {
      const { place_name: placeName, id, center: coords } = this.geocoderLastResult;
      
      this.parkinPlaces.push({
        geo: { placeName, id, coords },
        ...this.form,
        owner: 'l.arancibiaf@gmail.com',
        status: "available",
        price: 10000,
        rate: "biweekly",

      });
    },
  },
  computed: {
    ...mapState('events', {
      events: (state) => state.list,
    }),
    disabled() {
      return (
        !this.geocoderLastResult ||
        this.parkinPlaces.some(
          (parkinPlace) => parkinPlace.center === this.geocoderLastResult.center
        )
      );
    },
  },
  watch: {
    events: {
      handler() {
        if (this.markers.length > 0) {
          this.markers.forEach((marker) => marker.remove());
        }

        this.markers = this.events.map((event) => {
          return new mapboxgl.Marker().setLngLat(event).addTo(this.map);
        });
      },
    },
  },
  async created() {
    await this.getAllEvents();
  },
  mounted() {
    console.log(this.events);
    this.map = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: [12.66148, 55.708167], // starting position [lng, lat]
      zoom: 9, // starting zoom
      projection: 'globe', // display the map as a 3D globe
    });

    this.map.on('style.load', () => {
      this.map.setFog({}); // Set the default atmosphere style
    });

    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl,
    });

    this.map.addControl(geocoder);

    geocoder.on('result', (e) => {
      // e.result.center
      this.geocoderLastResult = e.result;
    });

    this.map.addControl(new mapboxgl.NavigationControl());

    this.map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        // When active the map will receive updates to the device's location as it changes.
        trackUserLocation: true,
        // Draw an arrow next to the location dot to indicate which direction the device is heading.
        showUserHeading: true,
      })
    );

    setTimeout(() => {
      this.$store.commit('events/ADD_TO_LIST', [12.66148, 55.708167]);
    }, 10000);
  },
};
</script>

<style>
#map {
  height: 80vh;
  width: 80vw;
}
</style>

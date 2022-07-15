<template>
  <mgl-map
    :accessToken="accessToken"
    :mapStyle="mapStyle"
    style="width: 400px; height: 400px"
  >
    <MglGeojsonLayer
      :sourceId="geoJsonSource.data.id"
      :source="geoJsonSource"
      layerId="somethingSomething"
      :layer="geoJsonLayer"
    />
  </mgl-map>
</template>

<script>
import Mapbox from 'mapbox-gl';
import { MglMap, MglGeojsonLayer } from 'vue-mapbox';

export default {
  components: {
    MglMap,
    MglGeojsonLayer
  },
  data() {
    return {
      accessToken: process.env.VUE_APP_MAPBOX_ACCESS_TOKEN, // your access token. Needed if you using Mapbox maps
      mapStyle: 'mapbox://styles/mapbox/dark-v10', // your map style
      geoJsonSource: {
        type: 'geojson',
        data: {
          id: 'thisIsMySource',
          type: 'FeatureCollection',
          features: [
            {
              type: 'Feature',
              geometry: {
                type: 'Point',
                coordinates: [102.0, 0.5],
              },
              properties: {
                id: 'value0',
              },
            },
          ],
        },
      },
      geoJsonLayer: {
        type: 'circle',
        paint: {
          'circle-color': 'red',
        },
      },
    };
  },
  created() {
    // We need to set mapbox-gl library here in order to use it in template
    this.mapbox = Mapbox;
  },
};
</script>

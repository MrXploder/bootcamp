<template>
  <v-app>
    <Navbar />

    <v-main class="grey lighten-3">
      <v-container>
        <v-row justify="center">
          <v-col cols>
            <v-sheet min-height="70vh" rounded="lg" class="pa-6">
              <transition mode="out-in" name="fade">
                <router-view />
              </transition>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Axios from "axios";
export default {
  components: {
    Navbar: () => import("./components/App/Navbar"),
  },
  name: "App",
  data: () => ({}),
  mounted() {
    this.$store.dispatch("session/subscribeToAuthStateChange");

    this.startSpotify();
  },
  methods: {
    async startSpotify() {
      const clientId = "9240403d1d754f7998a82316e627f4c2";
      const clientSecret = "ce6a3196dfd8466aac28f0c3ac710d6e";

      const serialize = function (obj) {
        var str = [];
        for (var p in obj) {
          // eslint-disable-next-line no-prototype-builtins
          if (obj.hasOwnProperty(p)) {
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
          }
        }
        return str.join("&");
      };

      const tokenResponse = await Axios.post(
        "https://accounts.spotify.com/api/token",
        serialize({ grant_type: "client_credentials" }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization:
              "Basic " +
              new Buffer(`${clientId}:${clientSecret}`).toString("base64"),
          },
        }
      );

      console.log({ tokenResponse });

      const artistResponse = await Axios.get(
        // "https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg",
        "https://api.spotify.com/v1/users/jmperezperez",
        {
          headers: {
            Authorization: `Bearer ${tokenResponse.data.access_token}`,
          },
        }
      );

      console.log({ artistResponse });
    },
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

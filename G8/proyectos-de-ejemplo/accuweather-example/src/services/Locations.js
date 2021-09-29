import Axios from "axios";

class Locations {
  constructor(accessToken) {
    this.accessToken = accessToken;
    this.$http = Axios.create();
  }

  async geopositionSearch(lat, lng) {
    const response = await Axios.get(
      "http://dataservice.accuweather.com/locations/v1/cities/geoposition/search",
      {
        params: {
          apiKey: this.accessToken,
          language: "es",
          q: `${lat},${lng}`,
        },
      }
    );
    return response.data;
  }
}

export default new Locations("rAV6KJeGQWg9KbCt5xR3Bwwi5d2AvvQ1");

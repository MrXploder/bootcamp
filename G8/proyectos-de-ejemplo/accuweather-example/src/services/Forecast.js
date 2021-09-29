import Axios from "axios";

class Forecast {
  constructor(accessToken) {
    this.accessToken = accessToken;
    this.$http = Axios.create();
  }

  async currentConditions(locationKey) {
    const response = await Axios.get(
      `http://dataservice.accuweather.com/currentconditions/v1/${locationKey}`
    );
    return response.data;
  }
}

export default new Forecast("rAV6KJeGQWg9KbCt5xR3Bwwi5d2AvvQ1");

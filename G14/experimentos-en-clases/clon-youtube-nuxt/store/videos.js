import Axios from "@nuxtjs/axios";

export const state = () => ({
  videos: [],
});

export const mutations = {
  SET_VIDEOS(state, newVideos) {
    state.videos = newVideos;
  },
};

export const actions = {
  async getAllVideos(context) {
    try {
      if (context.state.videos.length === 0) {
        const { data: Videos } = await Axios.get("/recent.json");
        console.log(Videos)
        context.commit("SET_VIDEOS", Videos);
      }
    } catch (e) {}
  },
};

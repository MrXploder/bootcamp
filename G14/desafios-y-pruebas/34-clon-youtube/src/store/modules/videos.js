import Axios from 'axios';

export const videosModule = {
  namespaced: true,
  state: {
    videos: [],
  },
  mutations: {
    SET_VIDEOS(state, newVideos) {
      state.videos = newVideos;
    },
  },
  actions: {
    async getAllVideos(context) {
      try {
        if (context.state.videos.length === 0) {
          const { data: Videos } = await Axios.get('/recent.json');
          context.commit('SET_VIDEOS', Videos);
        }
      } catch (e) {}
    },
  },
};

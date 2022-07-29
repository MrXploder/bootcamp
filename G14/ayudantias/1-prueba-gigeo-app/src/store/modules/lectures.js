import { DB } from '@/plugins/firebase';

export const lecturesModule = {
  namespaced: true,
  state: {
    list: [],
    loading: false,
  },
  getters: {
    totalQuota(state) {
      return state.list.reduce((accumulator, lecture) => {
        accumulator += lecture.quota;
        return accumulator;
      }, 0);
    },
    totalEnrolled(state) {
      return state.list.reduce((accumulator, lecture) => {
        accumulator += lecture.enrolled;
        return accumulator;
      }, 0);
    },
    totalQuotaAvailable(state, getters) {
      return getters.totalQuota - getters.totalEnrolled;
    },
    totalFinished(state) {
      return state.list.reduce((accumulator, lecture) => {
        if (lecture.finished) accumulator++;
        return accumulator;
      }, 0);
    },
    totalActive(state, getters) {
      return state.list.length - getters.totalFinished;
    },
    totalLectures(state) {
      return state.list.length;
    },
  },
  mutations: {
    SET_LIST(state, newList) {
      state.list = newList;
    },
    SET_LOADING(state, newLoading) {
      state.loading = newLoading;
    },
  },
  actions: {
    async getAll({ commit }) {
      commit('SET_LOADING', true);
      try {
        const lectures$ = await DB.collection('lectures').get();
        const lectures = [];

        lectures$.forEach((document) => {
          lectures.push({ ...document.data(), id: document.id });
        });

        commit('SET_LIST', lectures);
      } catch (error) {
        console.error(error);
      } finally {
        commit('SET_LOADING', false);
      }
    },
    async createOne({ commit }, newLecture) {
      commit('SET_LOADING', true);
      try {
        await DB.collection('lectures').add(newLecture);
      } catch (error) {
        console.error(error);
      } finally {
        commit('SET_LOADING', false);
      }
    },
  },
};

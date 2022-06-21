import Firebase from 'firebase';

export const sessionModule = {
  namespaced: true,
  state: {
    user: null,
    loading: false,
  },
  getters: {
    activeLogin(state) {
      return !!state.user;
    },
  },
  mutations: {
    SET_USER(state, newUser) {
      state.user = newUser;
    },
    SET_LOADING(state, newLoading) {
      state.loading = newLoading;
    },
  },
  actions: {
    async subscribeToAuthStateChange({ commit }) {
      Firebase.auth().onAuthStateChanged((user) => {
        commit('SET_USER', user);
      });
    },
    async signInWithEmailAndPassword({ commit }, credentials) {
      commit('SET_LOADING', true);
      try {
        await Firebase.auth().signInWithEmailAndPassword(
          credentials.email,
          credentials.password
        );
      } catch (e) {
        console.error('La mansa embarraita', e);
      } finally {
        commit('SET_LOADING', false);
      }
    },
    async createUserWithEmailAndPassword({ commit }, newUser) {
      commit('SET_LOADING', true);

      try {
        await Firebase.auth().createUserWithEmailAndPassword(
          newUser.email,
          newUser.password
        );
        await Firebase.firestore().collection('users').doc(newUser.email).set({
          name: '',
          lastName: '',
          birthDate: '',
          phoneNumber: '',
          role: 'user',
        });
      } catch (error) {
        console.error(error);
      } finally {
        commit('SET_LOADING', false);
      }
    },
    async signOut({ commit }) {
      commit('SET_LOADING', true);
      try {
        await Firebase.auth().signOut();
      } catch (e) {
        console.error('otra embarraita mas, me perd0n as¿', e);
      } finally {
        commit('SET_LOADING', false);
      }
    },
  },
};

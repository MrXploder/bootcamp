import Firebase from 'firebase'

export const cursos = {
  namespaced: true,
  state: {
    data: [],
    curso: null
  },
  getters: {
    cantidadTotalAlumnosPermitidos(state) {
      return state.data.reduce((accumulator, curso) => {
        accumulator += Number.parseInt(curso.cupos)
        return accumulator
      }, 0)
    },
    cantidadTotalAlumnosInscritos(state) {
      return state.data.reduce((accumulator, curso) => {
        accumulator += Number.parseInt(curso.inscritos)
        return accumulator
      }, 0)
    },
    cantidadTotalCuposRestantes(state) {
      return state.data.reduce((accumulator, curso) => {
        accumulator += Number.parseInt(curso.cupos) - Number.parseInt(curso.inscritos)
        return accumulator
      }, 0)
    },
    cantidadTotalCursosTerminados(state) {
      return state.data.filter((curso) => curso.estado).length
    },
    cantidadTotalCursosActivos(state) {
      return state.data.filter((curso) => !curso.estado).length
    }
  },
  mutations: {
    UNSET_CURSO(state) {
      state.curso = null
    },
    SET_DATA(state, newData) {
      state.data = newData
    },
    SET_CURSO(state, newCurso) {
      state.curso = newCurso
    },
    SET_CURSO_NOMBRE(state, nuevoNombre) {
      state.curso.nombre = nuevoNombre
    },
    SET_CURSO_DESCRIPCION(state, nuevaDescripcion) {
      state.curso.descripcion = nuevaDescripcion
    },
    SET_CURSO_DURACION(state, nuevaDuracion) {
      state.curso.duracion = nuevaDuracion
    },
    MUTATE_CURSO(state, payload) {
      state.curso[payload.property] = payload.with
    }
  },
  actions: {
    getCursos(context) {
      const firebaseApp = context.rootState.system.firebase
      Firebase.firestore(firebaseApp)
        .collection('cursos')
        .get()
        .then((querySnapshot) => {
          let data = []
          querySnapshot.forEach((doc) => data.push({ id: doc.id, ...doc.data() }))
          context.commit('SET_DATA', data)
        })
    },
    borrarCurso(context, curso) {
      const firebaseApp = context.rootState.system.firebase
      Firebase.firestore(firebaseApp)
        .collection('cursos')
        .doc(curso.id)
        .delete()
        .then(() => {
          context.dispatch('getCursos')
        })
    },
    getCurso(context, id) {
      context.commit('UNSET_CURSO')
      const firebaseApp = context.rootState.system.firebase
      return new Promise((resolve, reject) => {
        Firebase.firestore(firebaseApp)
          .collection('cursos')
          .doc(id)
          .get()
          .then((doc) => {
            context.commit('SET_CURSO', { id: doc.id, ...doc.data() })
            resolve()
          }, reject)
      })
    },
    actualizarCurso(context, curso) {
      const firebaseApp = context.rootState.system.firebase
      return new Promise((resolve, reject) => {
        Firebase.firestore(firebaseApp)
          .collection('cursos')
          .doc(context.state.curso.id)
          .update(curso)
          .then(() => {
            context.dispatch('getCursos')
            resolve()
          }, reject)
      })
    },
    crearCurso(context, nuevoCurso) {
      const firebaseApp = context.rootState.system.firebase
      return new Promise((resolve, reject) => {
        Firebase.firestore(firebaseApp).collection('cursos').add(nuevoCurso).then(resolve, reject)
      })
    }
  }
}

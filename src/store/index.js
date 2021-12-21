import Vue from 'vue'
import Vuex from 'vuex'
import Firebase from 'firebase/compat/app'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    proyectos:[]
  },
  mutations: {
    setProyectos(state, proyectos){
      state.proyectos=proyectos
    }
  },
  actions: {
    getProyectos({commit}){
      Firebase
      .firestore()
      .collection('proyectos')
      .onSnapshot((snapshot)=>{
        const proyectos = []
        snapshot.forEach((doc)=>{
          proyectos.push({
            id: doc.id, data: doc.data()
          })
          commit('setProyectos', proyectos)
        })
      })
    }
  },
  modules: {
  },
  getters:{
    GETPROYECTOS(state){
      return state.proyectos
    },
  }
})

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { 
    name: '',
    signedIn: false,
    token: ''
  },
  mutations: { //se usa para cambiar los datos del estado por medio de una accion
    setToken(state, token){
      state.token = token;
    },
    setName(state, name){
      state.name = name;
    },
    setSignedIn(state, signedIn){
        state.signedIn = signedIn;
    }
  },
  actions: {
    settingTokenAction(context, token){      // el commit se llama desde el contexto
      context.commit('setToken', token); //cuando se trabaja con las acciones hay que hacer un commit hacia las mutaciones
    },
    settingNameAction(context, name){
        context.commit('setName', name);
    },
    settingSignedInAction(context, signedIn){
      context.commit('setSignedIn', signedIn);
    }
  },
  modules: {
  },
  getters:{
    token(state){
      return state.token;
    },
    name(state){
      return state.name;
    },
    signedIn(state){
        return state.signedIn;
    }
  }
})
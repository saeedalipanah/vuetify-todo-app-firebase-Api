import Vue from 'vue'
import Vuex from 'vuex'
import projectsModule from './projects/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    projects : projectsModule
  },
  state: {

  },
  mutations: {

  },
  actions: {

  },
  getters: {

  }
})
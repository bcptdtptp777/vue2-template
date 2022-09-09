import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const modules = {}
require.context('./modules', false, /(.js$)/).keys().map(path => {
  const moduleName = path.replace(/^\.\/(.*)\.\w+$/, '$1')
  modules[moduleName] = require(`./modules${path.replace('.', '')}`)
})

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules
})

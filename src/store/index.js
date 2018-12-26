import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  // Modules will be loaded dynamically

  // Enabling strict mode during development to avoid errors
  strict: debug,
})

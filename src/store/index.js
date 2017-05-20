import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import * as actions from './actions'

Vue.use(Vuex)

const state = {
  apiUrl: '',
  mainData:{
    routes:'',
    apiUrl:'',
    config:'',
  },
}
export default new Vuex.Store({
  state,
  mutations,
  actions
})

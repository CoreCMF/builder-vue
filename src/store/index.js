import Vue from 'vue'
import Vuex from 'vuex'

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
  state
})

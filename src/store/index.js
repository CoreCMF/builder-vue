import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'

Vue.use(Vuex)

const state = {
  /* 设置api通信url */
  apiUrl: window.config.apiUrl,
  /* 后端主要配置数据 */
  mainData:{
    routes: '',
    apiUrl: '',
    config: '',
  },
  callbackData: null,
  callbackError: null,
  api:{
    sidebar: ''
  },
  dialog: {},
  dialogWidth: '618px'
}
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})

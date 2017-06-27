import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import * as actions from './actions'

Vue.use(Vuex)

const state = {
  /* 设置api通信url */
  apiUrl: '',
  /* 后端主要配置数据 */
  mainData:{
    routes: '',
    apiUrl: '',
    config: '',
  },
  update: false,
  api:{
    sidebar: ''
  },
  dialog: {
    postData: null,
    apiUrl: null,
  },
  authStatus: true
}
export default new Vuex.Store({
  state,
  mutations,
  actions
})

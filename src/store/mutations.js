import * as types from './mutation-types'
export default {
  [types.SET_MAIN_DATA] (state,mainData){
    state.mainData = mainData
  },
  [types.SET_SIDEBAR] (state, apiUrl){
    state.api.sidebar = apiUrl
  },
  [types.UPDATE] (state){
    state.update = !state.update
  },
  [types.DIALOG] (state, {apiUrl, postData}){
    state.dialog.apiUrl   = apiUrl
    state.dialog.postData = postData
  },
  [types.REQUEST_STATUS] (state, status){
    state.requestStatus = status
  },
}

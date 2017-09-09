import * as types from './mutation-types'
export default {
  [types.SET_MAIN_DATA] (state,mainData){
    state.mainData = mainData
  },
  [types.SET_SIDEBAR] (state, apiUrl){
    state.api.sidebar = apiUrl
  },
  [types.CALLBACK_DATA] (state, data){
    state.callbackData = data
  },
  [types.DIALOG] (state, {apiUrl, postData}){
    state.dialog.apiUrl   = apiUrl
    state.dialog.postData = postData
  },
  [types.CALLBACK_ERROR] (state, error){
    state.callbackError = error
  },
}

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
    Vue.set(state.dialog,apiUrl,postData)
  },

  [types.DIALOGWIDTH] (state, width){
     if (!_.isEmpty(width)) {
         state.dialogWidth = width
     }
  },
  [types.DELETE_DIALOG] (state, apiUrl){
    Vue.delete(state.dialog,apiUrl)
  },
  [types.CALLBACK_ERROR] (state, error){
    state.callbackError = error
  },
}

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
  [types.DIALOG_API_URL] (state, apiUrl){
    state.dialog.apiUrl = apiUrl
  },
}

import * as types from './mutation-types'
import { Message } from 'element-ui'

/**
 * [setMainData 设置主通信数据]
 * @param    {[type]}                 mainData       [数据]
 */
export const setMainData = ({ commit,state },mainData) => {
  commit(types.SET_MAIN_DATA,mainData)
}
/* 公共post请求方法 */
export const getData = ({ commit,state },{apiUrl = state.apiUrl, postData = null, thenFunction = null, catchFunction = null}) => {
    let token_type = localStorage.getItem('token_type')
    let access_token = localStorage.getItem('access_token')
    let refresh_token = localStorage.getItem('refresh_token')
    window.axios.post(apiUrl,postData,{
        headers: {
          'Accept': 'application/json',
          'Authorization': token_type + ' ' + access_token
        },
    })
    .then((Response) => {
      if (thenFunction) {
        thenFunction(Response)
      }
      let message = Response.data.message
      if (message) {
          Message({
              message: message.message,
              type: message.type,
          })
      }
    })
    .catch((error) => {
      if (catchFunction) {
        catchFunction(error)
      }else{
        commit(types.CALLBACK_ERROR, error)
        // console.log(error)
        // console.log(error.message)
        // console.log(error.config)
        // console.log(error.code)
        // console.log(error.request)
        console.log(error.response)
      }
    })
}
export const setSidebar = ({ commit,state }, apiUrl) => {
  commit(types.SET_SIDEBAR, apiUrl)
}
export const callbackData = ({ commit,state }, data) => {
  commit(types.CALLBACK_DATA, data)
}
export const dialog = ({ commit,state }, {apiUrl, postData}) => {
  commit(types.DIALOG, {apiUrl, postData})
}
export const dialogWidth = ({ commit,state }, width) => {
  commit(types.DIALOGWIDTH, width)
}
export const deleteDialog = ({ commit,state }, apiUrl) => {
  commit(types.DELETE_DIALOG, apiUrl)
}

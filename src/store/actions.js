import * as types from './mutation-types'

/**
 * [setMainData 设置主通信数据]
 * @param    {[type]}                 mainData       [数据]
 */
export const setMainData = ({ commit,state },mainData) => {
  commit(types.SET_MAIN_DATA,mainData)
}
export const MessageInfo = (message, data) => {
  message({
    message: data.message,
    type: data.type,
  })
}
/* 公共post请求方法 */
export const getData = ({ commit,state },{apiUrl = state.apiUrl, postData = null, thenFunction = null, catchFunction = null, message = null}) => {
    let token_type = localStorage.getItem('token_type')
    let access_token = localStorage.getItem('access_token')
    let refresh_token = localStorage.getItem('refresh_token')
    window.axios.post(apiUrl,postData,{
        withCredentials:true,
        headers: {
          'Accept': 'application/json',
          'Authorization': token_type + ' ' + access_token
        },
    })
    .then((Response) => {
      if (thenFunction) {
        thenFunction(Response)
      }
      if (message && Response.data.message) {
        MessageInfo(message, Response.data.message)
      }
    })
    .catch(function (error) {
      if (catchFunction) {
        catchFunction(error)
      }else{
        commit(types.CALLBACK_ERROR, error)
      }
      if (message) {
        MessageInfo(message, {
            message: '操作失败请联系管理员！',
            type: 'error',
        })
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

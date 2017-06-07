import * as types from './mutation-types'

/**
 * [setMainData 设置主通信数据]
 * @param    {[type]}                 mainData       [数据]
 */
export const setMainData = ({ commit,state },mainData) => {
  commit(types.SET_MAIN_DATA,mainData)
}
/* 公共post请求方法 */
export const getData = ({ commit,state },{url = state.apiUrl, postData = '', thenFunction = '', catchFunction = '', notification = true}) => {
    window.axios.post(url,postData,{withCredentials:true})
    .then((Response) => {
      if (thenFunction) {
        thenFunction(Response)
      }
    })
    .catch(function (error) {
      if (catchFunction) {
        catchFunction(error)
      }
    })
}
export const setSidebar = ({ commit,state }, apiUrl) => {
  commit(types.SET_SIDEBAR, apiUrl)
}

import * as types from './mutation-types'

/**
 * [setMainData 设置主通信数据]
 * @param    {[type]}                 mainData       [数据]
 */
export const setMainData = ({ commit,state },mainData) => {
  commit(types.SET_MAIN_DATA,mainData)
}
export const Notification = (notify, data) => {
  data.duration = data.duration ? data.duration : 4500;  //设置自动取消时间
  data.offset = data.offset ? data.offset : 100;  //设置位置偏移
  notify({
    title: data.title,
    message: data.message,
    type: data.type,
    iconClass: data.iconClass,
    customClass: data.customClass,
    duration: data.duration,
    onClose: data.onClose,
    offset: data.offset,
  })
}
/* 公共post请求方法 */
export const getData = ({ commit,state },{apiUrl = state.apiUrl, postData = null, thenFunction = null, catchFunction = null, notify = null}) => {
    window.axios.post(apiUrl,postData,{withCredentials:true})
    .then((Response) => {
      if (thenFunction) {
        thenFunction(Response)
      }
      if (notify) {
        Notification(notify, Response.data)
      }
    })
    .catch(function (error) {
      if (catchFunction) {
        catchFunction(error)
      }
      if (notify) {
        Notification(notify, {
            title: '操作失败',
            message: '操作失败请联系管理员！',
            type: 'error',
        })
      }
    })
}
export const setSidebar = ({ commit,state }, apiUrl) => {
  commit(types.SET_SIDEBAR, apiUrl)
}
export const update = ({ commit,state }) => {
  commit(types.UPDATE)
}

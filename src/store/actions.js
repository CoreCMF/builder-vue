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
    window.axios.post(apiUrl,postData,{withCredentials:true})
    .then((Response) => {
      if (thenFunction) {
        thenFunction(Response)
      }
      if (message) {
        MessageInfo(message, Response.data)
      }
    })
    .catch(function (error) {
      /**
       * [thenFunction 如果登录没有成功跳转到登录页面]
       */
      let thenFunction = (Response) => {
        let loginState = Response.data.state
        let loginRouterNmae = state.mainData.config.loginRouterNmae
        if (!loginState) {
          router.push({name:loginRouterNmae})
        }
      }
      let apiUrl = state.mainData.apiUrl.authCheck
      // 等待三秒验证登陆状态
      setTimeout(() =>  {
        getData({ commit,state },{apiUrl, thenFunction})
      }, 3000);

      if (catchFunction) {
        catchFunction(error)
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
export const update = ({ commit,state }) => {
  commit(types.UPDATE)
}
export const dialog = ({ commit,state }, {apiUrl, postData}) => {
  commit(types.DIALOG, {apiUrl, postData})
}

import * as types from './mutation-types'
import { Message } from 'element-ui'
import localForage from 'localforage'
import axios from 'axios'


/**
 * [setMainData 设置主通信数据]
 * @param    {[type]}                 mainData       [数据]
 */
export const setMainData = ({ commit,state },mainData) => {
  commit(types.SET_MAIN_DATA,mainData)
}
/* 公共post请求方法 */
export const getData = async ({ commit,state },{apiUrl = state.apiUrl, postData = null, thenFunction = null, catchFunction = null, cache = true}) => {
    let key = apiUrl+JSON.stringify(postData)
    let cacheData = await localForage.getItem(key)
    let thenFun = (data) => {
        if (thenFunction) {
          thenFunction(data)
        }
        let message = data.message
        if (message) {
            Message({
                message: message.message,
                type: message.type,
            })
        }
    }
    let catchFun = (error) => {
        if (catchFunction) {
          catchFunction(error)
        }else{
          commit(types.CALLBACK_ERROR, error)
          console.log(error)
          // console.log(error.message)
          // console.log(error.config)
          // console.log(error.code)
          // console.log(error.request)
          // console.log(error.response)
        }
    }
    if (cacheData && cache) {
        thenFun(cacheData)
    }else{
        axios.post(apiUrl,postData,{
            headers: {
              'Accept': 'application/json',
              'Authorization': localStorage.getItem('token_type') + ' ' + localStorage.getItem('access_token')
            },
        })
        .then((Response) => {
          let response  = async () =>{
              await localForage.setItem(key, Response.data)
              thenFun(Response.data)
          }
          response()
        })
        .catch((error) => {
          catchFun(error)
        })
    }
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

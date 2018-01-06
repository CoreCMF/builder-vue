import Vue from 'vue'
import App from './components/app'
import router from './router'
import store from './store'
import 'font-awesome/css/font-awesome.css'
//注册全局
window.axios = require('axios')
window.Vue = Vue
window.router = router
//配置axios请求头部
window.axios.defaults.headers.common = {
  'X-CSRF-TOKEN': window.config.csrfToken,
  'X-Requested-With': 'XMLHttpRequest'
}

export {
  App,
  router,
  store
}

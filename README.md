# builder-vue

> a vue admin packages

## Build Setup
```
npm install builder-vue -D
```
## 启动（下面以builder-vue-element自动构建为例）
1、设置全局HTTP包Axios
2、设置通信地址apiUrl
3、设置容器组件
4、设置builder组件
```
import Vue from 'vue'
import {App, router, store} from 'builder-vue'
import ElementUI from 'element-ui'
import BuilderVueElement from 'builder-vue-element'
import ContainerVueElement from 'container-vue-element'
window.axios = require('axios')

Vue.use(ElementUI)
Vue.use(BuilderVueElement)
Vue.use(ContainerVueElement)

/* 设置api通信url */
store.state.apiUrl = window.config.apiUrl
/* 容器组件 */
store.state.container = { template: '<cve-layout/>' }
/* builder索引组件 */
store.state.builderIndex = { template: '<bve-index/>' }

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})


```
## 数据结构（必须）（store.state.apiUrl返回的数据结构JOSN）
1、routes 数组(其中包括三个元素)
  ⑴、name 前端路由名称
  ⑵、path 前端实际访问路径
  ⑶、apiUrl 切换路由后获取数据的通信URL
2、config 对象
  ⑴、mainPath 主路径默认地址（例如后台admin 商城shop ...等）
3、apiUrl 对象
  ⑴、logout 退出通信地址
  ⑵、login 登录通信地址
```
{
  "routes":[
    {"name":"api.admin.dashboard.index",  "path":"/admin/dashboard",      "apiUrl":"http://corecmf.dev/api/admin/dashboard/dashboard"},
    {"name":"api.admin.system.system",    "path":"/admin/system/system",  "apiUrl":"http://corecmf.dev/api/admin/system/system"}
  ],
  "config":{
    "homeRouterNmae":"api.admin.dashboard.index",
    "loginRouterNmae":"login",
    "loginUrl":"/admin/login",
    "mainPath":"/admin"
  },
  "apiUrl":{
    "logout":"http://corecmf.dev/admin/logout",
    "login":"http://corecmf.dev/admin/login",
  }
}
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'app',
  created () {
    this.initMainData()
  },
  methods: {
    /* [initMainData 通过apiUrl通信获取数据] */
    initMainData () {
      let _this = this

      let thenFunction = function(Response) {
        let mainData = Response.data
        /* 设置主通信数据 */
        _this.$store.dispatch('setMainData',mainData)
        /* 初始化路由 */
        _this.addRoutes(mainData.routes, mainData.config)
      }

      let catchFunction = function(error) {
        console.log('%c 获取主配置信息失败! ', 'background: #222; color: #bada55')
        console.log('%c 请检查模板文件window.config.apiUrl配置参数是否正确,或者服务端是否通信正常。 ', 'background: #222; color: #bada55')
        console.log('%c 服务端返回状态如下： ', 'background: #222; color: #bada55')
        console.log(error)
      }
      let apiUrl = this.$store.state.apiUrl
      this.$store.dispatch('getData',{ 'url':apiUrl, thenFunction, catchFunction })
    },
    addRoutes(routesPro, config){
      let childrenRoutes = []
      for (var key in routesPro) {
        childrenRoutes.push({
          name: routesPro[key].name,
          path: routesPro[key].path,
          component: this.$store.state.builderIndex,
          meta: { apiUrl: routesPro[key].apiUrl }
        })
      }
      // childrenRoutes.push({ path: '*', name:'notFound', component: notFound }) //404页面
      let routes = [
        {
          path: config.loginUrl,
          name: config.loginRouterNmae,
          component: this.$store.state.loginPage
        },
        /* 在容器组件内增加子路由 */
        {
          path: config.mainPath,
          component: this.$store.state.container,
          children: childrenRoutes
        },
      ]
      /* 增加路由 */
      this.$router.addRoutes(routes)
    }
  }
}
</script>

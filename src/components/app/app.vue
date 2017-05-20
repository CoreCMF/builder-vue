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
    initMainData () {
      this.$http.post(this.$store.state.apiUrl).then((Response) => {
        let mainData = Response.data
        /* 设置主通信数据 */
        this.$store.dispatch('setMainData',mainData)
        /* 初始化路由 */
        this.addRoutes(mainData.routes, mainData.config)
      })
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
        // { path: '/admin', component: IndexPage, children: adminChildren },
        /* 在容器组件内增加子路由 */
        { path: config.mainPath, component: this.$store.state.container, children: childrenRoutes },
      ]
      /* 增加路由 */
      this.$router.addRoutes(routes)
    }
  }
}
</script>

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
      let thenFunction = data => {
        let mainData = data.main
        /* 设置主通信数据 */
        this.$store.dispatch('setMainData',mainData)
        /* 初始化路由 */
        this.$router.addRoutes(mainData.routes)
      }
      let catchFunction = function(error) {
        console.log('%c 获取主配置信息失败! ', 'background: #222; color: #bada55')
        console.log('%c 请检查模板文件window.config.apiUrl配置参数是否正确,或者服务端是否通信正常。 ', 'background: #222; color: #bada55')
        console.log('%c 服务端返回状态如下： ', 'background: #222; color: #bada55')
        console.log(error)
      }
      let apiUrl = this.$store.state.apiUrl
      this.$store.dispatch('getData',{ apiUrl, thenFunction, catchFunction })
    }
  }
}
</script>

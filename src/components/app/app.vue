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
        console.log(Response.data)
      })
    }
  }
}
</script>

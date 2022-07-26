<template>
  <div id="app">
    <Header></Header>
    <!-- 所有的一级路由组件都在此显示 -->
    <router-view></router-view>
    <Footer v-show="!$route.meta.isHideFooter"></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'


export default {
  name: 'App',
  mounted(){
    this.$store.dispatch('getCategoryList')
    this.$store.dispatch('getBannerList')
    this.$store.dispatch('getFloors')
    

  },
  components:{
    Header,
    Footer,
  }

}
</script>

<style>

</style>

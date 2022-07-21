<template>
  <div id="app">
    <Header></Header>
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
    this.$store.dispatch('getSearchList',{
      pageNo:1,
      pageSize:10,
    })

  },
  components:{
    Header,
    Footer,
  }

}
</script>

<style>

</style>

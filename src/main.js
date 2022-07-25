import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import TypeNav from '@/components/TypeNav'
import Pagination from '@/components/Pagination'
// import swiper from 'swiper/css/swiper.css'
import '@/plugins/swiper'
import '@/mock/mockServe'

Vue.config.productionTip = false

// 全局组件注册
Vue.component(TypeNav.name, TypeNav)
Vue.component(Pagination.name, Pagination)

new Vue({
  
  render: h => h(App),
  router,
  store
}).$mount('#app')

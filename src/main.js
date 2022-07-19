import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import TypeNav from '@/components/TypeNav'

Vue.config.productionTip = false

// 全局组件注册
Vue.component(TypeNav.name, TypeNav)

new Vue({
  
  render: h => h(App),
  router,
  store
}).$mount('#app')

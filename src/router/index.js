import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from '@/router/routes'

// 声明使用插件
Vue.use(VueRouter)

// 向外默认暴露路由对象
export default new VueRouter({
    // 模式
    mode:'history',  //没有#的模式
    // 注册路由
    routes,
})
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from '@/router/routes'

// 声明使用插件
Vue.use(VueRouter)

// 解决重复跳转路由错误
// 缓存原型上的push函数
const originalPush = VueRouter.prototype.push
// 给原型对象上的push指定新回调函数
VueRouter.prototype.push = function push(location, onResolve, onReject) {
    // 如果有指定任意回调函数, 通过call调用源push函数处理
  if (onResolve || onReject){
    return originalPush.call(this, location, onResolve, onReject)
  }
    // 如果没有指定回调函数, 通过call调用源函数并使用catch来处理错误
  return originalPush.call(this, location).catch((err) => {
    if (VueRouter.isNavigationFailure(err)) {
      // resolve err
      return err
    }
    // rethrow error
    return Promise.reject(err)
  })
}

const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace(location, onResolve, onReject) {
  if (onResolve || onReject){
    return originalReplace.call(this, location, onResolve, onReject)
  }
  return originalReplace.call(this, location).catch((err) => {
    if (VueRouter.isNavigationFailure(err)) {
      // resolve err
      return err
    }
    // rethrow error
    return Promise.reject(err)
  })
}

// 向外默认暴露路由对象
export default new VueRouter({
    // 模式
    mode:'history',  //没有#的模式
    // 注册路由
    routes,
    // 解决路由跳转滚动问题
    scrollBehavior (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
})
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from '@/router/routes'
import store from '@/store'

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
 const router = new VueRouter({
    // 模式
    mode:'history',  //没有#的模式
    // 注册路由
    routes,
    // 解决路由跳转滚动问题
    scrollBehavior (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
})

// 全局前置守卫
router.beforeEach(async (to,from,next)=>{
  // 根据token判断用户是否登录
  const token = store.state.user.token
  if(token){//用户登录
    // 登录后，去登录页
    if(to.path === '/login'){
      // 返回首页
      next('/')
    }else{//登录后去其他页面
      // 根据用户信息，来判断token是否过期
      const hasUserInfo = store.state.user.userInfo.name

      if(hasUserInfo){//用户信息正常
        // 放行
        next()
      }else{//用户信息获取不到
        // 重新拿着token去请求用户信息
        try {//成功，正常跳转
          await store.dispatch('getUserInfo')
          // 放行
          next()
        } catch (error) {//失败，token失效，重置token和用户信息，重新登录
          alert('用户登录已过期，请重新登录')
          // 重置token和用户信息
          store.dispatch('resetUserInfo')
          // 跳转到登录也，记录目标路由，登录成功后，跳转目标路由
          next('/login?redirect=' + to.path)   
        }
      }
    }

  }else{//用户未登录
    // 未登录暂不处理
    if(to.path === '/shopcart'){
      next('/login?redirect=' + to.path)   
    }else{
      next()
    }
  }
})


export default router




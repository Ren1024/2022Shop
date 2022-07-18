import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'


/* 
所有静态路由配置的数组
*/
export default [
    {
        path:'/',
        component:Home
    },
    {
        name:'search',
        path:'/search/:keyword?',
        component:Search,
        // 路由传props参数
        // props:true   //只能接收params参数
        props:(route)=>({
            keyword3: route.params.keyword,
            keyword4: route.query.keyword2
        })
    },
    {
        path:'/login',
        component:Login,
        meta:{
            isHideFooter: true
        }
    },
    {
        path:'/register',
        component:Register,
        meta:{
            isHideFooter: true
        }
    },
]
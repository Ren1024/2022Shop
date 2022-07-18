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
        path:'/search',
        component:Search
    },
    {
        path:'/login',
        component:Login
    },
    {
        path:'/register',
        component:Register
    },
]
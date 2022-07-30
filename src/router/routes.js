import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'
import PaySuccess from '@/pages/PaySuccess'
import Center from '@/pages/Center'
import Myorder from '@/pages/Center/Myorder'
import GroupOrder from '@/pages/Center/GroupOrder'


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
    {
        path: '/detail/:skuId',
        component: Detail
    },
    {
        path: '/shopcart',
        component: ShopCart
    },
    {
        path: '/addcartsuccess',
        component: AddCartSuccess
    },
    {
        path: '/trade',
        component: Trade
    },
    {
        path: '/pay',
        component: Pay
    },
    {
        path: '/paysuccess',
        component: PaySuccess
    },
    {
        path: '/center',
        component: Center,
        redirect:'center/myorder',
        children:[
            {
                path:'myorder',
                component: Myorder
            },
            {
                path:'grouporder',
                component: GroupOrder
            },
            /* {
                path:'',
                redirect:'myorder'
            } */
        ]
    },
   
]
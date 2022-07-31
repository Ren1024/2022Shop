import store from '@/store'
// 默认打包加载
// import Home from '@/pages/Home'
// import Search from '@/pages/Search'
// import Login from '@/pages/Login'
// import Register from '@/pages/Register'
// import Detail from '@/pages/Detail'
// import AddCartSuccess from '@/pages/AddCartSuccess'
// import ShopCart from '@/pages/ShopCart'
// import Trade from '@/pages/Trade'
// import Pay from '@/pages/Pay'
// import PaySuccess from '@/pages/PaySuccess'
// import Center from '@/pages/Center'
// import Myorder from '@/pages/Center/Myorder'
// import GroupOrder from '@/pages/Center/GroupOrder'


// 路由懒加载
const Home = () => import('@/pages/Home')
const Search = () => import('@/pages/Search')
const Login = () => import('@/pages/Login')
const Register = () => import('@/pages/Register')
const Detail = () => import('@/pages/Detail')
const AddCartSuccess = () => import('@/pages/AddCartSuccess')
const ShopCart = () => import('@/pages/ShopCart')
const Trade = () => import('@/pages/Trade')
const Pay = () => import('@/pages/Pay')
const PaySuccess = () => import('@/pages/PaySuccess')
const Center = () => import('@/pages/Center')
const Myorder = () => import('@/pages/Center/Myorder')
const GroupOrder = () => import('@/pages/Center/GroupOrder')


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
        },
        // 用户未登录正常访问，用户登陆后不能访问
        /* beforeEnter: (to, from, next) => {
            // 路由独享守卫
            let token = store.state.user.token
            if(token){
                next('/')
            }else{
                next()
            }
        } */
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
        component: AddCartSuccess,
        beforeEnter: (to, form, next) => {
            let skuNum = to.query.skuNum
            let skuInfo = sessionStorage.getItem('SKUINFO_KEY')
            if(skuNum && skuInfo){
                next()
            }else{
                next('/')
            }
        }
    },
    {
        path: '/trade',
        component: Trade,
        beforeEnter: (to, from, next) => {
            if(from.path === '/shopcart'){
                next()
            }else{
                next('/')
            }
        }
    },
    {
        path: '/pay',
        component: Pay,
        beforeEnter: (to, from, next) => {
            if(from.path === '/trade'){
                next()
            }else{
                next('/')
            }
        }
    },
    {
        path: '/paysuccess',
        component: PaySuccess,
        beforeEnter: (to, from, next) => {
            if(from.path === '/pay'){
                next()
            }else{
                next('/')
            }
        }
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
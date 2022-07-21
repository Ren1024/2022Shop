/* 
mock数据ajax模拟接口
*/

import axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// 配置基础的路径和超时
const service = axios.create({
    baseURL:'/mock',
    timeout: 20000
})

// 请求拦截器
service.interceptors.request.use(config => {
    // 进度条开始
    NProgress.start()
    // 配置信息必须返回
    return config
})

// 响应拦截器
service.interceptors.response.use(
    response => {
        // 进度条完成
        NProgress.done()
        // 返回真实数据
        return response.data
    },
    error => {
        // 进度条完成
        NProgress.done()
        // 统一的错误处理
        alert(error.message | '未知的请求错误')

        // 返回失败的promise实例，失败的原因时error
        return Promise.reject(error)
    }
)

// 暴露二次封装axios
export default service
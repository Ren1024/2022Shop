/* 
vuex管理的user信息模块
*/
import { reqSendCode, reqUserInfo, reqUserLogin, reqUserLogout, reqUserRegister } from '@/api'
import { getUserTempId,setUserToken,getUserToken,removeUserToken } from '@/utils/user'

const state = {
    userTempId: getUserTempId(),
    code:'',
    token: getUserToken(),
    userInfo:{}
}

const mutations = {
    RECEIVE_CODE(state,code){
        state.code = code
    },
    RECEIVE_TOKEN(state,token){
        state.token = token
    },
    RECEIVE_USERINFO(state,userInfo){
        state.userInfo = userInfo
    },
    RESET_USERINFO(state){
        state.userInfo = {},
        state.token = ''
    }

}

const actions = {
    // 用户注册
    async userRegister({commit},config){
        const result = await reqUserRegister(config)
        if(result.code === 200){
            return 'ok'
        }else {
            return Promise.reject(new Error('failed'))
        }
    },
    // 获取验证码
    async SendCode({commit},phone){
        const result = await reqSendCode(phone)
        // console.log(result);
        if(result.code === 200){
            commit('RECEIVE_CODE',result.data)
        }
    },

    // 用户登录
    async UserLogin({commit},{phone, password}){
        const result = await reqUserLogin(phone, password)
        if(result.code === 200){
            commit('RECEIVE_TOKEN',result.data.token)
            setUserToken(result.data.token)
        }else{
            return Promise.reject(new Error('failed'))
        }
    },

    // 获取用户信息
    async getUserInfo({commit}){
        const result = await reqUserInfo()
        // console.log(result);
        if(result.code === 200){
            commit('RECEIVE_USERINFO',result.data)
            return 'ok'
        }else{
            return Promise.reject(new Error('failed'))
        }
    },

    // 重置用户token和用户信息
    resetUserInfo({commit}){
        // 重置localstore里面储存的token
        removeUserToken()
        commit('RESET_USERINFO')
    },

    // 退出登录
    async userLogout({commit}){
        const result = await reqUserLogout()
        if(result.code === 200){
            removeUserToken()
            commit('RESET_USERINFO')
            return 'ok'
        }else {
            return Promise.reject(new Error('failed'))
        }
    }

}

const getters ={}

export default {
    state,
    mutations,
    actions,
    getters
}
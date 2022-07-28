/* 
vuex管理的user信息模块
*/
import { reqSendCode, reqUserLogin, reqUserRegister } from '@/api'
import { getUserTempId,setUserToken,getUserToken,removeUserToken } from '@/utils/user'

const state = {
    userTempId: getUserTempId(),
    code:'',
    token: getUserToken(),
}

const mutations = {
    RECEIVE_CODE(state,code){
        state.code = code
    },
    RECEVIE_TOKEN(state,token){
        state.token = token
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
            commit('RECEVIE_TOKEN',result.data.token)
            setUserToken(result.data.token)
        }else{
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
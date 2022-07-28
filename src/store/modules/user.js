/* 
vuex管理的user信息模块
*/
import { reqSendCode, reqUserRegister } from '@/api'
import { getUserTempId } from '@/utils/user'

const state = {
    userTempId: getUserTempId(),
    code:'',
}

const mutations = {
    RECEIVE_CODE(state,code){
        state.code = code
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
    }
}

const getters ={}

export default {
    state,
    mutations,
    actions,
    getters
}
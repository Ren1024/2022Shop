/* 
vuex管理的user信息模块
*/
import { getUserTempId } from '@/utils/user'

const state = {
    userTempId: getUserTempId()
}

const mutations = {}

const actions = {}

const getters ={}

export default {
    state,
    mutations,
    actions,
    getters
}
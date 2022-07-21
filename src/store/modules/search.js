/* 
vuex管理的search模块
*/

import {
    reqSearchList,
} from '@/api'

const state = {
    searchlist:{}
}
const mutations = {
    SEARCH_LIST(state,searchlist){
        state.searchlist = searchlist
    }
}
const actions = {
    async getSearchList({commit},searchParams){
        const result = await reqSearchList(searchParams)
        // console.log(result);
        if(result.code === 200){
            commit('SEARCH_LIST',result.data)
        }
    }
}
const getters = {
    // 商品列表
    goodsList(state){
        return state.searchlist.goodsList || []
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}


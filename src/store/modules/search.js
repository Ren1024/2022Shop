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
        // 删除发送请求携带的空对象和空数组
        searchParams = {...searchParams}
        Object.keys(searchParams).forEach(key => {
            if(searchParams[key] === '' || Array.isArray(searchParams[key]) && searchParams[key].length === 0){
                delete searchParams[key]
            }
        })


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
    },
    // 筛选列表
    attrsList(state){
        return state.searchlist.attrsList || []
    },
    // 品牌列表
    trademarkList(state){
        return state.searchlist.trademarkList || []
    },
<<<<<<< HEAD
    // 所有数据的总数量
=======
>>>>>>> 252cb0de819491fe5c565c5dd43570dbb88a401e
    total(state){
        return state.searchlist.total || 0
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}


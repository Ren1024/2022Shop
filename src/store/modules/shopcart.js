import { reqAddOrUpdateShopCart,reqCartList } from "@/api"

const state = {
    shopCartList: []
}

const mutations = {
    RECEIVE_CARTLIST(state,shopCartList){
        state.shopCartList = shopCartList
    }
}

const actions = {
    // 商品添加购物车
    async addOrUpdateCart({commit}, {skuId, skuNum}){
        const result = await reqAddOrUpdateShopCart(skuId,skuNum)
        if(result.code === 200){
            return 'ok'
        }else{
            return Promise.reject(new Error('failure'))
        }
    },

    // 获取购物车列表
    async getShopCartList({commit}){
        const result = await reqCartList()
        if(result.code === 200){
            commit('RECEIVE_CARTLIST',result.data[0].cartInfoList)
        }
    }
}

const getters = {
    
}

export default {
    state,
    mutations,
    actions,
    getters
}
import { reqAddOrUpdateShopCart,reqCartList, reqDeleteCart, reqUpdateCartChecked } from "@/api"

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
    },

    // 更新购物车选中状态
    async updateCartChecked({commit},{skuID,isChecked}){
        const result = await reqUpdateCartChecked(skuID,isChecked)
        if(result.code === 200){
            return 'ok'
        }else{
            return Promise.reject(new Error('failed'))
        }
    },

    //全选更新状态
    async updateCartCheckedAll({commit,dispatch,state},isChecked){
        let promises = []
        state.shopCartList.forEach(item => {
            if(item.isChecked === isChecked) return 
            let promise = dispatch('updateCartChecked',{skuID:item.skuId, isChecked})
            promises.push(promise)
        })
        return Promise.all(promises)
    },

    // 删除单个商品
    async deteleCart({commit}, skuId){
        const result = await reqDeleteCart(skuId)
        if(result.code === 200){
            return 'ok'
        }else{
            return Promise.reject(new Error('failed'))
        }
    },

    // 删除选中的商品
    async deleteCartAll({commit,dispatch,state}){
        let promises = []
        state.shopCartList.forEach(item => {
            if(!item.isChecked) return 
            let promise = dispatch('deteleCart',item.skuId)
            promises.push(promise)
        })

        return Promise.all(promises)
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
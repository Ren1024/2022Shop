/* 
vuex管理的home模块
*/
import { reqCategoryList } from '@/api'


const state = {
    categoryList:[]
}
const mutations = {
    CATEGORY_LIST(state,list){
        state.categoryList = list.splice(0,15)
        // console.log(list);
    }
}
const actions = {
    async getCategoryList({commit}){
        const result = await reqCategoryList()
        // console.log(result);
        if(result.code === 200){
            commit('CATEGORY_LIST',result.data)
        }
    }
}
const getters = {}

export default {
    state,
    mutations,
    actions,
    getters
}
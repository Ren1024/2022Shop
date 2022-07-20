/* 
vuex管理的home模块
*/
import { reqCategoryList, reqBannerList } from '@/api'


const state = {
    categoryList:[],
    bannerList:[],
}
const mutations = {
    CATEGORY_LIST(state,list){
        state.categoryList = list.splice(0,15)
        // console.log(list);
    },
    BANNER_LIST(state,bannerList){
        state.bannerList = bannerList.splice(4, 6)
    }
}
const actions = {
    async getCategoryList({commit}){
        const result = await reqCategoryList()
        // console.log(result);
        if(result.code === 200){
            commit('CATEGORY_LIST',result.data)
        }
    },
    async getBannerList({commit}){
        const result = await reqBannerList()
        if(result.code === 200){
            commit('BANNER_LIST',result.data)
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
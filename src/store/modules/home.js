/* 
vuex管理的home模块
*/
import { 
    reqCategoryList,
    reqBannerList,
    reqFloors,
    reqTodayList,
} from '@/api'


const state = {
    categoryList:[],
    bannerList:[],
    floors:[],
    todaylist:[]
}
const mutations = {
    CATEGORY_LIST(state,list){
        state.categoryList = list.splice(0,15)
        // console.log(list);
    },
    BANNER_LIST(state,bannerList){
        state.bannerList = bannerList
    },
    TODAY_LIST(state,todayList){
        state.todayList = todayList
    },
    FLOORS(state,floors){
        state.floors = floors
    }
}
const actions = {
    async getCategoryList({commit}){
        const result = await reqCategoryList()
        if(result.code === 200){
            commit('CATEGORY_LIST',result.data)
        }
    },
    async getBannerList({commit}){
        const result = await reqBannerList()
        // console.log(result);
        if(result.code === 200){
            commit('BANNER_LIST',result.data)
            // console.log();
        }
    },
    async getTodayList({commit}){
        const result = await reqTodayList()
        if(result.code === 200){
            commit('TODAY_LIST',result.data)
        }
    },
    async getFloors({commit}){
        const result = await reqFloors()
        if(result.code === 200){
            commit('FLOORS',result.data)
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
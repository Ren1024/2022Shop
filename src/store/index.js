/* 
vuex最核心的管理对象
*/

import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'


Vue.use(Vuex)


export default new Vuex.Store({
    modules,
})
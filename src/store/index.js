import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
// const state = {};//state 仓库存储数据的地方
// const mutations = {};//mutations 修改state的唯一手段
// const actions = {};//处理action,可以书写自己的业务逻辑，也可以处理异步
// const getters = {};//理解为计算属性,用于简化仓库数据，让组件获取仓库的数据更加方便
import home from './home'
import search from './search'
export default new Vuex.Store({
    // state,
    // mutations,
    // actions,
    // getters
    modules: {
        home,
        search
    }

})
// home
import { reqCategoryList, reqBannerList, reqFloorList } from "@/api";
const state = {
    categoryList: [],
    bannerList:[] ,
    floorList:[],
};
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList.slice(0, -2);//.slice(0,-2)
    },
    BANNERLIST(state,bannerList){
        state.bannerList=bannerList
    },
    FLOORLIST(state,floorList){
        state.floorList=floorList
    }

};
const actions = {
    async categoryList({ commit }) {
        let result = await reqCategoryList();
        if (result.code == 200) {
            commit("CATEGORYLIST", result.data);
        }
    },
    async bannerList({commit}) {
        let result =await reqBannerList();
        if(result.code==200){
            commit("BANNERLIST",result.data)
        }
    },
    async floorList({commit}){
        let result=await reqFloorList();
        if(result.code==200){
            commit("FLOORLIST",result.data)
        }
    }
};
const getters = {};

export default {
    state,
    mutations,
    actions,
    getters
}
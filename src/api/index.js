import requests from "./request"
import mockRequests from './mockAjax'
//http://gmall-h5-api.atguigu.cn/api/product/getBaseCategoryList

export const reqCategoryList = () => requests({ url: '/product/getBaseCategoryList', method: 'get' });
    // 返回promise对象
export const reqBannerList=()=>mockRequests.get('/banner')

export const reqFloorList=()=>mockRequests.get('/floor')
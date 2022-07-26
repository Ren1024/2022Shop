/* 
包含所有接口请求函数的模块
*/

import ajax from './ajax'
import mockAjax from './mockAjax'

// 首页三级分类 /api/product/getBaseCategoryList
export function reqCategoryList(){
    // return ajax.get('product/getBaseCategoryList')
    // return ajax('product/getBaseCategoryList')  //发送不带参数get请求
    return ajax({
        url:'/product/getBaseCategoryList',
        method:'get',
    })
}

/* // banner请求(真实接口)
export const reqBannerList = () => ajax('/cms/banner') */

// 搜索商品请求
export const reqSearchList = (listParams) => ajax.post('/list',listParams)

// 商品详情页   /api/item/{ skuId }  GET
export const reqDetailInfo = (skuId) =>{
    return ajax({
        url:`/item/${skuId}`,
        method:'GET'
    })
}

// 添加或更新购物车 /api/cart/addToCart/{ skuId }/{ skuNum }  POST
export const reqAddOrUpdateShopCart = (skuId,skuNum) =>{
    return ajax({
        url:`/cart/addToCart/${ skuId }/${ skuNum }`,
        method:'POST'
    })
}


// mock模拟数据请求
// today-mock请求
export const reqTodayList = () => mockAjax('/today')

// floors请求
export const reqFloors = () => mockAjax('/floors')

// banner请求（mock接口）
export const reqBannerList = () => mockAjax('/banner')

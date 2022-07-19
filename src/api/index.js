/* 
包含所有接口请求函数的模块
*/

import ajax from './ajax'

// 首页三级分类 /api/product/getBaseCategoryList
export function reqCategoryList(){
    // return ajax.get('product/getBaseCategoryList')
    // return ajax('product/getBaseCategoryList')  //发送不带参数get请求
    return ajax({
        url:'/product/getBaseCategoryList',
        method:'get',
    })
}
/* 
mock配置文件
*/
import Mock from 'mockjs'
import floors from  './floors.json'
import today from './today.json'
import banners from './banners.json'

// 今日推荐数据
Mock.mock( '/mock/today', {code: 200, data:today} )

// 楼层数据
Mock.mock( '/mock/floors', {code: 200, data:floors} )

// 广告banner数据
Mock.mock( '/mock/banner', {code: 200, data:banners} )

// console.log('mockserve');
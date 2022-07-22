/* 
mock配置文件
*/
import Mock from 'mockjs'
import floors from  './floors.json'
import today from './today.json'

// 今日推荐数据
Mock.mock( '/mock/today', {code: 200, data:today} )

// 楼层数据
Mock.mock( '/mock/floors', {code: 200, data:floors} )

// console.log('mockserve');
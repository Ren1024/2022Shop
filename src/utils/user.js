
// 这是一个用户获取标识工具
// 第一步从localstorage,获取用户唯一标识，如果有直接返回
// 第二步，如果没有，通过uuid生成用户唯一标识，然后保存到loaclstorage
import { v4 as uuidv4 } from 'uuid';

// 获取用户唯一标识
function getUserTempId(){
    let userTempId = localStorage.getItem('USERTEMID_KEY')
    if(!userTempId){
        userTempId = uuidv4(); 
        localStorage.setItem('USERTEMID_KEY',userTempId)
    }
    return userTempId
}

export {
    getUserTempId,
}
//'@/config/httpConfig'  这个文件中只有一个 export default 导出   所以这个文件引入  中axios  是对@/config/httpConfig' 文件导出重新定义的名称
import axios from '@/config/httpConfig'


// 
export function fetchPermission() {
    return axios.get('/static/permission.json') // 得到的是需要权限的路由
}
// 导出login 方法  返回的是后台的数据
export function login() {
    return axios.get('/static/login.json')  
}

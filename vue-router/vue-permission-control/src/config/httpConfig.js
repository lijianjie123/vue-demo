import axios from 'axios'
import store from '@/store/index.js'
import baseURL from './baseUrl'
import { Message } from 'element-ui'
//这个http 是默认倒出的
const http = {}

// instance 实例
var instance = axios.create({
    //连接超时 这里是 毫秒为单位
    timeout: 5000,
    baseURL    //'http://localhost:8080'
})

// 添加请求拦截器
// 全局拦截
// 请求前的拦截
instance.interceptors.request.use(
    function(config) {
        // 请求头添加token
        if (store.state.UserToken) {
            config.headers.Authorization = store.state.UserToken
        }
        return config
    },
    function(error) {
        //请求错误时做些事
        return Promise.reject(error)
    }
)

// 响应拦截器即异常处理

//请求后的拦截  响应拦截
instance.interceptors.response.use(
    response => {
        return response.data
    },
    err => {
        if (err && err.response) {
            switch (err.response.status) {
            case 400:
                err.message = '请求出错'
                break
            case 401:
                Message.warning({
                    message: '授权失败，请重新登录'
                })
                store.commit('LOGIN_OUT')
                setTimeout(() => {
                    window.location.reload()
                }, 1000)

                return
            case 403:
                err.message = '拒绝访问'
                break
            case 404:
                err.message = '请求错误,未找到该资源'
                break
            case 500:
                err.message = '服务器端出错'
                break
            }
        } else {
            err.message = '连接服务器失败'
        }
        Message.error({
            message: err.message
        })
        return Promise.reject(err.response)
    }
)

http.get = function(url, options) {
    return new Promise((resolve, reject) => {
        instance
            .get(url, options)
            .then(response => {
                if (response.code === 0) {
                    resolve(response.data)
                } else {
                    Message.error({
                        message: response.message
                    })
                    reject(response.message)
                }
            })
            .catch(e => {
                console.log(e)
            })
    })
}

http.post = function(url, data, options) {
    return new Promise((resolve, reject) => {
        instance
            .post(url, data, options)
            .then(response => {
                if (response.code === 0) {
                    resolve(response.data)
                } else {
                    Message.error({
                        message: response.message
                    })
                    reject(response.message)
                }
            })
            .catch(e => {
                console.log(e)
            })
    })
}

export default http
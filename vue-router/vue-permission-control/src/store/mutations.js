export default {
    LOGIN_IN(state, token) {
        state.UserToken = token //  login.vue中 提交了一个 LOGIN_IN 方法， 就相当于调用了state.js 中的 set 方法   设置了一个  token
    },
    LOGIN_OUT(state) {
        state.UserToken = ''
    },
    toggleNavCollapse(state) {
        state.isSidebarNavCollapse = !state.isSidebarNavCollapse
    },
    setCrumbList(state, list) {
        state.crumbList = list
    }
}

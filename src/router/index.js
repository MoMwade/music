//vue生态包
import vue from 'vue'
import VueRouter from 'vue-router'
//第三方包
//自己写的
import Router from './ruoter.js'

//注册两个全局组件router-linl router-view
vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: Router
})

//导出
export default router


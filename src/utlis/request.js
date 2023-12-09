//对axios做一些配置
import axios from 'axios'
import axiosRetry from 'axios-retry'
import store from '@/store'
// axios.create返回一个新的axios的实例
const request = axios.create({
    baseURL:"http://localhost:3000",//改变基础请求地址
    timeout:5000  //5000毫秒不返回数据直接断开请求
})
// _axios 和 axios 99%功能一致
axiosRetry(axios,{retries:3})
//每一次请求都会触发的函数如何去设置(请求拦截器)
request.interceptors.request.use((comfing)=>{
    console.log(comfing);
    //comfing每一次发起请求的详细配置(请求的地址、请求的路径、请求的参数...)
    //在这个位置可以对请求的配置做更改
    const cookie = store.state.auth.cookie
    // console.log(cookie)
    if(cookie){
        //策略模式
        ({
            get(){
                comfing.params || (comfing.params = {})
                comfing.params.cookie = cookie
            },
            post(){
                comfing.data || (comfing.data = {})
                comfing.data.cookie = cookie
            }
        })[comfing.method]()

        // if(comfing.method === 'post'){
        //     comfing.data || (comfing.data = {})
        //     comfing.data.cookie = cookie
        // }
        // if (comfing.method === 'get') {
        //     comfing.params || (comfing.params = {})
        //     comfing.params.cookie = cookie
        // }
    }
    
    return comfing;
})
window.axios = axios;
// window._axios = _axios;

// axios.get("/abc") => http://localhost:8080/abc
//基础请求地址baseURL
window.request = request
export default request
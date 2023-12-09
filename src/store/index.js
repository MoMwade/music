import Vue from "vue";
import Vuex from "vuex";
import persistedstate from 'vuex-persistedstate';
import {getBlockPage,getLoginCellphone,getUserDetail} from '@/service/index'
Vue.use(Vuex);

const store = new Vuex.Store({
    state:{ //存储公共数据
        blocks:[], //首页数据
        auth:{}, //登录状态
        UserInfor:{}, //用户数据
        isDarkMode:false, //深色模式
        SongsDate:[], //歌单数据
    },
    mutations:{ //定义同步修改公共数据的方法
        //store.commit("UpdetaBlocks") 触发 
        UpdetaBlocks(state,res){
            let {data:{data:{blocks}}} = res 
            state.blocks = blocks;
        },
        updataAuth(state,res){
            state.auth = res.data
        },
        UpdataUserInfor(state,res){
            state.UserInfor = res.data
        },
        UpiSdarkState(state){
            state.isDarkMode = !state.isDarkMode
        },
        UpdataSongsDate(state,res){
            state.SongsDate = res
        },
    },
    actions:{//定义异步修改公共数据的方法 借助mutations
        // store.dispatch("requestBlockPage") 触发
        async requestBlockPage(store){
            const [err,homePage] = await getBlockPage();
            if(err) return;
            store.commit("UpdetaBlocks",homePage) 
        },
        async requestLoginCellphone(store,data){
            const[err,res] =  await getLoginCellphone(data)
            if(err) return;
            store.commit('updataAuth',res)
        },
        async requestUserDetail(store,data){
            const[err,res] =  await getUserDetail(data)
            if(err) return;
            store.commit('UpdataUserInfor',res)
        },
    },
    //persistedstate 将state中的数据实时缓存到本地
    plugins:[persistedstate()] //扩展其他额外功能
})

export default store;
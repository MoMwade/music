<template>
    <div class="w-[100px] h-[100px] bg-red-400 rounded-md mx-auto mt-[100px]">
            <button @click="fn">get请求</button>
            <button @click="fn2">post请求</button>
    </div>
</template>

<script>
import axios from "axios"

export default {
    name:'request-index',
    methods:{
        //1发送get请求
        fn(){
            // axios.request({
            //     method:'get', //请求方式
            //     url:"/artist/list", //请求路径
            //     params:{type:2,area:7,limit:50}, //get请求参数
            // })
            // .then(res => console.log(res)) //请求成功回调
            // .catch(err => console.log(err)) //请求失败回调
            //写法2
            axios
                .get('/artist/list',{
                    params:{type:2,area:7,limit:50}, //get请求参数
                })
                .then(res => console.log(res)) //请求成功回调
                .catch(err => console.log(err)) //请求失败回调
        },
        //2发送post请求
        fn2(){
            // axios
            //     .request({
            //         method:'post', //请求方式
            //         url:"/artist/list", //请求路径
            //         data:{type:1,area:7,limit:20}, //post请求参数
            //     })
            //     .then(res => console.log(res)) //请求成功回调
            //     .catch(err => console.log(err)) //请求失败回调
             //写法2
            axios
                .post(`/artist/list?timestamp=${Date.now()}`,{type:2,area:96,limit:100},)//get请求参数
                .then(res => console.log(res)) //请求成功回调
                .catch(err => console.log(err)) //请求失败回调
            
        }
    }

};
</script>

<style>

</style>
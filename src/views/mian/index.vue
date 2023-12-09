<template>
    <div>
        Mian
        <input type="text" placeholder="请输入搜索关键字" v-model="keywords">
        <button @click="search">搜索</button>
    </div>
</template>

<script>
// import axios from 'axios'
import {cloudsearch} from '@/service'
export default {
    name:'mian-index',
    data(){
        return {
            keywords:'',
            songs:[]
        }
    },
    methods: {
        //async 本质上是promise的语法糖(简写) 
        async search() {
            // post 搜索七里香
            // let that = this
            // axios.post(`/cloudsearch?timestamp=${Date.now()}`,{type:1,keywords:that.keywords})
            // .then(res => {
            //     this.songs = res.data.result.songs
            // })
            // .catch(err => {console.log(err)})

            // cloudsearch({type:1,keywords:this.keywords})
            // .then(res => console.log(res))
            // .catch(err => console.log(err))

            // const res = await cloudsearch({type:1,keywords:this.keywords})
            // console.log(res);
            const [res,err] = await cloudsearch({type:1,keywords:this.keywords})
            if(err) return console.log(err)
            console.log(res);
        }
    }
}
</script>

<style>

</style>